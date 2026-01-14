import styles from "./Button.module.scss";

const Button = (props) => {
  const {
    className = "",
    type = "button",
    onClick,
    children,
    isDisabled,
  } = props;
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
