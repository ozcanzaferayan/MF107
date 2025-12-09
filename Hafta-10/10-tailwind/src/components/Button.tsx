type Props = {
  tipi: "birincil" | "varsayilan" | "tehlike";
  baslik: string;
};

const Button = (props: Props) => {
  const birincilClass = "bg-blue-500";
  const varsayilanClass = "bg-gray-500";
  const tehlikeClass = "bg-red-500";

  let renkSinifi = "";

  if (props.tipi === "birincil") renkSinifi = birincilClass;
  if (props.tipi === "varsayilan") renkSinifi = varsayilanClass;
  if (props.tipi === "tehlike") renkSinifi = tehlikeClass;

  // Template Literals
  const yeniSinif = `${renkSinifi} text-white px-8 py-4 m-4 rounded`;

  return <button className={yeniSinif}>{props.baslik}</button>;
};

export default Button;
