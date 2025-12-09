import FooterAboutCard from "./FooterAboutCard";
import FooterContactCard from "./FooterContactCard";
import FooterSocialCard from "./FooterSocialCard";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 
        place-items-start md:place-items-center"
        >
          <FooterAboutCard />
          <FooterContactCard />
          <FooterSocialCard />
        </div>
      </div>
      <div className="border-t border-gray-800 p-8 text-center">
        <p className="text-gray-400">
          © 2025 Zafer AYAN Veteriner Kliniği. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
