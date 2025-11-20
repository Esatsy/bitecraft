# 🧪 Canlı Site Test Listesi - www.bitecraft.dev

Portfolio siteniz için kapsamlı test rehberi.

## ⚡ Hızlı Erişim Testi

### 1. Site Erişilebilirliği
- [ ] **www.bitecraft.dev** açılıyor mu?
- [ ] HTTPS çalışıyor mu? (🔒 simgesi görünüyor mu?)
- [ ] Sayfa yükleme hızı < 3 saniye
- [ ] Hata mesajı yok (404, 500, vb.)

### 2. İlk Görsel Test
- [ ] Hero section düzgün görünüyor mu?
- [ ] Particle animasyonları çalışıyor mu?
- [ ] Logo (BiteCraft) görünüyor mu?
- [ ] Navigation bar düzgün yerleşmiş mi?

---

## 🖱️ İnteraktif Özellikler Testi

### Navigation (Gezinme)
```
Test: Her linke tıklayın ve doğru bölüme gittiğini onaylayın
```

- [ ] **About** - About Me bölümüne gidiyor
- [ ] **Skills** - Skills & Technologies bölümüne gidiyor
- [ ] **Experience** - Experience Timeline bölümüne gidiyor
- [ ] **Projects** - Featured Projects bölümüne gidiyor
- [ ] **Contact** - Contact form bölümüne gidiyor
- [ ] **BiteCraft Logo** - En üste scroll ediyor
- [ ] Smooth scroll çalışıyor (ani atlamalar yok)

### Dark/Light Mode Toggle
```
Test: Tema değiştirme butonuna tıklayın
```

- [ ] 🌙 buton görünüyor (dark mode'da)
- [ ] Tıklayınca ☀️ oluyor (light mode'a geçiş)
- [ ] Arka plan rengi değişiyor
- [ ] Metin renkleri uyumlu
- [ ] Kartlar (glass-card) güzel görünüyor
- [ ] Sayfayı yenileyin: Tercih hatırlanıyor mu?

### Particle Background
```
Test: Fareyi hero section'da hareket ettirin
```

- [ ] Parçacıklar görünüyor
- [ ] Fareyle etkileşim var (çizgiler oluşuyor)
- [ ] Tıklayınca yeni parçacık ekleniyor
- [ ] Performans sorunsuz (kasma yok)

### Scroll Efektleri
```
Test: Yavaşça aşağı scroll edin
```

- [ ] Hero içeriği fade-out oluyor (parallax)
- [ ] About section fade-in yapıyor
- [ ] Skills kartları sırayla beliriyor (stagger)
- [ ] Timeline itemlar slide-in yapıyor
- [ ] Project kartlar animasyonlu giriyor
- [ ] Tüm animasyonlar smooth

### Scroll to Top Button
```
Test: Sayfanın altına inin
```

- [ ] Sağ altta buton beliriyor (300px scroll sonrası)
- [ ] Butona tıklayınca en üste gidiyor
- [ ] Smooth scroll çalışıyor
- [ ] Hover'da büyüyor

---

## 📱 Responsive (Mobil) Testi

### Desktop Görünüm (> 768px)
```
Test: Tarayıcı penceresini tam ekran yapın
```

- [ ] Navigation bar tek satırda
- [ ] Hero text büyük ve okunabilir
- [ ] About section iki sütun (resim + metin)
- [ ] Stats kartları 4'lü grid
- [ ] Skills kartları 4 sütun
- [ ] Timeline zigzag (sağ-sol)
- [ ] Project kartları 2 sütun grid
- [ ] Her şey düzgün yerleşmiş

### Tablet Görünüm (768px)
```
Test: Tarayıcıyı daraltın veya DevTools (F12) → Toggle Device
```

- [ ] Navigation hamburger menu'ye dönüşüyor
- [ ] Hero text boyutu düşüyor
- [ ] About tek sütun
- [ ] Stats 2x2 grid
- [ ] Skills 3 sütun
- [ ] Timeline mobil versiyona geçiyor
- [ ] Projects tek sütun

### Mobil Görünüm (< 480px)
```
Test: iPhone boyutuna ayarlayın (375px)
```

- [ ] Hamburger menu düzgün açılıyor
- [ ] Menu'ye tıklayınca linkler görünüyor
- [ ] Link'e tıklayınca menu kapanıyor
- [ ] Hero text okunaklı
- [ ] CTA butonları düzgün yerleşmiş
- [ ] Kartlar mobilde güzel görünüyor
- [ ] Form inputları kolayca tıklanıyor
- [ ] Footer düzgün

---

## 📋 İçerik Doğrulama

### Hero Section
- [ ] İsim: "Esat Yıldırım" görünüyor
- [ ] Title: "Full Stack Developer" görünüyor
- [ ] Subtitle doğru
- [ ] 2 buton var: "View My Work" ve "Get In Touch"
- [ ] Butonlar çalışıyor

### About Section
- [ ] Profil resmi (avatar) görünüyor
- [ ] Bio metni 3 paragraf
- [ ] "4 years" experience belirtiliyor
- [ ] "Full Stack Developer" vurgulanmış
- [ ] Teknolojiler listeleniyor (React, Node.js, ASP.NET, SQL)
- [ ] "Team Lead" ve "Scrum Master" bahsediliyor
- [ ] 4 istatistik kartı: "4+ Years", "15+ Projects", "100% Commitment", "∞ Learning"

### Skills Section
- [ ] 3 kategori var: Frontend, Backend, Tools
- [ ] Frontend: React, HTML, CSS, JavaScript, TypeScript, Tailwind
- [ ] Backend: Node.js, ASP.NET, SQL, MongoDB, Express, REST APIs
- [ ] Tools: Trello, Git, Scrum, Team Lead, GOIT, Agile
- [ ] GOIT Full Stack Developer sertifika kartı
- [ ] Tüm emojiler görünüyor

### Experience Timeline
- [ ] 5 timeline item var
- [ ] "Present" - Full Stack Developer
- [ ] "2023" - GOIT Program
- [ ] "2020 - Present" - Team Lead & Scrum Master
- [ ] "2019" - Career Start
- [ ] "Graduated" - Ufuk University
- [ ] Timeline çizgisi görünüyor
- [ ] Noktalar pulse animasyonu yapıyor

### Projects Section
- [ ] 3 proje kartı var
- [ ] **Tarhana Kazanı**: 🍲 emoji, "LIVE" badge, link çalışıyor
- [ ] **Remax Para Fai**: 🏠 emoji, "LIVE" badge, link çalışıyor
- [ ] **GOIT Projects**: 🎓 emoji, "10+" badge, GitHub link
- [ ] Tüm linkler yeni sekmede açılıyor
- [ ] Hover'da kartlar tilt oluyor

### Contact Section
- [ ] Form görünüyor
- [ ] 3 input field: Name, Email, Message
- [ ] Placeholder'lar doğru
- [ ] "Send Message" butonu var

### Footer
- [ ] Copyright yılı: 2024
- [ ] "Esat Yıldırım. All rights reserved."
- [ ] Navigation linkleri var
- [ ] Linkler çalışıyor

---

## 📧 Contact Form Testi

### Form Validasyonu
```
Test: Boş form göndermeyi deneyin
```

- [ ] Required field uyarıları çalışıyor
- [ ] Email formatı kontrol ediliyor
- [ ] Tüm alanlar doldurulmadan gönderimiyor

### Başarılı Gönderim
```
Test: Formu doldurun ve gönderin
```

**Test Verisi:**
```
Name: Test User
Email: test@example.com
Message: This is a test message from the live site!
```

- [ ] "Send Message" butonu loading durumuna geçiyor (spinner)
- [ ] Başarılı mesaj görünüyor: "✓ Message sent successfully!"
- [ ] Mesaj yeşil arka planlı
- [ ] Form otomatik temizleniyor
- [ ] 5 saniye sonra mesaj kayboluyor

### Hata Durumu
```
Test: İnterneti kapatıp gönderin (opsiyonel)
```

- [ ] Hata mesajı görünüyor: "✗ Oops! Something went wrong"
- [ ] Mesaj kırmızı arka planlı

---

## 🎨 Tasarım & Animasyon Testi

### Glassmorphism Efektleri
- [ ] Kartlar yarı-şeffaf görünüyor
- [ ] Backdrop blur efekti çalışıyor
- [ ] Kenarlıklar ince ve şık
- [ ] Gölgeler yumuşak

### Gradient Efektleri
- [ ] Logo gradient text
- [ ] Butonlar gradient background
- [ ] Timeline çizgisi gradient
- [ ] Başlıklar gradient accent
- [ ] Renkler uyumlu (cyan-purple-orange)

### Hover Efektleri
- [ ] Navigation linkleri: alt çizgi beliriyor
- [ ] Skill kartları: scale + rotate
- [ ] Project kartları: tilt + shadow
- [ ] Butonlar: glow efekti
- [ ] Tüm hover'lar smooth

### 3D Tilt Efekti
```
Test: Fareyi kartların üzerinde hareket ettirin
```

- [ ] Project kartları tilt yapıyor
- [ ] Skill kartları tilt yapıyor
- [ ] Glare efekti görünüyor
- [ ] Smooth geçişler

---

## 🚀 Performans Testi

### PageSpeed Insights
```
Test URL: https://pagespeed.web.dev/
```

1. **www.bitecraft.dev** adresini girin
2. "Analyze" tıklayın
3. Skorları kontrol edin:

**Beklenen Skorlar:**
- [ ] Performance: 85+ (ideali 90+)
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### GTmetrix Test
```
Test URL: https://gtmetrix.com/
```

- [ ] Grade: A veya B
- [ ] Performance Score: 85+
- [ ] Structure Score: 85+
- [ ] Fully Loaded Time: < 3 saniye

### Browser DevTools Test
```
Test: F12 → Console
```

- [ ] Console'da hata yok (kırmızı error)
- [ ] Warning'ler kabul edilebilir
- [ ] Particle.js, GSAP, AOS yükleniyor

```
Test: F12 → Network
```

- [ ] Tüm dosyalar yükleniyor (200 status)
- [ ] Total size: < 2 MB
- [ ] Load time: < 3 saniye

---

## 🌐 Tarayıcı Uyumluluk Testi

Test her tarayıcıda:

### Chrome/Edge (Chromium)
- [ ] Tüm özellikler çalışıyor
- [ ] Animasyonlar smooth
- [ ] Particles görünüyor

### Firefox
- [ ] Tüm özellikler çalışıyor
- [ ] Glassmorphism efektleri
- [ ] Animasyonlar smooth

### Safari (Mac/iOS)
- [ ] Tüm özellikler çalışıyor
- [ ] Backdrop blur çalışıyor
- [ ] Scroll smooth

### Mobil Tarayıcılar
- [ ] iOS Safari - Test edin
- [ ] Chrome Mobile - Test edin
- [ ] Samsung Internet - Test edin

---

## 🔍 SEO & Meta Tags Testi

### View Page Source
```
Test: Sağ tık → "View Page Source" veya Ctrl+U
```

- [ ] `<title>` doğru: "BiteCraft - Esat Yıldırım | Full Stack Developer"
- [ ] Meta description var
- [ ] Viewport meta tag var
- [ ] Favicon görünüyor (🚀)

### Social Media Preview
```
Test: https://www.opengraph.xyz/
```

- [ ] URL'yi girin ve preview'a bakın
- [ ] Title görünüyor
- [ ] Description okunabilir

---

## ♿ Erişilebilirlik Testi

### Klavye Navigasyonu
```
Test: Fareyi kullanmadan Tab tuşuyla gezinin
```

- [ ] Tab ile linklere gidiliyor
- [ ] Focus state görünüyor
- [ ] Enter ile linkler çalışıyor
- [ ] Form inputları erişilebilir

### Screen Reader Test (Opsiyonel)
- [ ] Alt textler var
- [ ] ARIA labels doğru
- [ ] Semantic HTML kullanılmış

---

## 🎯 Son Kontrol Listesi

### Genel Görünüm
- [ ] ✅ Site profesyonel görünüyor
- [ ] ✅ AI ile yapılmış gibi görünmüyor
- [ ] ✅ Tasarım modern ve benzersiz
- [ ] ✅ Renkler uyumlu
- [ ] ✅ Tipografi okunabilir
- [ ] ✅ Boşluklar düzgün

### Teknik
- [ ] ✅ Hızlı yükleniyor
- [ ] ✅ Hata yok
- [ ] ✅ Tüm linkler çalışıyor
- [ ] ✅ Form çalışıyor
- [ ] ✅ Mobil responsive
- [ ] ✅ HTTPS aktif

### İçerik
- [ ] ✅ Bilgiler doğru
- [ ] ✅ Yazım hataları yok
- [ ] ✅ Linkler güncel
- [ ] ✅ İletişim bilgileri doğru

---

## 🐛 Sorun Bildirimi

Eğer herhangi bir sorun bulursanız, not edin:

**Problem:**
```
[Açıklama]
```

**Bölüm:**
```
[Hangi section'da]
```

**Tarayıcı:**
```
[Chrome/Firefox/Safari + Versiyon]
```

**Ekran Boyutu:**
```
[Desktop/Tablet/Mobile]
```

**Screenshot:**
```
[Varsa ekleyin]
```

---

## ✅ Test Sonuç Raporu

Test tamamlandığında doldurun:

**Test Tarihi:** _______________
**Test Eden:** Esat Yıldırım
**Tarayıcı:** _______________
**Cihaz:** _______________

**Sonuç:**
- Başarılı Testler: ___ / 100+
- Başarısız Testler: ___
- Kritik Hatalar: ___

**Notlar:**
```
[Genel değerlendirme ve notlar]
```

---

**Test listenizi tamamladıktan sonra portfolio'nuz dünyaya açılmaya hazır! 🚀**

