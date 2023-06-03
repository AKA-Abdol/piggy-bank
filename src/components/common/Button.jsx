import clsx from "clsx";
const Button = (props) => {
  return (
    <button
      type={props.type}
      className={clsx(
        "p-2 text-white text-xl border-2 rounded-2xl border-white",
        props.bgColor
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
