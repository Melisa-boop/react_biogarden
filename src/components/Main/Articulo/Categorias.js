// React
import react, {useState, useEffect} from 'react';

function Categoria (){
    
    const [categorias, setCategorias] = useState([]) //constante mas el estado de la constante
    
    useEffect(() => {
        obtenerCategoria()
    }, [])  //para evitar el bucle infinito

    const obtenerCategoria = () => {
        fetch("http://localhost:3000/api/products")
        .then(response => response.json())
        .then(json => {
            setCategorias(json.countByCategory)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
        <div className="card-body">
            <div className="row">
                {
                    categorias.map((categoria) => {
                        return (
                            <div key={categoria.id} className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body">
                                        <strong>{ categoria.name }</strong>
                                        <p>Total: { categoria.count }</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Categoria;