import React, {Component} from 'react'

import {TodoAdd} from './components/TodoAdd'
import {TodoList} from './components/TodoList'

let id = 0

class Todo {
  constructor(name = 'Unknown', description = ' - ') {
    this.id = id++
    this.name = name
    this.description = description
  }
}

export class App extends Component {
  displayName = 'App';

  todos = [
    new Todo('Learn React!', 'hype there is'),
    new Todo()
  ];

  render() {
    return (
      <div>
        <TodoAdd/>
        <TodoList todos={this.todos}/>
      </div>
    )
  }
}
