import React, {Component} from 'react';

export class TodoForm extends Component {

    render(){

        return(

            <div>
            
                <div className="todo type1">
                    <form className="input-wrapper">
                     <input  type="text" className="input"  name="add-todo" placeholder="What needs to be done?" />
                    </form>
                </div>

                 <button type="button" className="add-btn"/>
            
            </div>
        );
    }


}
