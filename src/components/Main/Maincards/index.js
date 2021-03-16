// Data
import datacards from '../../../database/datacards';

// Componentes
import Cards from './Card';

function Maincards () {
    return(
        <div className="row">
        {
            datacards.map((data,i) => {
                return(
                    <Cards
                        key = {i}
                        titulo = {data.titulo}
                        cifra = {data.cifra}
                        color = {data.color}
                        icono = {data.icono}
                        className = {data.className}
                    />
                );
            })    
        }   
        </div>
    );
}

export default Maincards;
