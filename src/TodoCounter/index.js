/* Versión extendida - con variable */
/*
const estilos = {
  backgroundColor: 'purple',
  color: 'white'
}

function TodoCounter({total, completed}){
    return (
      <h1 style={estilos}>
        Has completado {completed} de {total} TODOS
      </h1>
    );
  }
*/

/* Versión simplificada - Sin variable (doble llave) */
/*
function TodoCounter({total, completed}){
    return (
      <h1 style={{
        backgroundColor: 'purple',
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        margin: 0,
        padding: '48px'
      }}>
        Has completado {completed} de {total} TODOS
      </h1>
    );
  }
*/

/* Versión con Hoja de estilos */
import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';




function TodoCounter(){
  //se reciben las propiedades con el mismo nombre que son retornadas en el componente Context "TodoContext"
  const {completedTodos,
         totalTodos
         } =  React.useContext(TodoContext);

  return (
    <header>
      <img src='iconTodo/Logo.png'/>
      <h1>
        {/* Uso de operadores ternarios para comparación y presentación del texto */}
          { completedTodos == totalTodos 
            ? 
              "¡Felicidades! Completaste todos los TODOS"
            : 
              `Has completado ${completedTodos} de ${totalTodos} ToDoS` 
          }
        
      
      </h1>
    </header>
    
  );
}
export { TodoCounter };
