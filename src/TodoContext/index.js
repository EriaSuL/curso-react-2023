import React from "react";
import { useLocalStorage } from "./useLocalStorage";




const TodoContext = React.createContext();

function TodoProvider({children}){
    //const [todos, setTodos] = React.useState(defaultTodos);
  //const [todos, setTodos] = React.useState(parsedTodos);
  const {
    item: todos, //renombrar propiedad para poder utilizar con otro nombre
    saveItem: saveTodos, //renombrar propiedad para poder utilizar con otro nombre
    loading,
    error
  } = useLocalStorage('TODOS_V1', []); //los nombres para los elementos del array de la constante pueden ser lo que se quieran poner, no es necesario que sea igual a los definidos en el custom hook.

  //Como se está utilizando localStorage, siempre que se manipule el estado, se debe actualizar también localStorage.

  /* Se envía dos elementos en el arreglo: 
    - Primer elemento: nombre de variable para guardar el estado 
    - Segundo elemento: nombre de función para modificar el estado. Se utiliza mismo nombre de variable y el prefijo "set"
  useState permite inicializar el estado */
  const [searchValue, setSearchValue] = React.useState('');    
  const [openModal, setopenModal] = React.useState(false);    

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

/*
  console.log('Log 1');

  //Si se envía otro argumento, el contenido del efecto sólo se va a ejecutar una vez o cuando exista un cambio en el estado que se envía (totalTodos)
  React.useEffect( () => {
    console.log('Loooooog 2');    
  }, [totalTodos] ); 
  
  console.log('Log 3');
*/

  /* Estado derivado */
  const searchedTodos = todos.filter(
    todo => {
      const todoText = todo.text.toLowerCase()
      const SearchText = searchValue.toLowerCase()
      return todoText.includes(SearchText)
    });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({text, completed:false});
    saveTodos(newTodos);
  };

  const completeTd = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
       (todo) => todo.text == text
      );
    newTodos[todoIndex].completed = !(newTodos[todoIndex].completed);
    saveTodos(newTodos);
  };

  const deleteTd = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
       (todo) => todo.text == text
      ); 
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };




    return(
        <TodoContext.Provider value = {{
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTd,
          deleteTd,
          openModal,
          setopenModal,
          addTodo,
        }}>
          {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};