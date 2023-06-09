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
    setIsCustom,
    isCustom,
    setCustomPer,
    customPer,
    day,
    setDay,
    finalDay,
    setFinalDay,
    result,
    resultDaily,
  } = CalcConsumer();

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
            handleCalc={(event) => {
              setSave(event.target.value);
            }}
          />
        </div>

        <h2 className="subtitulo subtitulo-hover">Quanto pretende guardar?</h2>

        <div className="inputs__container">
          <Button
            name="5por"
            title="5%"
            handleClick={(event) => {
              setPercent(event);
              setIsCustom(false);
            }}
          />
          <Button
            name="10por"
            title="10%"
            handleClick={(event) => {
              setPercent(event);
              setIsCustom(false);
            }}
          />
          <Button
            name="15por"
            title="15%"
            handleClick={(event) => {
              setPercent(event);
              setIsCustom(false);
            }}
          />
          <Button
            name="20por"
            title="20%"
            handleClick={(event) => {
              setPercent(event);
              setIsCustom(false);
            }}
          />
          <Button
            name="30por"
            title="30%"
            handleClick={(event) => {
              setPercent(event);
              setIsCustom(false);
            }}
          />
        </div>

        <div className="inputs__container">
          <input
            type="button"
            value="Custom"
            className="texto btn__geral"
            onClick={() => setIsCustom(true)}
          />

          <Input
            name="saveCustom"
            title="Escolha o Valor(em %) do Custom"
            type="number"
            minimun={0}
            maximum={100}
            handleCalc={(event) => {
              setCustomPer(event.target.value);
            }}
          />
        </div>

        <h2 className="subtitulo subtitulo-hover">
          E quanto tempo a gente tem?
        </h2>

        <div className="inputs__container">
          <Input
            name="day"
            title="Dia atual"
            type="text"
            minimum={0}
            maximum={31}
            handleCalc={(event) => {
              setDay(event.target.value);
            }}
          />

          <Select
            title="Último dia do mês"
            name="lastDay"
            options={["", 30, 31, 28, 29]}
            handleChange={(event) => setFinalDay(event.target.value)}
          />
        </div>

        <p className="texto">
          {isCustom ? customPer : percent}% de {save}. Então você vai guardar um
          total de R${result}
        </p>
        <p className="texto">
          Pra sobrar isso ai, você pode gastar R${resultDaily}, por dia
        </p>
      </div>
    </main>
  );
}

export default App;
