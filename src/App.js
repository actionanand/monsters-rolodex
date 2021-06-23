import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
    constructor () {
        super();
        this.state = {
            monsters: [ ],
            searchField: ''
        };
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
    }

    render() {
      const { monsters, searchField } = this.state;
      const filteredMonster = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchField.toLowerCase())
         );
        return (
          <div className="App">
            <input type="search" placeholder="Search the monster" onChange={e => this.setState({searchField: e.target.value}) }/>
            <CardList monsters={filteredMonster}>
            </CardList>
          </div>
        );
    }
}


export default App;
