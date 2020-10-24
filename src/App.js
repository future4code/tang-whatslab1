import React from 'react'
import Mensagem from './components/Mensagem'

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
      <div className="App">
        {historico}
        <div className="Entrada">
          <input className="nome" value={this.state.nome} onChange={this.digitaNome} placeholder={"Nome"}></input>
          <input className="mensagem" value={this.state.msg} onChange={this.digitaMensagem} placeholder={"Digite a mensagem"}></input>
          <button onClick={this.Enviar}>Enviar</button>
        </div>
      </div>
    );
  }
}


