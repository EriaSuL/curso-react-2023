import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import "./TodoSearch.css"
import {TodoContext} from '../TodoContext'
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function TodoSearch( 
  ){
    const {searchValue,
          setSearchValue,
          openModal,
          setopenModal,
          } = React.useContext(TodoContext);

    return (
      <section>
        <input 
          placeholder="¿'ToDos' escurridizos?, búscalo aquí"
          value = {searchValue} /*Se conecta el value del input con el estado que se creó */

          onChange={(event) => {
            setSearchValue(event.target.value);/* Se actualiza la variable del estado con lo que el usuario ingresó en el input */
          }}

        />
        {/*
        <img className="botones" src="iconTodo/calendar.png" />
        <img className="botones" src="iconTodo/alarm.png" />
        <img className="botones" src="iconTodo/add.png" /> 
        */}
        <CreateTodoButton />

        {openModal && (
          <Modal>
           <TodoForm />
          </Modal>
        )}

        


      </section>
      );
  }

export { TodoSearch };