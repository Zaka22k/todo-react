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
      className={`button ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
