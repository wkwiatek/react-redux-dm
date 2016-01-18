import React, {Component, PropTypes} from 'react'

export class TodoList extends Component {
  displayName = 'TodoList';

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => <li key={todo.id}>{todo.name}{' ('}{todo.description}{') '}</li>)
        }
      </ul>
    )
  }
}
