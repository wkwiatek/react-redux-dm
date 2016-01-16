import React, {Component} from 'react'

class Todo {
  constructor(name = 'Unknown', description = ' - ') {
    this.name = name
    this.description = description
  }
}

export class App extends Component {
  displayName = 'App';

  todos = [
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
          <li>{this.todos[0].name}{' ('}{this.todos[0].description}{') '}</li>
        </ul>
      </div>
    )
  }
}
