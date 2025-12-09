import { Clock, Heart, Shield } from "lucide-react";
import FeatureCard, { type Feature } from "./FeatureCard";

const Features = () => {
  const features: Feature[] = [
    {
      icon: Heart,
      title: "Kuş Sağlığı Uzmanı",
      description:
        "Kuşların sağlığı ve bakımında uzmanlaşmış veteriner hekimlik",
    },
    {
      icon: Shield,
      title: "Güvenilir Tedavi",
      description:
        "Modern ekipman ve güncel tedavi yöntemleri ile güvenli hizmet",
    },
    {
      icon: Clock,
      title: "Acil Durumlar",
      description: "7/24 acil durumlarda ulaşılabilir ve hızlı müdahale",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {/* Text Container */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-lg font-base text-slate-600 max-w-3xl mx-auto">
            Kuş sağlığında uzmanlaşmış ekibimiz ve modern kliniğimiz ile sevimli
            dostlarınıza en iyi bakımı sunuyoruz.
          </p>
        </div>
        {/* 3 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
