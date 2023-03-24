import "./App.css";

import Input from "./Components/Input/Index";
import Button from "./Components/Button/Index";
import Select from "./Components/Select/Index";

import { CalcConsumer } from "./Contexts/Calc";

function App() {
  const {
    save,
    setSave,
    percent,
    setPercent,
    day,
    setDay,
    finalDay,
    setFinalDay,
    result,
    resultDaily,
  } = CalcConsumer;

  const handleMoney = (event) => {
    setSave(event.target.value);
    console.log(save);
  };

  return (
    <main className="App">
      <h1 className="titulo titulo-hover">Controle de Gastos</h1>
      <div className="card__geral">
        <div className="entrada__container">
          <Input
            name="money"
            title="Entrada de Dinheiro"
            type="number"
            minimun={0}
            handleMoney={handleMoney}
          />
        </div>

        <h2 className="subtitulo subtitulo-hover">Quanto pretende guardar?</h2>

        <div className="inputs__container">
          <Button
            name="5por"
            title="5%"
            onClick={(event) => {
              setPercent(event.target.value);
              console.log(percent);
            }}
          />
          <Button name="10por" title="10%" />
          <Button name="15por" title="15%" />
          <Button name="20por" title="20%" />
          <Button name="30por" title="30%" />
        </div>

        <div className="inputs__container">
          <input type="button" value="Custom" className="texto btn__geral" />

          <Input
            name="saveCustom"
            title="Escolha o Valor do Custom"
            type="number"
            minimun={0}
            maximum={100}
          />
        </div>

        {/* <Select
        title="Mês"
        name="months"
        options={{
          0: "Janeiro",
          1: "Fevereiro",
          2: "Março",
          3: "Abril",
          4: "Maio",
          5: "Junho",
          6: "Julho",
          7: "Agosto",
          8: "Setembro",
          9: "Outubro",
          10: "Novembro",
          11: "Dezembro",
        }}
      /> */}

        <h2 className="subtitulo subtitulo-hover">
          E quanto tempo a gente tem?
        </h2>

        <div className="inputs__container">
          <Input name="day" title="Dia atual" type="text" />

          <Select
            title="Último dia do mês"
            name="lastDay"
            options={{
              0: "30",
              1: "31",
              2: "28",
              3: "29",
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
