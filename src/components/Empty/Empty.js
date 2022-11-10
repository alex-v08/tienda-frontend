import './styles/empty.css';
import emptyPic from '../../../public/empty.svg';

export const Empty = () => {
	return `<div class='empty'>    
                <img src="${emptyPic}" />
                <h3>No hay elementos.</h3> 
            </div>	           
       `;
};
