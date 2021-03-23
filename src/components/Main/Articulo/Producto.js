// React
import react, {useState, useEffect} from 'react';

const Producto = () => {
    
    const [producto, setProducto] = useState({}) //constante mas el estado de la constante
    
    useEffect(() => {
        obtenerProducto()
    }, [])  //para evitar el bucle infinito
    
    const obtenerProducto = () => {
        fetch("http://localhost:3030/api/products/last")
        .then(response => response.json())
        .then(json => setProducto(json))
        .catch(error => {
            console.log(error)
        })
    }
    
    return(
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:"25rem"}} src={"http://localhost:3030" + producto.urlImagen} alt="/lastproduct"></img>
            </div>
            <strong>{producto.title}</strong>
            <p>{producto.description}</p>
            <a target="_blank" rel="nofollow" href={"http://localhost:3030/products/" + producto.id}>Detalles del Producto</a>
        </div>
    );
}

export default Producto;
