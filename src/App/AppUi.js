import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Todosloading } from '../Todosloading';
import { TodosloadingErr } from '../TodosloadingErr';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import React from 'react';


function AppUi(){
    const {loading,
        error,
        searchedTodos,
        completeTd,
        deleteTd,} = React.useContext(TodoContext);

    return (
        /*<React.Fragment>*/
        <> {/* Los corchetes vacíos son el equivalente a <React.Fragment> */}
            <TodoCounter /> 
            <TodoSearch />
            
            <TodoList>
                    {/* Se renderiza el array de elementos y se genera un nuevo array mediante la función map. Por cada elemento del array se va a crear un TodoItem 
                    Se debe asignar una propiedad key a cada TodoItem para que no de warning,
                    para éste ejemplo se utilizar la propiedad text del elemento como key. Ya que en este ejemplo
                    no deberían existir tareas repetidas. */}
        
                    {/* Seccion que se va a refactorizar utilizando loading skeleton */}
                    {/*
                    {loading && <p>Estamos cargando...</p> }
                    {error && <p>Ups! =( a llorar con la llorona!!! </p> }
                    {(!loading && searchedTodos.length == 0) && <p>Crea tu primer ToDo!</p>} 
                    {//&& entre paréntesis es operador lógido (y), fuera de los paréntesis significa "entonces" }
                    */}
        
                    {loading && <Todosloading />}
                    {error &&  <TodosloadingErr />}
                    {(!loading && searchedTodos.length == 0) && <TodosEmpty />} {/*&& entre paréntesis es operador lógido (y), fuera de los paréntesis significa "entonces" */}
        
        
                    {searchedTodos.map(todo => (
                        <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => completeTd(todo.text)} 
                        onDelete={() => deleteTd(todo.text)}
                        />
                    ))}
                    
            </TodoList>
            
            {/*<CreateTodoButton />*/}
        </>
        /*</React.Fragment> */
    );    
}

export { AppUi };
