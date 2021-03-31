import './App.css';
import React from 'react';
import User from './User';
import NewUser from './NewUser';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.maxId = 3;
    this.state = {
      users: [
        { id: 1, name: 'Pero', age: 24 },
        { id: 2, name: 'Marija', age: 33 },
        { id: 3, name: 'Ana', age: 25 },
      ]
    };
  }

  mojaMapFunction = (usr) => {
    return (<User key={usr.id} user={usr} />);
  }

  handleUserAdded = (newUsr) => {
    // newUsr ima name i age
    // moramo dodati id jer nam i on treba
    newUsr.id = this.maxId + 1;
    this.maxId++;

    // newUsr ima sve sada
    const newUsers = [...this.state.users, newUsr];
    this.setState({users: newUsers});
  }

  getAverage = () => {
    let sum = 0;
    for(let i = 0; i < this.state.users.length; i++) {
      const user = this.state.users[i];
      sum += user.age;
    }

    return sum/this.state.users.length;
  }

  render() {
    return (
      <div className="App">
        <NewUser onUserAdded={this.handleUserAdded} />
        Prosjek godina je: {this.getAverage()}
        {this.state.users.map(this.mojaMapFunction)}
      </div>
    );
  }
}

export default App;
