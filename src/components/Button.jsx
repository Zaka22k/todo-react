const Button = (props) => {
  const { className = "", type = "button", onClick, children } = props;
  return (
    <button onClick={onClick} className={`button ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
