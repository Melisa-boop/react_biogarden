import React from 'react';
import Cards from './Cards';
import datacards from '../../database/datacards';

function Maincards () {
    return(

        
        <div className="row">
        {
            datacards.map((data,i)=>{
                return(
                    <Cards
                    key={i}
                    titulo={data.titulo}
                    cifra={data.cifra}
                    color={data.color}
                    icono={data.icono}
                    className={data.className}
                    />)
            })    
        }        
        </div>

    );

}

export default Maincards;
