import React, { Component } from 'react';

class CompA extends Component {
    render() {
        return (
            <div>
                Nome: {this.props.nome}.
            </div>
        );
    }
}

export default CompA;
