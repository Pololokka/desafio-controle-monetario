import "./App.css";

import Input from "./Components/Input/Index";
import Button from "./Components/Button/Index";
import Select from "./Components/Select/Index";

function App() {
  return (
    <div className="App">
      <Input
        name="money"
        title="Entrada de Dinheiro"
        type="number"
        minimun={0}
      />
      <Button name="5por" title="5%" />
      <Button name="10por" title="10%" />
      <Button name="15por" title="15%" />
      <Button name="20por" title="20%" />
      <Button name="30por" title="30%" />

      <Input
        name="saveCustom"
        title="Escolha o Valor"
        type="number"
        minimun={0}
        maximum={100}
      />

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
  );
}

export default App;
