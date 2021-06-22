import React, { Component } from 'react';

import './App.css';

class App extends Component {
    constructor () {
        super();
        this.state = {
            monster: [
              {
                name: 'Frankenstein',
                id: 'qwe1'
              },
                {
                name: 'Dracula',
                id: 'qwe2'
              },
                {
                name: 'Zombie',
                id: 'qwe3'
              }
            ]
        };
    }
    render() {
        return (
          <div className="App">
            { this.state.monster.map(monster => <h1 key={ monster.id }> { monster.name } </h1> ) }
          </div>
        );
    }
}


export default App;
