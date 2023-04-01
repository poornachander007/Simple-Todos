// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  deleteTodo = () => {
    const {details, onDeleteTodo} = this.props
    const {id} = details
    onDeleteTodo(id)
  }

  render() {
    const {details} = this.props
    const {title} = details

    return (
      <li className="todo_item_container">
        <p className="todo_discription">{title}</p>
        <div>
          <button onClick={this.deleteTodo} className="button" type="button">
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
