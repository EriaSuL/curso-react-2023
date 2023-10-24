import "./CreateTodoButton.css"
import {TodoContext} from '../TodoContext'
import React from "react";


function CreateTodoButton(){
   const {setopenModal,
    } = React.useContext(TodoContext);

    return (
      <button 
        className="CreateTodoButton"
        onClick={
            () => {
              setopenModal(state => !state);
          } 
        }
      >+</button>
    );
  }

  export {CreateTodoButton}