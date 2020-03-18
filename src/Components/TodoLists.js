import React, { Component } from 'react';

class TodoLists extends Component {

    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>{data[i].title}</li>
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