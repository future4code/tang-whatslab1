import React from 'react'

export default class Mensagem extends React.Component {
    render () {
        return <div className= "post">
            <p className="nome">{`${this.props.msg.nome}:`}</p>
            <p className="msg">{this.props.msg.mensagem}</p>
        </div>
    }
}