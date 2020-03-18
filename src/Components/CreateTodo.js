import React, { Component } from 'react';

class CreateTodo extends Component {
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }


    render() {
        return (
            <div id="myDIV" className="header">
                <h1>todo lists</h1>
                <form
                    // onSubmit={function (e) {
                    //     e.preventDefault();
                    //     this.props.onSubmit(e.target.title.value)
                    // }.bind(this)}
                    action="/create_todos"
                    method="post">
                    <input
                        name="title"
                        type="text"
                        id="myInput"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="todo text"></input>
                    <input type="submit" value="add" className="addBtn"></input>
                </form>
            </div>
        );
    }
}

export default CreateTodo;