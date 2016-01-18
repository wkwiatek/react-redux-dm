import React, {Component} from 'react'

let id = 0

class Todo {
  constructor(name = 'Unknown', description = ' - ') {
    this.id = id++
    this.name = name
    this.description = description
  }
}

export class TodoList extends Component {
  displayName = 'TodoList';

  todos = [
    new Todo('Learn React!', 'hype there is'),
    new Todo()
  ];

  render() {
    return (
      <ul>
        {
          this.todos.map(todo => <li key={todo.id}>{todo.name}{' ('}{todo.description}{') '}</li>)
        }
      </ul>
    )
  }
}
