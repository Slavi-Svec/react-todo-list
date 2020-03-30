import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
  
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
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }
    addTodo = (title) => {
        const newTodo = {
            id: 4,
            title: title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo ] });
    }

    render()   {
        return (
            <div className="App">
                <div className="container">
                <Header />
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </div>
            </div>


        );
    }
}

export default App;
