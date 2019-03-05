import React, { Component } from 'react';
import {Todolist} from './components/todolist';
import { Footer } from './components/footer';
import { Header } from './components/header';
import {TodoForm} from './components/todoform';


class App extends Component {
  

  constructor() {
      super();
      this.state = {
        tasks 
        :[
        {text:"read book",status:"passive"},
        {text:"walk around", status:"passive"}
         ]};
      this.addTask = this.addTask.bind(this);
      this.doneTask = this.doneTask.bind(this);
      this.removeTask = this.removeTask.bind(this);


  }

  addTask(val){
    let updatedTask =  this.state.tasks;
    updatedTask.push({text:val, status:'passive'});

    this.setState({tasks :updatedTask});
  }

  doneTask(task_id){

    task_id = task_id.replace('task_','');
    let updatedTask = this.state.tasks;
    updatedTask[task_id].status = 'active' ;
    this.setState({tasks:updatedTask});
  }

  removeTask(task_id){


  }

  render() {
    
     return (

      <div className="content">
      <Header/> 
       <TodoForm addTask={this.addTask} />
        <Todolist myTasks={this.state.tasks} doneTask={this.doneTask} removeTask={this.removeTask} />
        <Footer/>
      
      </div>
      );
  }
}

export default App;
