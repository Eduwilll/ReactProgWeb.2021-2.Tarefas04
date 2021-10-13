import React, { Component } from 'react';

class Adicao extends Component {
    render() {
        return (
            <div>
                 O resultado de {this.props.x} + {this.props.y} = {this.props.x + this.props.y}
            </div>
        );
    }
}

export default Adicao;
