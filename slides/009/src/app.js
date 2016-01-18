import React, {Component} from 'react'

import {TodoAdd} from './components/TodoAdd'
import {TodoList} from './components/TodoList'

export class App extends Component {
  displayName = 'App';

  render() {
    return (
      <div>
        <TodoAdd/>
        <TodoList/>
      </div>
    )
  }
}
