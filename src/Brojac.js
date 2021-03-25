import React from 'react';
import PropTypes from 'prop-types';

const djeljivo = 10;

export default class Brojac extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            broj: this.props.start
        };

        console.log('constructor - Brojac');
    }

    componentDidMount() {
        console.log('componentDidMount - Brojac - DOM prikazan');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate - Brojac - DOM did refresh');
        console.log('------props--------');
        console.log(nextProps);
        console.log(this.props);
        console.log('-----state---------');
        console.log(nextState);
        console.log(this.state);
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate - Brojac - DOM did refresh');
        console.log('------props--------');
        console.log(prevProps);
        console.log(this.props);
        console.log('-----state---------');
        console.log(prevState);
        console.log(this.state);
        console.log('-----snapshot---------');
        console.log(snapshot);
        console.log('--------------');
    }

    componentWillUnmount() {
        console.log('bye - umirem');
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
        console.log('render');

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