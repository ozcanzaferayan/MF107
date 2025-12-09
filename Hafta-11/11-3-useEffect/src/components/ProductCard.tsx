import type { Product } from "../App";

type Props = {
  product: Product;
};

const ProductCard = ({
  product: { image, title, description, price },
}: Props) => {
  return (
    <div className="m-4 p-4 rounded-lg shadow border border-slate-100">
      <img src={image} className="w-full h-32 object-contain" />
      <h1 className="text-2xl font-semibold text-slate-900 line-clamp-1 hover:line-clamp-none">
        {title}
      </h1>
      <h2 className="text-base font-base text-slate-600 line-clamp-3 hover:line-clamp-none">
        {description}
      </h2>
      <h3 className="text-3xl font-semibold text-slate-900 text-right">
        {price}$
      </h3>
    </div>
  );
};

export default ProductCard;
