import React from 'react'
import Mensagem from './components/Mensagem'
import styled from "styled-components";

const InputNome = styled.input`
  width: 15%;
  font-weight: bold;
  border: 2px solid rosybrown;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rosybrown;
  padding: 5px;
`;
const InputMensagem = styled.input`
  width: 70%;
  font-weight: bold;
  border: 2px solid rosybrown;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rosybrown;
  padding: 5px;
`;
const BotaoEnviar = styled.button`
  border: 2px solid rosybrown;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rosybrown;
  padding: 5px;
`;
const CaixaTexto = styled.div`
  border: 2px solid rosybrown;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rosybrown;
  margin: auto;
  padding: 5px;
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const CaixaEntrada = styled.div`
  display: flex;
  height: 6vh;
  padding: 5px;
  justify-content: space-between;
`;

export default class App extends React.Component {
  state = {
    nome: "",
    msg: "",
    historico: [],
  }


  digitaNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  digitaMensagem = (event) => {
    this.setState({
      msg: event.target.value
    })
  }

  Enviar = () => {
    const novaMsg = {
      nome: this.state.nome,
      mensagem: this.state.msg
    }
    this.setState({
      historico: [...this.state.historico, novaMsg]
    })
    this.state.msg = ""
  }

  render() {
    const historico = this.state.historico.map(
      (msg) => {
        return (
          <Mensagem msg={msg} />
        )
      }
    )

    return (
      <CaixaTexto className="App">
        {historico}
        <CaixaEntrada>
          <InputNome 
            value={this.state.nome}
            onChange={this.digitaNome}
            placeholder={"Nome"}
          ></InputNome>

          <InputMensagem
            value={this.state.msg}
            onChange={this.digitaMensagem}
            placeholder={"Digite a mensagem"}
          ></InputMensagem>

          <BotaoEnviar onClick={this.Enviar}>Enviar</BotaoEnviar>
        </CaixaEntrada>
      </CaixaTexto>
    );
  }
}
