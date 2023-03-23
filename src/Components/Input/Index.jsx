const Input = ({ name, title, type, minimun, maximum }) => {
  return (
    <>
      <label htmlFor={name} className="texto texto-hover">
        {title}
      </label>
      <input
        type={type}
        name={name}
        min={minimun}
        max={maximum}
        className="texto input__geral"
        onChange={(event) => console.log(event.target.value)}
      />
    </>
  );
};

export default Input;
