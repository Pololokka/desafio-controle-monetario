const Select = ({ title, name, options, handleChange }) => {
  return (
    <>
      <label htmlFor={name} className="texto texto-hover">
        {title}
      </label>
      <select
        className="texto input__geral"
        name={name}
        onChange={handleChange}
      >
        {options.map((item, index) => {
          return (
            <option key={index} className="texto input__geral" value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
