import { Heart } from "lucide-react";

const FooterAboutCard = () => {
  return (
    <div className="space-y-4">
      {/* Card Container */}
      <div className="flex items-center gap-3">
        <div className="bg-orange-500 text-white p-2 rounded-full">
          <Heart />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Zafer AYAN</h3>
          <p className="text-base font-base text-orange-400">
            Veteriner Kliniği
          </p>
        </div>
      </div>
      {/* Text Container */}
      <p className=" text-slate-300">
        Kuş sağlığında uzmanlaşmış veteriner kliniği. Sevimli dostlarınızın
        sağlığı bizim önceliğimiz.
      </p>
    </div>
  );
};

export default FooterAboutCard;
