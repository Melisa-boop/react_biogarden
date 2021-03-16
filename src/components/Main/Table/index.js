// React
import react, {useState, useEffect} from 'react';

// Componentes
import RowTable from './RowTable'

const Table = (props) => {
    
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        obtenerProductos()
    }, [])
    
    const obtenerProductos = () => {
        fetch("http://localhost:3000/api/products")
        .then(response => response.json())
        .then(json => {
            setProductos(json.products)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <table className = "table">
            <thead>
                <tr>
                    <th scope = "col">#</th>
                    <th scope = "col">Title</th>
                    <th scope = "col">Description</th>
                    <th scope = "col">Price</th>
                    <th scope = "col">Category</th>
                    <th scope = "col">Colour</th>
                    <th scope = "col">Size</th>
                    <th scope = "col">Stock</th>
                </tr>
            </thead>
            <tbody>
            {/* { productos.map((producto) => console.log(producto))} */}
            {
                productos.map((producto) => {
                    return(
                        <RowTable
                            key = {producto.id}
                            row = {producto.id}
                            title = {producto.title}
                            description = {producto.description}
                            price = {producto.price}
                            category = {producto.categorias.name}
                            colour = {producto.colores.name}
                            size = {producto.tamanos.name}
                            stock = {producto.quantity}
                        />
                    )
                })
            }
            </tbody>
        </table>
    );
}

export default Table;
