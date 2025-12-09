import { Heart, type LucideIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const ServicesTextContainer = () => {
  const services: Service[] = [
    {
      icon: Heart,
      title: "Genel Muayene",
      description: "Düzenli sağlık kontrolü ve önleyici bakım",
    },
    {
      icon: Heart,
      title: "Hastalık Tedavisie",
      description: "Kuş hastalıkları tanı ve tedavi hizmetleri",
    },
    {
      icon: Heart,
      title: "Acil Müdahale",
      description: "24 saat acil durum hizmetleri",
    },
  ];
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">
        Kuş Sağlığında Uzman Hizmetler
      </h2>
      <div className="space-y-4">
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesTextContainer;
