# DOĞANLİFT Website

Modern, responsive asansör firması web sitesi.

## 📁 Dosya Yapısı

```
asansor-website/
├── index.html          # Ana sayfa
├── style.css           # Ana stil dosyası
├── animations.css      # Animasyon stilleri
├── script.js           # JavaScript fonksiyonları
├── 404.html           # Hata sayfası
├── robots.txt         # Arama motoru yönlendirme
├── sitemap.xml        # Site haritası
├── .htaccess          # Apache sunucu ayarları
├── hero-bg.png.png    # Hero arkaplan görseli
├── logo.png           # Logo
└── *.png              # Sertifika ve diğer görseller
```

## 🚀 Kurulum

### 1. Hosting Seçimi
- **Önerilen:** Hostinger, Turhost, Natro
- **Gereksinimler:** Apache/Nginx, PHP (opsiyonel), SSL sertifikası

### 2. Dosya Yükleme
FTP ile tüm dosyaları public_html veya www klasörüne yükleyin:
```
ftp.yourdomain.com
Kullanıcı: your-username
Şifre: your-password
```

### 3. Google Analytics Kurulumu
1. https://analytics.google.com adresine gidin
2. Yeni property oluşturun
3. Tracking ID'yi alın (G-XXXXXXXXXX)
4. `index.html` dosyasında 2 yerde değiştirin:
   - Satır 52: `src="...?id=G-XXXXXXXXXX"`
   - Satır 57: `gtag('config', 'G-XXXXXXXXXX')`

### 4. Favicon Ekleme
1. Logo dosyanızı favicon oluşturma sitesine yükleyin:
   - https://favicon.io/
   - https://realfavicongenerator.net/
2. Oluşturulan dosyaları indirin:
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png
3. Dosyaları ana dizine yükleyin

### 5. SSL Sertifikası (HTTPS)
- **Let's Encrypt** (Ücretsiz): Hosting panelinden aktifleştirin
- Veya hosting sağlayıcınızdan SSL satın alın
- `.htaccess` dosyası otomatik HTTPS yönlendirmesi yapar

### 6. Domain Ayarları
`index.html` ve `sitemap.xml` dosyalarında domain adını değiştirin:
- `https://doganlift.com/` → `https://yourdomainname.com/`

### 7. Google Search Console
1. https://search.google.com/search-console
2. Domain ekleyin
3. `sitemap.xml` dosyasını gönderin

## 📞 İletişim Bilgileri Güncelleme

`index.html` dosyasında şu bilgileri güncelleyin:
- Telefon numarası
- Email adresi
- Adres
- WhatsApp numarası
- Google Maps embed kodu

## ✅ Kontrol Listesi

- [ ] Tüm dosyalar yüklendi
- [ ] Google Analytics ID güncellendi
- [ ] Favicon dosyaları eklendi
- [ ] SSL sertifikası aktif
- [ ] Domain adı güncellendi
- [ ] İletişim bilgileri doğru
- [ ] Google Search Console'a sitemap gönderildi
- [ ] Mobil uyumluluk test edildi
- [ ] Tüm linkler çalışıyor

## 🛠️ Teknik Destek

Sorun yaşarsanız hosting sağlayıcınızın destek ekibine başvurun.

## 📊 Performans

- **PageSpeed Score:** 90+
- **Mobile-Friendly:** ✅
- **SEO Optimized:** ✅
- **SSL Ready:** ✅

---

© 2026 DOĞANLİFT - Tüm hakları saklıdır.
