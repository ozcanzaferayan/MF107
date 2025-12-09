// rafce
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import type { House } from "./Houses";

type Props = {
  house: House;
};

const HouseCard = ({ house: { id, name, price, images } }: Props) => {
  return (
    <div className="grid gap-4" key={id}>
      <Splide aria-label="Otel görselleri">
        {images.map((image) => (
          <SplideSlide key={image}>
            <img
              src={image}
              alt="Oda görseli"
              className="h-36 w-full object-cover"
            />
          </SplideSlide>
        ))}
      </Splide>
      <div className="grid gap-1">
        <h1 className="px-4 text-2xl font-semibold">{name}</h1>
        <span className="px-4 text-base text-slate-500">
          Historical Mansion at Bosphorus
        </span>
        <span className="px-4">
          <span className="font-semibold">{price}</span> per 7 nights
        </span>
      </div>
    </div>
  );
};

export default HouseCard;
