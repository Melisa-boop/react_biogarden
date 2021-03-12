import React from 'react';

function VerticalComponent(props){
    return(
        <>

			<li className="nav-item">
            <a className="nav-link collapsed" href={props.href}> 
                <i className={props.icono}></i>
                <span>{props.titulo}</span></a>  
            </li>
        </>

)

}

export default VerticalComponent;



