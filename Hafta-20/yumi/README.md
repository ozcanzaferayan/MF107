# 🌸 Yumi

**Yumi**, kawaii chibi anime karakteri eşliğinde kullanıcının ruh haline göre
küçük, yumuşak ve baskısız öneriler sunan bir mobil mental wellness uygulamasıdır.

Bu proje **Expo + React Native + TypeScript** ile geliştirilmiştir
ve görsel üretim sürecinde **AI destekli bir pipeline** kullanır.

---

## ✨ Proje Felsefesi

- Baskı yok
- Hedef yok
- Planlama yok
- Sadece “şu an” için küçük bir destek

Yumi bir görev yöneticisi değil,  
**tatlı bir yol arkadaşıdır.**

---

## 🎀 Karakter: Yumi

**Yumi**, Japonca’da farklı yazımlarla:

- “Güzel arkadaş”
- “Güzelliğin kaynağı”
  anlamlarına gelir.

Karakter özellikleri:

- Kawaii chibi anime stili
- Büyük kafa, küçük vücut
- Pastel renkler
- Yumuşak, şefkatli ve yargılamayan bir tavır

---

## 🙂 Mood’lar

Yumi şu 5 temel ruh haline tepki verir:

- 😴 Sleepy
- 😐 Bored
- 😔 Sad
- 😡 Stressed
- 😊 Happy

---

## 🧠 AI Asset Pipeline

### Kullanılan Araçlar

- **NotebookLM** → Ürün planlama & karakter tanımı
- **Gemini** → Karakter ve mood görselleri
- **Photoshop** → Arkaplan silme & export
- **Expo** → Mobil uygulama

---

## 🎨 Karakter Üretim Kuralları

- Siyah arkaplan
- Kalın beyaz sticker outline
- Arka planda gölge / gradient yok
- Tek karakter, merkezde

---

## 🎀 Gemini – Base Character Prompt

```txt
Create a cute kawaii chibi anime girl character named Yumi
for a mobile mental wellness app.

Style:
- Kawaii chibi anime style
- Big head, small body proportions
- Soft pastel color palette
- Rounded shapes only
- Gentle, calm, and comforting vibe

Sticker Style:
- Thick clean white outline
- Fully closed white border

Background:
- Solid pure black background

Illustration:
- Clean digital illustration
- High quality
- Centered composition
```

Reference file:

```
yumi_base_sticker.png
```

---

## 🎭 Gemini – Mood Prompts (Use Reference Image)

> Reference image: `yumi_base_sticker.png`

### 😴 Sleepy

```txt
Use the reference image as Yumi.
Make Yumi look sleepy with droopy eyes and a calm posture.
```

### 😐 Bored

```txt
Use the reference image as Yumi.
Make Yumi look bored but cute with a slight head tilt.
```

### 😔 Sad

```txt
Use the reference image as Yumi.
Make Yumi look sad but comforting.
```

### 😡 Stressed

```txt
Use the reference image as Yumi.
Make Yumi look stressed but calm, like taking a deep breath.
```

### 😊 Happy

```txt
Use the reference image as Yumi.
Make Yumi look happy with a warm smile.
```

---

## 📁 Asset Klasör Yapısı

```txt
assets/
  characters/
    yumi/
      yumi_base.png
      yumi_sleepy.png
      yumi_bored.png
      yumi_sad.png
      yumi_stressed.png
      yumi_happy.png
```

---

## 🚀 Projeyi Çalıştırma

```bash
npm install
npx expo start
```

---

## 🛠 Tech Stack

- Expo
- React Native
- TypeScript
- StyleSheet
- React Navigation
- Reanimated

---

Made with 🌸 by Yumi
