const Select = ({ title, name, options }) => {
  return (
    <>
      <label htmlFor={name} className="texto texto-hover">
        {title}
      </label>
      <select className="texto input__geral" name={name}>
        {Object.keys(options).map((item, index) => {
          return (
            <option key={index} className="texto input__geral" value={item}>
              {options[item]}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
