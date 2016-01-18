import React, {Component} from 'react'

export class App extends Component {
  displayName = 'App';

  render() {
    return (
      <div>
        <form>
          <input type="text"/>
          <button>Add</button>
        </form>
        <ul>
          <li>First item</li>
        </ul>
      </div>
    )
  }
}
