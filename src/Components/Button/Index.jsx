const Button = ({ name, title, onClick }) => {
  return (
    <input
      type="button"
      value={title}
      name={name}
      className="texto btn__geral"
      onClick={(event) => onClick(parseInt(event.target.value))}
    />
  );
};

export default Button;
