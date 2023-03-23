const Button = ({ name, title }) => {
  return (
    <input
      type="button"
      value={title}
      name={name}
      className="texto btn__geral"
      onClick={(event) => console.log(parseInt(event.target.value))}
    />
  );
};

export default Button;
