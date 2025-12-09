import { Instagram, Linkedin, Twitter } from "lucide-react";

const FooterSocialCard = () => {
  const socialItems = [
    {
      icon: Instagram,
      text: "@zaferdevs",
    },
    {
      icon: Twitter,
      text: "@ZafeAyan",
    },
    {
      icon: Linkedin,
      text: "@zaferayan",
    },
  ];
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Sosyal Medya</h3>
      {/* Social Items */}
      <div className="space-y-3">
        {socialItems.map((social, index) => {
          const Icon = social.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <Icon className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300">{social.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSocialCard;
