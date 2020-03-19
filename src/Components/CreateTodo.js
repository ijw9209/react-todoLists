import React, { Component } from 'react';

class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {

        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value === '') {
            alert('할일을 입력해주세요!')
        } else {
            this.props.onSubmit(this.state.value);
            this.setState({
                value: ''
            })
        }
    }

    render() {
        return (
            <div id="myDIV" className="header">
                <h1>todo lists</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="myInput"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="todo text"></input>
                    <input type="submit" value="add" className="addBtn"></input>
                </form>
            </div>
        );
    }
}

export default CreateTodo;