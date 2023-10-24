import react from "react";
import {TodoIcon} from './';

function CompleteIcon({completed, onComplete}){
    return (
        <TodoIcon 
        type={completed ? 'check' : 'circle'}
        color={completed ? 'cyan' : 'gray'}
        onClick={onComplete}
        />
    );
}

export {CompleteIcon};
