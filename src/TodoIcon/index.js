import { ReactComponent as CircleSVG} from './circle.svg';
import { ReactComponent as CheckSVG} from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
    "circle": (color) => <CircleSVG  className="Icon-svg" fill={color}/>,
    "check": (color) => <CheckSVG  className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>, 
};


function TodoIcon({type, color, onClick}){
    return(
        <span /* className={`Icon Icon-svg Icon-${type}`} */
            className={`ContenedorSvg ContenedorSvg-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}&nbsp;&nbsp;&nbsp;&nbsp; 
            {/*Se tuvo que agregar espacios porque sino no se renderizaban los íconos, revisar CSS */} 

            
        </span>
   )
}

export {TodoIcon};