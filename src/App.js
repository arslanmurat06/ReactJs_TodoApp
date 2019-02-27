import React, { Component } from 'react';
import {Todolist} from './components/todolist';
import { Footer } from './components/footer';
import { Header } from './components/header';
import {TodoForm} from './components/todoform';

const tasks = ["Read book!", "Walk around"];


class App extends Component {
  
  addTask(val)
  {
  console.log(tasks);
  tasks.push(val);
  console.log(tasks);
  }


  render() {
    
     return (

      <div className="content">
      <Header/> 
       <TodoForm addTask={this.addTask}/>
        <Todolist myTasks={tasks} />
        <Footer/>
      
      </div>
      );
  }
}

export default App;
