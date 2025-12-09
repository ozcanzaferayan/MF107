import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="flex gap-4 shadow sticky top-0 z-10 p-4">
        <Link to="/students">Ogrenciler</Link>
        <Link to="/students/1">Detay</Link>
        <Link to="/students/add">Ekle</Link>
        <Link to="/students/1/delete">Sil</Link>
        <Link to="/students/1/edit">Güncelle</Link>
      </div>

      <h1>Ogrenci bilgi sistemine hoşgeldiniz</h1>
      <h1>Haberler</h1>
    </div>
  );
};

export default Home;
