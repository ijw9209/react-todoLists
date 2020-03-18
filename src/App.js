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
  }

  render() {
    return (
      <div className="App">
        <CreateTodo onSubmit={function (_title) {
          alert(_title);
          var _todos = Array.from(this.state.todos);
          console.log(_todos);
          this.current_todos_max_id = this.current_todos_max_id + 1;
          _todos.push(
            { id: this.current_todos_max_id, title: _title }
          )
          this.setState({
            todos: _todos
          })
        }.bind(this)}></CreateTodo>

        <TodoLists data={this.state.todos}></TodoLists>
      </div>
    );
  }
}

export default App;
