GIT KOMUTLARI

- git init: localde git`i baslatiyoruz.
- git status: mevcut dizindeki dosyalarin git durumlarini gosterir
- git add .  : mevcut dizindeki dosyalari git sahnesine alir. (. yerine dosya ismi yazilabilir)
- git commit -m "Degisiklik Yaptim": Git tarihcesine stage`deki degisiklikleri ekler.
- git log: Commit gecmislerini (detaylariyla birlikte) gormemizi sagliyor. 
- git push : (itmek) yapilan degisiklikleri github hesabina iter.

.gitignore: github hesabimiza itmek istemedigimiz (gizlemek) dosyalari saklamak icin kullanilir.

HTML

Etiket nedir?
<></> : Boş bir etiket (React'te kullanacagız)
<h1></h1>: Baslik (header etiketi)
<html> : html dosyasi oldugunu belirtir
<head>: kafa demek. Mantiksal ifadeleri barindirir.
CSS ve JS dosyalari belirtilir.
<body>: Govde demek. Ekranda gorunecek ne varsa ekleniyor.
<p> :paragraf demek
! Enter : HTML icerigini olusturur
h1 Tab : otomatik olarak <h1></h1> yazar:
<title> : tarayicidaki sekme basligini degistirir.
<meta> : ust veri. veri ile ilgili bilgi verir.
<meta charset> = "utf-8"> : Sayfadaki turkce karakterlerin nasil kodlanacagi.
<meta name= "viewport">: sayfanin mobilde nasil gozukmesi gerektigi

<br> : break. Satiri kirar ve alt satira gecer
<hr> : hairline. Sac teli. Sac teli gibi ince cizgi atar.
<ol> : ordered list. sirali liste. liste olusturur sira numarasi ekler.
<ul> : unordered list. Sirasiz liste. Sira numarasi eklemez.

<form action= "URL" method= "Post"> : uzak sunucuya form verisi gondermek icin.
<label>: input`u gosteren metindir.
<input>: kullanicidan girdi almak icin
<button type="submit">: tiklandiginda formu gonderir.

<img src = "Url" alt= "Metin" width="100" /> Resim eklemek icin.
<a href= "google.com"> Google`a Git</a> : sayfalari link ile baglamak icin


SEMANTIK ETIKETLER

Semantik Etiket Nedir? : Sayfanin bolumlerini tanimlamak, anlmamlandirmak ve
okunabilirligini arttirmak icin kullanilan etiketler.

BASH KOMUTLARI
1. cd: Homa`a gider. /users/serkan
2. ls: Listeledik ve Desktop klasoru var mi baktik
3. cd Desktop: Masaustu klasorune gittik
4. mkdir Siliconmade: Masaustunde Siliconmade Klasoru olusturduk
5. cd Siliconmade: Siliconmade dizinine git.
6. mkdir htmlgiris: htmlgiris adinda proje klasoru olustur
7. touch index.html 
8. code.


HTML Giriş


<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Örneği</title>
  </head>
  <body>
    <header>
      <h1>Benim Web Sitem</h1>
      <nav>
        <ul>
          <li><a href="#anasayfa">Ana Sayfa</a></li>
          <li><a href="#hakkimda">Hakkımda</a></li>
          <li><a href="#iletisim">İletişim</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="anasayfa">
        <h2>Hoş Geldiniz</h2>
        <p>Bu benim örnek web sitemdir. <strong>HTML</strong> öğreniyorum.</p>
        <img src="ornek.jpg" alt="Örnek resim" />
      </section>

      <section id="hakkimda">
        <h2>Hakkımda</h2>
        <p>Ben web geliştirme ile ilgileniyorum.</p>
      </section>

      <section id="iletisim">
        <h2>İletişim</h2>
        <form>
          <label for="ad">Adınız:</label>
          <input type="text" id="ad" name="ad" /><br /><br />

          <label for="email">E-posta:</label>
          <input type="email" id="email" name="email" /><br /><br />

          <label for="mesaj">Mesajınız:</label><br />
          <textarea id="mesaj" name="mesaj" rows="4" cols="50"></textarea
          ><br /><br />

          <input type="submit" value="Gönder" />
        </form>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Benim Sitem. Tüm hakları saklıdır.</p>
    </footer>
  </body>
</html>
