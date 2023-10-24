import React from 'react';
import "./TodosloadingErr.css"

function TodosloadingErr( 
  ){
    return (
        <span className='error'>
          <img className='error' src='IconTodo/Llorona.png'/>
          <p className='error' >¡Ocurrió un error inesperado! <br /><br />
          Ups! =( a llorar con la llorona!!! </p>
        </span>
      );
  }

export { TodosloadingErr };