import type { Service } from "./ServicesTextContainer";

type Props = {
  service: Service;
};

const ServiceCard = ({ service: { icon, title, description } }: Props) => {
  const Icon = icon;
  return (
    <div className="flex items-center gap-4">
      <div className="bg-teal-100 text-teal-500 p-2 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="font-base text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
