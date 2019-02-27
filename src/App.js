import React, { Component } from 'react';
import {Todolist} from './components/todolist';
import { Footer } from './components/footer';
import { Header } from './components/header';
import {TodoForm} from './components/todoform';

class App extends Component {
  
  render() {

    const tasks = ["Read book!", "Walk around"];
    
     return (

      <div className="content">
      <Header/>
       <TodoForm/>
        <Todolist myTasks={tasks} />
        <Footer/>
      
      </div>
      );
  }
}

export default App;
