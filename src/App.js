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
// (toggle complete itms)
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo === id) {
                todo.completed = !todo.completed
            }
            return todo;
        }) });
    }
    // Delete Todo
    delTodo = (id) => {
        console.log(id)
    }

    render()   {
        return (
            <div className="App">
                <Todos todos={this.state.todos} markComplete={this.markComplete} 
               delTodo={this.delTodo} />
            </div>
        );
    }
}

export default App;
