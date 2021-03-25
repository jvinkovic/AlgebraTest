import React from 'react';
import PropTypes from 'prop-types';

const djeljivo = 10;

export default class Brojac extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            broj: this.props.start
        };
    }

    callEvent = (br) => {
        if(this.props.onDesetice && br % djeljivo === 0) {
            // okini event
            // onDesetice            
            this.props.onDesetice();
        }
    }

    handleMinus = () => {
        const noviBroj = this.state.broj - this.props.korak;
        this.callEvent(noviBroj);
        this.setState({broj: noviBroj});
    }

    handlePlus = () => {
        const noviBroj = this.state.broj + this.props.korak;
        this.callEvent(noviBroj);
        this.setState({broj: noviBroj});
    }

    render() {
        return (<div>
            <button onClick={this.handleMinus}>-</button>
            {this.state.broj}
            <button onClick={this.handlePlus}>+</button>
        </div>);
    }
}

Brojac.propTypes = {
    start: PropTypes.number,
    korak: PropTypes.number,
    onDesetice: PropTypes.func
}

Brojac.defaultProps = {
    start: 0,
    korak: 1
}