const Button = ({ name, title, handleClick }) => {
  return (
    <input
      type="button"
      value={title}
      name={name}
      className="texto btn__geral"
      onClick={(event) => handleClick(parseInt(event.target.value))}
    />
  );
};

export default Button;
