import React, {Component} from 'react'

import {TodoAdd} from './components/TodoAdd'
import {TodoList} from './components/TodoList'

import {addTodo} from './store/store'

export class App extends Component {
  displayName = 'App';

  state = { todos: this.props.store.getState() };

  onAddTodo = (newTodoName) => {
    this.props.store.dispatch(addTodo(newTodoName))
    this.setState({
      todos: this.props.store.getState()
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
