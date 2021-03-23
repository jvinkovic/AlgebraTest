import React from 'react';

const djeljivo = 17;
const korak = 2;
const pocetnaVrijednost = 0;

export default class Brojac extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            broj: pocetnaVrijednost
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
        const noviBroj = this.state.broj - korak;
        this.callEvent(noviBroj);
        this.setState({broj: noviBroj});
    }

    handlePlus = () => {
        const noviBroj = this.state.broj + korak;
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