import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <Card
        gorsel="😸"
        baslik="Kediler"
        aciklama="Sevimli dostlarınız için konforlu yaşam alanları"
      />
      <Card
        gorsel="🐶"
        baslik="Köpekler"
        aciklama="Sadık dostlarınıza özel bakım ve oyun hizmetleri"
      />
      <Card
        gorsel="🐤"
        baslik="Kuşlar"
        aciklama="Kanatlı dostlarınız için güvenli ve keyifli ortamlar"
      />
      <Button tipi="birincil" baslik="Bilgi Al" />
      <Button tipi="varsayilan" baslik="Randevu Al" />
      <Footer />
    </div>
  );
};

export default App;
