import React, {Component, PropTypes} from 'react'

export class TodoAdd extends Component {
  displayName = 'TodoAdd';

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  state = {
    newTodoName: ''
  };

  handleTodoChange = (event) => {
    this.setState({
      newTodoName: event.target.value
    })
  };

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state.newTodoName)
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          onChange={this.handleTodoChange}
          type="text"
        />
        <pre>{this.state.newTodoName}</pre>
        <button>{'Add'}</button>
      </form>
    )
  }
}
