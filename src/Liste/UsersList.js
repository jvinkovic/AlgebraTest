import React from 'react';
import User from './User';

const imena = ['Đuro', 'Pero', 'Josip', 'Marija', 'Senada'];

export default class UsersList extends React.Component {
    constructor(props){
        super(props);

        this.maxId = 3;
        this.state = {
            users: [
                {id: 1, ime: 'Pero', godine: 78},
                {id: 2, ime: 'Ivo', godine: 5},
                {id: 3, ime: 'Maroje', godine: 33},
            ]
        }
    }

    dodaj = () => {
        const randomIndex = Math.round(Math.random() * (imena.length - 1));
        console.log('randomIndex', randomIndex);

        // godine od 16 do 90
        const noveGodine = Math.round(Math.random() * (90 - 16)) + 16;

        const noviUser = { id: this.maxId + 1,
                            ime: imena[randomIndex],
                            godine: noveGodine 
                        };
        this.maxId = this.maxId + 1;
        // da je maxId u stateu
        // this.state.maxId + 1 za user id
        // NEMA!!! this.state.maxId = this.state.maxId + 1
        const newUsers = [...this.state.users, 
                            noviUser
                        ];

        // da je maxId u stateu
        // this.setState({users: newUsers, maxId = this.state.maxId + 1});
        this.setState({users: newUsers});
    }

    handleNameChange = (e, index) => {
        // mijenja ime nekome
        const novoIme = e.target.value;

        const newUsers = [...this.state.users];
        newUsers[index].ime = novoIme;

        this.setState({users: newUsers});
    }

    delete = (index) => {
        const newUsers = this.state.users.filter((user, idx) => index !== idx);
        this.setState({users: newUsers});
    }

    render() {
        return <div>
            {this.state.users.map((user, idx) => {
                return (<User onChange={this.handleNameChange} 
                                onDelete={this.delete} 
                                index={idx} 
                                korisnik={user} 
                                key={user.id}></User>);
            })}
            <button onClick={this.dodaj}>Dodaj</button>
        </div>;
    }
}