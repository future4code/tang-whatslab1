import React from 'react'
import Mensagem from './components/Mensagem'

export default class App extends React.Component {
  state = {
    nome: "",
    mensagem: "",
    enviado: false,
  }

  digitaNome = (event) => {
    this.setState({
      nome:event.target.value
    })
  }

  digitaMensagem = (event) => {
    this.setState({
      mensagem:event.target.value
    })  
  }
  
  Enviar = () => {
    this.setState({
      enviado : true
    })
  }

  render () {
    
  let mensagemEnviada

  if (this.state.enviado) { 
    mensagemEnviada = <Mensagem/>
  }
  
  return (
    <div className="App">    
    {mensagemEnviada}
    <p>{this.state.nome}</p>
    <p>{this.state.mensagem}</p>
    <div className="Entrada">
    <input className="nome" value= {this.state.nome} onChange={this.digitaNome} placeholder={"Nome"}></input>
    <input className="mensagem" value={this.state.mensagem} onChange={this.digitaMensagem} placeholder={"Digite a mensagem"}></input>
     <button onClick={this.Enviar}>Enviar</button>
     </div>
    </div>
  );
}
}


