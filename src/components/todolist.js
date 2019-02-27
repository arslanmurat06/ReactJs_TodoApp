import React, { Component } from 'react';

export class Todolist extends Component {

    render() {
      
    const items = this.props.myTasks.map(

      (element, i)=> {

        return(  
          <li>
          <span className="id">{i}</span>
          <span>{element}</span>
          <span className ="type"/>
          <span className="delete"/>
          </li>
          
          )

      }
    );

    return(
  
      <div className="todo-list type1">
        <ul>{items}</ul>
      </div>

    );
  }
}


