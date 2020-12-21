import React, { Component } from "react";
import "./App.css";
import Container from "./components/Container";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Result from "./components/Result";

class App extends Component {
  state = {
    money: "",
    tratament: "",
    peopleCount: "",
    result: "",
  };

  calculate = () => {
    return `O valor a ser pago é - R$ ${(this.state.money *
      this.state.tratament /
      this.state.peopleCount)
      .toFixed(2)
      .replace(".", ",")}`;
  };

  setMoney = newMoney => {
    this.setState({
      money: +newMoney,
    });
  };

  setTratament = newTratament => {
    this.setState({
      tratament: +newTratament,
    });
  };

  setPeopleCount = newCount => {
    this.setState({
      peopleCount: +newCount,
    });
  };

  setResult = newResult => {
    this.setState({
      result: newResult,
    });
  };

  render() {
    return (
      <div>
        <Container title="Calculadora de Gorjetas">
          <Input
            label="Qual o valor da conta? R$"
            placeholder="Valor Gasto"
            id="money"
            value={this.state.money}
            onNewValue={this.setMoney}
          />
          <Select
            label="Como foi seu atenidmento?"
            id="tratament"
            value={this.state.tratament}
            onNewValue={this.setTratament}
          />
          <Input
            label="Quantas pessoas estão compartilhando a conta?"
            placeholder="Quantidade de Pessoas"
            id="peopleCount"
            value={this.state.peopleCount}
            onNewValue={this.setPeopleCount}
          />
          <Button
            function={e => this.setResult(this.calculate())}
            value="Calcular"
          />
          <Result result={this.state.result} />
        </Container>
      </div>
    );
  }
}

export default App;
