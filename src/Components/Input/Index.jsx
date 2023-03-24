const Input = ({ name, title, type, minimun, maximum, handleMoney }) => {
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
        onChange={(event) => handleMoney(event)}
      />
    </>
  );
};

export default Input;
