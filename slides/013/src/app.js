import React, {Component} from 'react'

import {TodoAdd} from './components/TodoAdd'
import {TodoList} from './components/TodoList'

import {} from './store/store'

export class App extends Component {
  displayName = 'App';

  state = {
    todos: [
      new Todo('Learn React!', 'hype there is'),
      new Todo()
    ]
  };

  onAddTodo = (newTodoName) => {
    this.setState({
      todos: [
        ...this.state.todos,
        new Todo(newTodoName)
      ]
    })
  };

  render() {
    return (
      <div>
        <TodoAdd addTodo={this.onAddTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}
