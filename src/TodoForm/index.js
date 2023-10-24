import React from "react";
import "./TodoForm.css";
import {TodoContext} from '../TodoContext';


function TodoForm(){
    const {addTodo, setopenModal} = React.useContext(TodoContext);

    //Estado local
    const [newTodoValue, setnewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setopenModal(false);
    };

    const onCancel = () => {
        setopenModal(false);
    };

    const onChange = (event) => {
        setnewTodoValue(event.target.value);
        console.log({newTodoValue});
    };


    return(
        <form  
            onSubmit={onSubmit}
            className="TodoForm-form">
            <h1 className="TodoForm-h1">¡Hey! ¿Algo nuevo por hacer?</h1>
            <textarea className="TodoForm-textarea" placeholder="Ingresa aquí el nombre del 'ToDo'" required 
            value={newTodoValue} onChange={onChange}></textarea>
            <div className="TodoForm-buttonContenedor">
                <button type="submit" className="TodoForm-button TodoForm-button--add">¡OK!</button>
                <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}
                >Mejor no :c </button>
            </div>
        </form>
    );
}

export {TodoForm};

