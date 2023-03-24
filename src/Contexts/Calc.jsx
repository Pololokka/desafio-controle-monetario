import React, { createContext, useContext, useEffect, useState } from "react";

const CalcContext = createContext();

const CalcProvider = ({ children }) => {
  const [save, setSave] = useState(0);
  const [percent, setPercent] = useState(0);

  const [day, setDay] = useState(0);
  const [finalDay, setFinalDay] = useState(0);

  const [result, setResult] = useState(0);
  const [resultDaily, setResultDaily] = useState(0);

  useEffect(() => {
    if (save !== 0 && percent !== 0 && day !== 0 && finalDay !== 0) {
      const saving = save * (percent / 100);
      setResult(saving);

      const time = finalDay - day;

      const daily = ((save - saving) / time).toFixed(2);
      setResultDaily(daily);
    }
  }, [save, percent, day, finalDay]);

  return (
    <CalcContext.Provider
      value={{
        save,
        setSave,
        percent,
        setPercent,
        result,
        setResult,
        resultDaily,
        setResultDaily,
        day,
        setDay,
        finalDay,
        setFinalDay,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

const CalcConsumer = () => useContext(CalcContext);
export { CalcContext, CalcProvider, CalcConsumer };
