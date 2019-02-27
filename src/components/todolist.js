import React, { Component } from 'react';

export class Todolist extends Component {

  constructor() {
    
      super();

      this.doneTask = this.doneTask.bind(this);
      this.removeTask = this.removeTask.bind(this);


  }

  doneTask(val) {

    console.log("Task tamamlandı");
    

  }

  removeTask(val){

    console.log("Task silindi");
  }
    render() {

      const items_left = 0;
      const items_right = 0;
      
    const items = this.props.myTasks.map(

      (element, i)=> {

        return(  
          <li key={i}>
            <span className="id">{i}</span>
           <span>{element}</span>
            <span className ="type" onClick={this.doneTask}/>
            <span className="delete" onClick={this.removeTask}/>
          </li>
          )
      }
    );

    return(
  
      <div>
        <div className="todo-list type1">
          <ul>{items}</ul>
        </div>
       
        <div className="todo-filter">
          <div className="left">
          <span>{items_left} items left</span>
          </div>
          <div className="right">
            <ul>
              <li><span className="active">All</span></li>
              <li><span>Active</span></li>
              <li><span>Complimented</span></li>
            </ul>
          </div>
        </div>

      </div>

    );
  }
}


