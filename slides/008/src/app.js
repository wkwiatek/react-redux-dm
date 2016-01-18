import React, {Component} from 'react'

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
        <form>
          <input type="text"/>
          <button>{'Add'}</button>
        </form>
        <ul>
          {
            this.todos.map(todo => <li key={todo.id}>{todo.name}{' ('}{todo.description}{') '}</li>)
          }
        </ul>
      </div>
    )
  }
}
