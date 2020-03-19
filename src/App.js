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
    var _todos = Array.from(this.state.todos);
    this.current_todos_max_id = this.current_todos_max_id + 1;
    _todos.push(
      { id: this.current_todos_max_id, title: _title }
    )
    this.setState({
      todos: _todos
    })

  }
  handleDelete(_id) {
    var _todos = Array.from(this.state.todos);
    var i = 0;
    while (i < _todos.length) {
      if (_todos[i].id === _id) {
        _todos.splice(i, 1);
        break;
      }
      i = i + 1;
    }

    this.setState({
      todos: _todos
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
