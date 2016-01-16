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

  onAddTodo = (newTodoName) => {
    this.todos = [
      ...this.todos,
      new Todo(newTodoName)
    ]
    console.debug(this.todos)
  };

  render() {
    return (
      <div>
        <TodoAdd addTodo={this.onAddTodo}/>
        <TodoList todos={this.todos}/>
      </div>
    )
  }
}
