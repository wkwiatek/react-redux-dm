import { createStore } from 'redux'

let id = 0

class Todo {
  constructor(name = 'Unknown', description = ' - ') {
    this.id = id++
    this.name = name
    this.description = description
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        new Todo(action.newTodoName)
      ]
    default:
      return state
  }
}

export store = createStore(todos)
