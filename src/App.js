import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
    state = {
       todos: [
           {
            id: 1,
            title: 'Sweep the balcony',
            completed: false
           },
           {
            id: 2,
            title: 'Go to markets',
            completed: false
           },
           {
            id: 3,
            title: 'Zoom conference with team',
            completed: false
           },
       ]
    }
    render()   {
        return (
            <div className="App">
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
