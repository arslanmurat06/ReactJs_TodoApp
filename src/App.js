import React, { Component } from 'react';
import {Todolist} from './components/todolist';
import { Footer } from './components/footer';
import { Header } from './components/header';

class App extends Component {
  render() {

    const tasks = ["Read book!", "Walk around"];
    return (

<div className="content">
<Footer/>
      <Todolist myTasks={tasks} />
<Header/>
   </div>
    );
  }
}

export default App;
