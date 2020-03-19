import React, { Component } from 'react';

class TodoLists extends Component {

    shouldComponentUpdate(newProps) {

        if (this.props.data === newProps.data) {
            return false;
        }
        return true;
    }
    constructor(props) {
        super(props);
        this.state = { isCheck: 'unchecked' };

        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck(e) {
        e.preventDefault();
        e.target.className = "checked"
    }
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li onClick={this.handleCheck} key={data[i].id}>{data[i].title}<b id={data[i].id}
                    onClick={function (id, e) {
                        e.preventDefault();
                        this.props.onClick(id)
                    }.bind(this, data[i].id)} className="close"></b></li>
            )
            i++;
        }

        return (
            <ul id="myUL">
                {lists}
            </ul>
        )
    }
}
export default TodoLists;