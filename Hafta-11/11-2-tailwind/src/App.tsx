import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
