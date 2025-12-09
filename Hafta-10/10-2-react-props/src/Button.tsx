import "./Button.css";

type Props = {
  variant: "primary" | "default" | "danger";
  children: React.ReactNode;
};

const Button = (props: Props) => {
  const btnClass =
    props.variant === "primary"
      ? "btn-primary"
      : props.variant === "default"
      ? "btn-default"
      : "btn-danger";

  return <div className={`btn ${btnClass}`}>{props.children}</div>;
};

export default Button;
