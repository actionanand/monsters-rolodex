import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

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

    handleChange = (e) => {
      this.setState({searchField: e.target.value})
    }

    render() {
      const { monsters, searchField } = this.state;
      const filteredMonster = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchField.toLowerCase())
         );
        return (
          <div className='App'>
            <SearchBox placeholder='Search the monster'
            handleChange={this.handleChange}
            />
            <CardList monsters={filteredMonster}>
            </CardList>
          </div>
        );
    }
}


export default App;
