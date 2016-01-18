import React, {Component} from 'react'

export class TodoAdd extends Component {
  displayName = 'TodoAdd';

  render() {
    return (
      <form>
        <input type="text"/>
        <button>{'Add'}</button>
      </form>
    )
  }
}
