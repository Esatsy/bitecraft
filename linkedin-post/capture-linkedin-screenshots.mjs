import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

const outputDir = __dirname;

const storyBody = `I walked into the office expecting a normal Monday, but there was a black notebook sitting on my desk. It had no name on it, just one sentence on the first page: "Do not trust the meeting invite." At first I thought it was a bad joke from someone on the team, but then I heard two coworkers whispering near the coffee machine. Everyone had received the same meeting invite, and the sender was someone who had left the company months ago.`;

const analysis = {
  vibeCheck:
    "This person has one dangerous talent: they can turn one suspicious detail into a full courtroom drama before lunch. Sometimes that is paranoia, sometimes that is survival.",
  characters: [
    {
      name: "[karakter]",
      role: "main storyteller",
      note: "The person who finds the notebook and pushes the truth into the open.",
    },
    {
      name: "The manager",
      role: "opposing force",
      note: "Tries to keep the meeting under control while hiding too much.",
    },
    {
      name: "Former employee",
      role: "mystery trigger",
      note: "The person whose name appears on the meeting invite.",
    },
  ],
  timeline: ["Setup", "Suspicion", "Confrontation", "Truth", "Judgment"],
  segments: [
    {
      chapterTitle: "The Notebook",
      storyBeat: "Setup",
      recap: "",
      keyDetails: [
        "A strange notebook appears on the desk.",
        "Everyone receives the same meeting invite.",
        "The sender left the company months ago.",
      ],
      text:
        "I walked into the office expecting a normal Monday, but there was a black notebook sitting on my desk. It had no name on it, just one sentence on the first page: \"Do not trust the meeting invite.\" At first I thought it was a bad joke from someone on the team, but then I heard two coworkers whispering near the coffee machine. Everyone had received the same meeting invite, and the sender was someone who had left the company months ago.",
      isBreakPoint: true,
      breakPointQuestion: "When [karakter] opened the notebook in the meeting, what do you think was inside?",
      breakPointOptions: [
        { key: "A", label: "Personal notes about everyone in the room" },
        { key: "B", label: "A printed resignation letter from the manager" },
        { key: "C", label: "A list of fake meeting links" },
      ],
      correctAnswer: "A",
      revealText:
        "Every page had someone's name on it, followed by a short personal detail that no stranger should have known.",
      revealExplanation:
        "That changed the story from a weird office prank into something planned by someone with inside knowledge.",
    },
  ],
  caseFile: {
    coreConflict:
      "[karakter] has to decide whether exposing the notebook helps everyone or creates chaos.",
    criticalTurn:
      "The notebook contains personal notes about people in the room.",
    realOutcome:
      "The meeting was not random; it was designed to force a confrontation.",
    debatePrompt:
      "Was [karakter] right to open it publicly, or should they have handled it privately?",
  },
  judgmentQuestion:
    "Was [karakter] right to expose the notebook in front of everyone, or did they escalate too fast?",
  judgmentOptions: [
    { label: "RIGHT", emoji: "✅" },
    { label: "TOO MUCH", emoji: "😬" },
  ],
};

async function screenshot(page, fileName) {
  await page.waitForTimeout(1200);
  await page.addStyleTag({
    content: `
      [data-nextjs-toast],
      [data-nextjs-dialog-overlay],
      [data-nextjs-dialog],
      [data-nextjs-dev-overlay],
      [data-nextjs-error-overlay],
      nextjs-portal {
        display: none !important;
      }
    `,
  });
  await page.screenshot({
    path: path.join(outputDir, fileName),
    fullPage: false,
  });
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 980 },
    deviceScaleFactor: 1,
  });

  await page.route("**/api/stories?**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        source: "seed",
        story: {
          id: "linkedin-demo-story",
          title: "The Office Notebook Nobody Claimed",
          selftext: storyBody,
          subreddit: "BestofRedditorUpdates",
          permalink: "/r/BestofRedditorUpdates/comments/linkedin_demo",
          score: 4218,
          num_comments: 638,
          created_utc: 1710000000,
        },
      }),
    })
  );

  await page.route("**/api/ai", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ analysis }),
    })
  );

  await page.route("**/api/stories/save", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ story: { id: "linkedin-demo-db-story" } }),
    })
  );

  await page.goto(`${BASE_URL}/game`, { waitUntil: "networkidle" });
  await page.waitForSelector("text=Ne tür bir hikayeye düşüyoruz?");
  await screenshot(page, "01-category-selection.png");

  await page.getByRole("button", { name: /Aile & İlişki Draması/i }).click();
  await page.waitForSelector("text=Ne kadar yoğun olsun?");
  await screenshot(page, "02-length-and-quality.png");

  await page.getByRole("button", { name: /Orta/i }).click();
  await page.getByRole("button", { name: /Daha Kaliteli/i }).click();
  await page.getByRole("button", { name: /Hikayeyi Bul/i }).click();
  await page.waitForSelector("text=Vibe Check");
  await page.waitForTimeout(2600);
  await screenshot(page, "03-vibe-check.png");

  await page.getByRole("button", { name: /İsim Vermeye Hazırız/i }).click();
  await page.waitForSelector("input");
  await page.getByPlaceholder(/Komik bir isim/i).fill("Alex");
  await screenshot(page, "04-character-naming.png");

  await page.getByRole("button", { name: /Onayla/i }).click();
  await page.waitForSelector(".story-reading-copy");
  await screenshot(page, "05-story-context-reading.png");

  await page.getByText(/When Alex opened the notebook/i).scrollIntoViewIfNeeded();
  await screenshot(page, "06-breakpoint-question.png");

  await page.getByRole("button", { name: /Gerçeği Göster/i }).click();
  await page.waitForSelector("text=Gerçekte olan:");
  await screenshot(page, "07-reveal-answer.png");

  await page.getByRole("button", { name: /Yargı Zamanı/i }).click();
  await page.waitForSelector(".case-file-grid");
  await screenshot(page, "08-final-case-file.png");

  await browser.close();

  console.log(`LinkedIn screenshots saved in: ${outputDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
