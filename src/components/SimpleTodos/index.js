import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {TodosList: initialTodosList}

  onDeleteTodo = todoId => {
    const {TodosList} = this.state
    const filteredTodoList = TodosList.filter(
      eachTodo => eachTodo.id !== todoId,
    )
    this.setState({TodosList: filteredTodoList})
  }

  render() {
    const {TodosList} = this.state
    return (
      <div className="page_container">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todo_container">
            {TodosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                details={eachTodo}
                initialTodosList={initialTodosList}
                onDeleteTodo={this.onDeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
