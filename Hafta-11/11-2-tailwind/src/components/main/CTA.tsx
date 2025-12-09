import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-orange-600 py-16">
      <div className="space-y-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">
          Kuşunuzun Sağlığı İçin Hemen İletişime Geçin
        </h2>
        <p className="text-xl font-base text-orange-100">
          Deneyimli veteriner hekimimizden randevu alın
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+905312345678"
            className="flex items-center bg-white text-orange-600
            px-8 py-3 rounded-lg font-semibold justify-center gap-4
            hover:bg-orange-50 transition duration-300
          "
          >
            <Phone />
            <span>+90 (531) 234 56 78</span>
          </a>
          <a
            href="/iletisim"
            className="flex items-center bg-orange-700 text-white
            px-8 py-3 rounded-lg font-semibold justify-center gap-4
            hover:bg-orange-900 transition duration-300
          "
          >
            <span>Iletişim bilgileri</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
