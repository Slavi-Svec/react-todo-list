 import React, { Component } from 'react'
 import PropTypes from 'prop-types';


 export class TodoItem extends Component {
    getStyle = () => {
        if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through '
            }
        } else {
            return {
               textDecortion: 'none'
            }
        }
    }

 
     render() {
         return (
             <div style={this.getStyle()}>
                <p>{ this.props.todo.title }</p>
             </div>
         )
     }
 }

 TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

 export default TodoItem


