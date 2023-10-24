import "./TodoItem.css";
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem(props){
    return (
      
      <li>
        {/* Los estilos dinamicos deben ir entre comillas simples.
            Al ser código jsx debe ir entre llaves
            Para agregar un estilo verificando el estado enviado en props
            se debe utilizar otra llave.

            Se respeta el orden CSS cuando hay diferentes clases que editan la misma propiedad del elemento html. 
            Para este ejemplo, por defecto debe ir la clase Activa y se reemplaza el estilo sólo de aquellas 
            inactivas (las tareas que ya fueron completadas)

         */}
        {/*<img 
          className={`TodoState todoStateActive ${props.completed && "todoStateInactive"}`} 
          onClick={props.onComplete}
        src="iconTodo/circle.png" /> */}
        
        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <p className={`TodoState todoStateActive ${props.completed && "todoStateInactive"}`}>{props.text}</p>
        <DeleteIcon
          onDelete={props.onDelete}
         />
        {/*<img className="TodoState" 
          onClick={props.onDelete}
      src="iconTodo/delete.png" />*/}
      </li>
    );
  }

export {TodoItem}