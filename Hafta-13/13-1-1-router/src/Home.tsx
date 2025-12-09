import { Link } from "react-router";

const Home = () => {
  return (
    <div className="grid gap-1">
      <Link to={"/"}>Anasayfa</Link>
      <Link to={"/houses"}>Evler</Link>
      <Link to={"/houses/add"}>Ev Ekle</Link>
    </div>
  );
};

export default Home;
