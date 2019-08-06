import React from 'react'

export default props =>
    <React.Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Idade: {props.idade}</h2>
    </React.Fragment>