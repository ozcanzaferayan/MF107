import type { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  feature: Feature;
};

const FeatureCard = ({ feature: { icon, title, description } }: Props) => {
  const Icon = icon;
  return (
    <div
      className="bg-gray-50 hover:bg-orange-50
    space-y-4 text-center p-6 rounded-xl transition duration-300
  "
    >
      <div
        className="bg-orange-50 text-orange-600 w-16 h-16 
      rounded-full grid place-items-center mx-auto"
      >
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-base font-base text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
