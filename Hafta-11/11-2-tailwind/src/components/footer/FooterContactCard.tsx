import { Clock, MapPin, Phone } from "lucide-react";

const FooterContactCard = () => {
  const contactItems = [
    {
      icon: Phone,
      title: "+90 (531) 234 56 78",
    },
    {
      icon: MapPin,
      title: "Moda, Kadıköy",
    },
    {
      icon: Clock,
      title: "09:00 - 21:00",
    },
  ];
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Iletişim</h3>
      <div className="space-y-3">
        {contactItems.map((contact) => {
          const Icon = contact.icon;
          return (
            <div className="flex items-start gap-3">
              <Icon className="text-orange-400" />
              <span className="text-slate-300">{contact.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterContactCard;
