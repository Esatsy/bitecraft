import AppKit
import Foundation

struct Experience {
    let title: String
    let meta: String
    let bullets: [String]
}

struct Project {
    let title: String
    let meta: String
    let description: String
}

final class CVPDF {
    private let pageWidth: CGFloat = 595.28
    private let pageHeight: CGFloat = 841.89
    private let margin: CGFloat = 38
    private let contentWidth: CGFloat
    private var context: CGContext
    private var y: CGFloat = 38
    private var pageCount = 0

    private let ink = NSColor(calibratedWhite: 0.08, alpha: 1)
    private let muted = NSColor(calibratedWhite: 0.34, alpha: 1)
    private let light = NSColor(calibratedWhite: 0.52, alpha: 1)
    private let rule = NSColor(calibratedWhite: 0.83, alpha: 1)
    private let accent = NSColor(calibratedRed: 0.76, green: 0.29, blue: 0.07, alpha: 1)

    init?(outputURL: URL) {
        self.contentWidth = pageWidth - (margin * 2)
        var mediaBox = CGRect(x: 0, y: 0, width: pageWidth, height: pageHeight)
        guard let pdfContext = CGContext(outputURL as CFURL, mediaBox: &mediaBox, nil) else {
            return nil
        }
        self.context = pdfContext
    }

    func build() {
        beginPage()
        drawHeader()
        drawSummary()
        drawSkills()
        drawExperience()
        drawProjects()
        drawEducation()
        drawLanguages()
        endPage()
        context.closePDF()
    }

    private func beginPage() {
        context.beginPDFPage(nil)
        context.saveGState()
        context.translateBy(x: 0, y: pageHeight)
        context.scaleBy(x: 1, y: -1)
        NSGraphicsContext.current = NSGraphicsContext(cgContext: context, flipped: true)
        y = margin
        pageCount += 1
    }

    private func endPage() {
        NSGraphicsContext.current = nil
        context.restoreGState()
        context.endPDFPage()
    }

    private func newPage() {
        endPage()
        beginPage()
    }

    private func ensureSpace(_ height: CGFloat) {
        if y + height > pageHeight - margin {
            newPage()
        }
    }

    private func font(_ size: CGFloat, weight: NSFont.Weight = .regular) -> NSFont {
        NSFont.systemFont(ofSize: size, weight: weight)
    }

    private func paragraph(lineSpacing: CGFloat = 1.2, alignment: NSTextAlignment = .left) -> NSMutableParagraphStyle {
        let style = NSMutableParagraphStyle()
        style.lineSpacing = lineSpacing
        style.alignment = alignment
        return style
    }

    private func attrs(size: CGFloat, weight: NSFont.Weight = .regular, color: NSColor? = nil, lineSpacing: CGFloat = 1.2, alignment: NSTextAlignment = .left) -> [NSAttributedString.Key: Any] {
        [
            .font: font(size, weight: weight),
            .foregroundColor: color ?? ink,
            .paragraphStyle: paragraph(lineSpacing: lineSpacing, alignment: alignment)
        ]
    }

    private func attributed(_ text: String, _ attrs: [NSAttributedString.Key: Any]) -> NSAttributedString {
        NSAttributedString(string: text, attributes: attrs)
    }

    @discardableResult
    private func draw(_ text: String, x: CGFloat, y: CGFloat, width: CGFloat, attributes: [NSAttributedString.Key: Any]) -> CGFloat {
        let string = attributed(text, attributes)
        let height = ceil(string.boundingRect(
            with: NSSize(width: width, height: .greatestFiniteMagnitude),
            options: [.usesLineFragmentOrigin, .usesFontLeading]
        ).height)
        string.draw(in: CGRect(x: x, y: y, width: width, height: height + 2))
        return height
    }

    private func measure(_ text: String, width: CGFloat, attributes: [NSAttributedString.Key: Any]) -> CGFloat {
        ceil(attributed(text, attributes).boundingRect(
            with: NSSize(width: width, height: .greatestFiniteMagnitude),
            options: [.usesLineFragmentOrigin, .usesFontLeading]
        ).height)
    }

    private func ruleLine(y: CGFloat) {
        context.setStrokeColor(rule.cgColor)
        context.setLineWidth(0.7)
        context.move(to: CGPoint(x: margin, y: y))
        context.addLine(to: CGPoint(x: pageWidth - margin, y: y))
        context.strokePath()
    }

    private func section(_ title: String) {
        ensureSpace(28)
        y += 8
        let titleAttrs = attrs(size: 8.8, weight: .bold, color: ink)
        draw(title.uppercased(), x: margin, y: y, width: contentWidth, attributes: titleAttrs)
        y += 15
        ruleLine(y: y)
        y += 7
    }

    private func drawHeader() {
        let leftWidth: CGFloat = 346
        let rightWidth = contentWidth - leftWidth - 20

        draw("Esat Serden Yıldırım", x: margin, y: y, width: leftWidth, attributes: attrs(size: 25, weight: .bold, lineSpacing: 0))
        y += 30
        draw("Full Stack Engineer | AI-Assisted Builder | Founder of BiteCraft", x: margin, y: y, width: leftWidth, attributes: attrs(size: 10.6, weight: .semibold, color: accent))

        let contact = """
        Ankara, Türkiye
        yldrma423@gmail.com
        github.com/Esatsy
        linkedin.com/in/esatsy
        twitter.com/Esatsy
        """
        _ = draw(contact, x: margin + leftWidth + 20, y: margin + 1, width: rightWidth, attributes: attrs(size: 8.8, color: muted, lineSpacing: 1.1, alignment: .right))

        y = max(y + 20, margin + 74)
        ruleLine(y: y)
        y += 12
    }

    private func drawSummary() {
        let text = "Full Stack Engineer with 4+ years of software development experience building end-to-end web, iOS, and Android products through BiteCraft. Experienced in Next.js, React, React Native, Node.js, Redis, Firebase, Supabase, C#, and ASP.NET, with ownership across frontend, backend, infrastructure, deployment, and production launch. Uses AI-assisted workflows, coding agents, LangGraph, agentic coding, and MCP while validating generated code through architecture review and production-focused engineering practices. Applies cryptography fundamentals including RSA, AES, hashing, X.509 standards, and secure handshake protocols while following OWASP security guidelines."
        let bodyAttrs = attrs(size: 9.6, color: ink, lineSpacing: 1.4)
        ensureSpace(measure(text, width: contentWidth, attributes: bodyAttrs) + 8)
        y += draw(text, x: margin, y: y, width: contentWidth, attributes: bodyAttrs) + 3
    }

    private func drawSkills() {
        section("Core Skills")
        let rows: [(String, String)] = [
            ("Frontend", "Next.js, React, React Native, TypeScript, Swift, Tailwind CSS, UI/UX Implementation"),
            ("Backend", "Node.js, C#, ASP.NET, Redis, Firebase, Supabase, pgvector, RESTful API Design"),
            ("Infrastructure", "DevOps, Server Configuration, End-to-End Deployment, Production Launch"),
            ("AI Development", "LangGraph, LangChain, LLM API Integration, Agentic Coding, AI IDE Workflows, MCP"),
            ("Security", "OWASP Security Guidelines, Cryptography (RSA, AES, Hashing), X.509 Standards, Secure Handshake Protocols"),
            ("Ways of Working", "Agile, Scrum, Sprint Planning, Team Leadership")
        ]

        let labelAttrs = attrs(size: 9, weight: .bold)
        let valueAttrs = attrs(size: 9, color: ink)
        for (label, value) in rows {
            let rowHeight = max(measure(label, width: 124, attributes: labelAttrs), measure(value, width: contentWidth - 138, attributes: valueAttrs)) + 2
            ensureSpace(rowHeight)
            draw(label, x: margin, y: y, width: 124, attributes: labelAttrs)
            draw(value, x: margin + 138, y: y, width: contentWidth - 138, attributes: valueAttrs)
            y += rowHeight
        }
    }

    private func drawExperience() {
        section("Experience")
        let items = [
            Experience(
                title: "Founder & Independent Full Stack Developer | BiteCraft",
                meta: "2022 - Present | Ankara, Türkiye",
                bullets: [
                    "Deliver web, iOS, and Android products independently through BiteCraft, owning development from concept to deployment.",
                    "Built B.O.T.S. - Based On True Stories, an AI-powered party game that converts real Reddit stories into structured gameplay with LangGraph, Google Gemini, Supabase, pgvector, and Kick chat integration.",
                    "Build Zoka, a cross-platform multiplayer social deduction bluff game for iOS and Android, using React Native and Firebase.",
                    "Apply AI IDE and agentic coding workflows to accelerate development by 50%+ while validating AI-generated code for security, maintainability, and architecture fit.",
                    "Own full-stack implementation, technical decisions, infrastructure setup, deployment, and product iteration."
                ]
            ),
            Experience(
                title: "Full Stack Developer | BiteCraft - Remax Turkey",
                meta: "2025 - 03/2026 | Ankara, Türkiye",
                bullets: [
                    "Architected and developed a modern real estate filtering and management platform for a local Remax branch.",
                    "Built the full stack independently with React, Node.js, and Redis.",
                    "Managed system design, DevOps, server configuration, and final production launch.",
                    "Developed flows for preference questionnaires, smart search, property filtering, listing exploration, and map-based discovery."
                ]
            ),
            Experience(
                title: "Scrum Master & Team Lead | GOIT Bootcamps",
                meta: "03/2024 - 10/2024 | Ankara, Türkiye",
                bullets: [
                    "Led agile development teams during an 8-month intensive full-stack program.",
                    "Coordinated sprint goals, team collaboration, and delivery quality across 10+ comprehensive full-stack projects.",
                    "Supported code quality, planning discipline, and effective communication across project teams."
                ]
            )
        ]

        for item in items {
            drawExperienceItem(item)
        }
    }

    private func drawExperienceItem(_ item: Experience) {
        let titleAttrs = attrs(size: 9.8, weight: .bold)
        let metaAttrs = attrs(size: 8.4, weight: .semibold, color: muted)
        let bulletAttrs = attrs(size: 8.9, color: ink, lineSpacing: 1.1)
        let bulletWidth = contentWidth - 12
        var needed = measure(item.title, width: contentWidth, attributes: titleAttrs) + 14
        for bullet in item.bullets {
            needed += measure("• " + bullet, width: bulletWidth, attributes: bulletAttrs) + 2
        }
        ensureSpace(needed + 4)

        y += draw(item.title, x: margin, y: y, width: contentWidth, attributes: titleAttrs) + 1
        y += draw(item.meta, x: margin, y: y, width: contentWidth, attributes: metaAttrs) + 3
        for bullet in item.bullets {
            y += draw("• " + bullet, x: margin + 8, y: y, width: bulletWidth, attributes: bulletAttrs) + 1
        }
        y += 5
    }

    private func drawProjects() {
        section("Selected Projects")
        let projects = [
            Project(title: "B.O.T.S. - Based On True Stories", meta: "2026 | Next.js, TypeScript, LangGraph, Google Gemini, Supabase, pgvector", description: "AI-powered party game that turns real Reddit stories into structured storytelling sessions with PullPush sourcing, Gemini story evaluation, breakpoint questions, final judgment voting, and Kick streaming chat integration."),
            Project(title: "Zoka", meta: "2025 - Present | React Native, Firebase", description: "Cross-platform multiplayer social deduction bluff game for iOS and Android, focused on room setup, player flow, game mode entry, and real-time multiplayer gameplay. Web build: 3b476628.zoka-8oh.pages.dev"),
            Project(title: "Remax Turkey Filtering & Management Platform", meta: "2025 - 03/2026 | React, Node.js, Redis", description: "Real estate filtering and management platform with smart search, questionnaire flows, property listings, map-based exploration, DevOps, and production deployment."),
            Project(title: "GOIT Bootcamps Full-Stack Projects", meta: "03/2024 - 10/2024 | Full Stack", description: "Completed 10+ full-stack projects in agile teams while coordinating sprint planning, delivery quality, and collaboration as Scrum Master & Team Lead."),
            Project(title: "DraftBetter - LoL Assistant", meta: "Tailwind CSS, Product Design", description: "Desktop-style assistant interface concept for champion recommendations, draft analysis, team state, and AI-assisted pick/ban decisions."),
            Project(title: "PulseSync", meta: "Mobile UI, Activity Tracking", description: "Mobile fitness and heart-rate tracking interface concept with workout summaries, live activity metrics, heart-rate views, and compact navigation."),
            Project(title: "Sümbül Bahçe Kooperatif", meta: "Web App, Dashboard, Landing Page", description: "Cooperative management concept with public landing pages, member flows, financial summaries, production tracking, and admin dashboard views.")
        ]

        let gutter: CGFloat = 18
        let colWidth = (contentWidth - gutter) / 2
        var index = 0
        while index < projects.count {
            let left = projects[index]
            let right = index + 1 < projects.count ? projects[index + 1] : nil
            let leftHeight = projectHeight(left, width: colWidth)
            let rightHeight = right.map { projectHeight($0, width: colWidth) } ?? 0
            let rowHeight = max(leftHeight, rightHeight)
            ensureSpace(rowHeight + 7)
            drawProject(left, x: margin, y: y, width: colWidth)
            if let right {
                drawProject(right, x: margin + colWidth + gutter, y: y, width: colWidth)
            }
            y += rowHeight + 7
            index += 2
        }
    }

    private func projectHeight(_ project: Project, width: CGFloat) -> CGFloat {
        let titleAttrs = attrs(size: 9.3, weight: .bold)
        let metaAttrs = attrs(size: 8, weight: .semibold, color: muted)
        let bodyAttrs = attrs(size: 8.4, color: ink, lineSpacing: 1.1)
        return measure(project.title, width: width, attributes: titleAttrs)
            + measure(project.meta, width: width, attributes: metaAttrs)
            + measure(project.description, width: width, attributes: bodyAttrs)
            + 8
    }

    private func drawProject(_ project: Project, x: CGFloat, y startY: CGFloat, width: CGFloat) {
        var localY = startY
        localY += draw(project.title, x: x, y: localY, width: width, attributes: attrs(size: 9.3, weight: .bold)) + 1
        localY += draw(project.meta, x: x, y: localY, width: width, attributes: attrs(size: 8, weight: .semibold, color: muted)) + 2
        _ = draw(project.description, x: x, y: localY, width: width, attributes: attrs(size: 8.4, color: ink, lineSpacing: 1.1))
    }

    private func drawEducation() {
        section("Education")
        let titleAttrs = attrs(size: 9.3, weight: .bold)
        let metaAttrs = attrs(size: 8.6, weight: .semibold, color: muted)
        ensureSpace(46)
        y += draw("Ufuk University", x: margin, y: y, width: contentWidth, attributes: titleAttrs) + 1
        y += draw("Associate Degree in Computer Programming | 02/2022 - 03/2024", x: margin, y: y, width: contentWidth, attributes: metaAttrs) + 4
        y += draw("Ankara Yıldırım Beyazıt University", x: margin, y: y, width: contentWidth, attributes: titleAttrs) + 1
        y += draw("Associate Degree in Computer Programming | 09/2021 - 02/2022", x: margin, y: y, width: contentWidth, attributes: metaAttrs) + 2
    }

    private func drawLanguages() {
        section("Languages")
        let bodyAttrs = attrs(size: 9, color: ink)
        let noteAttrs = attrs(size: 8, color: light)
        ensureSpace(34)
        y += draw("Turkish: Native / Bilingual        English: Professional working proficiency", x: margin, y: y, width: contentWidth, attributes: bodyAttrs) + 4
        y += draw("Phone number and live portfolio URL were not included because they are not listed on the portfolio website.", x: margin, y: y, width: contentWidth, attributes: noteAttrs)
    }
}

guard CommandLine.arguments.count == 2 else {
    fputs("Usage: swift generate_cv_pdf.swift output.pdf\n", stderr)
    exit(64)
}

let outputURL = URL(fileURLWithPath: CommandLine.arguments[1]).standardizedFileURL
guard let pdf = CVPDF(outputURL: outputURL) else {
    fputs("Could not create PDF context\n", stderr)
    exit(1)
}

pdf.build()
