import React from 'react'
import styled from "styled-components"

const DivNome = styled.div `
    width: 15%;
    font-weight: bold;  
`
const DivMsg = styled.div `
    width: 70%;

`
const DivPost = styled.div `
    display: flex;
    padding: 0 10px;
`
  
//   .msg {
//     width: 70%;
//   }
 
export default class Mensagem extends React.Component {
    render () {
        return <DivPost>
            <DivNome>{`${this.props.msg.nome}:`}</DivNome>
            <DivMsg>{this.props.msg.mensagem}</DivMsg>
        </DivPost>
    }
}