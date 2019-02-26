import React, { Component } from 'react';

export class Todolist extends Component {

    render() {
      
    const items = this.props.myTasks.map(

      (element, i)=> {

        return(  <li>{element}</li>)

      }
    );

    return(
  
      <div className="todo-list">
        <ul>{items}</ul>
      </div>

    );
  }
}


