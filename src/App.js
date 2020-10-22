import React from 'react';


export default class App extends React.Component {
  digitaNome = (event) => {

  }
  render () {
  return (
    <div className="App">
    <p>oi</p>
    <div className="Entrada">
    <input className="nome" value="" onChange={digitaNome}></input>
    <input></input>
     <button>Enviar</button>
     </div>
    </div>
  );
}
}


