import React from "react";

export default class App extends React.Component {
  state = {
    nome: "",
    digiteMensagem: ""
  };

  digitaNome = (event) => {
    this.setState({
      nome: event.target.value
    });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ digiteMensagem: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="Entrada">
          <p>{this.state.digiteMensagem}</p>
          <input
            className="nome"
            value={this.state.nome}
            onChange={this.digitaNome}
            placeholder={"Nome"}
          ></input>

          <input
            className="mensagem"
            value={this.state.digiteMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Digite a mensagem"}
          ></input>

          <button onClick={this.digiteMensagem}>Enviar</button>
        </div>
      </div>
    );
  }
}
