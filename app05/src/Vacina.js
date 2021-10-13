import React, { Component } from 'react';

class Vacina extends Component {
    render() {
        return (
            <div>
                {this.props.nome} é uma das vacinas contra a Covid-19.
            </div>
        );
    }
}

export default Vacina;
