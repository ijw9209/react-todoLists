import React, { Component } from 'react';
import './App.css';
import CreateTodo from './Components/CreateTodo';
import TodoLists from './Components/TodoLists';
class App extends Component {
  constructor(props) {
    super(props);
    this.current_todos_max_id = 3;
    this.state = {
      todos: [
        { id: 1, title: "잠자기" },
        { id: 2, title: "공부하기" },
        { id: 3, title: "밥먹기" }
      ],
    }
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCreate(_title) {
    this.current_todos_max_id = this.current_todos_max_id + 1;

    var _todos = this.state.todos.concat(
      { id: this.current_todos_max_id, title: _title }
    )

    this.setState({
      todos: _todos
    })

  }
  handleDelete(_id) {
    var _todos = this.state.todos;


    this.setState({
      todos: _todos.filter(todo => todo.id !== _id)
    })
    alert('delete!!');
  }

  render() {
    return (
      <div className="App">
        <CreateTodo onSubmit={this.handleCreate}></CreateTodo>

        <TodoLists onClick={this.handleDelete} data={this.state.todos}></TodoLists>
      </div>
    );
  }
}

export default App;
