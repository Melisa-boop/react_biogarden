// React
import react, {useState, useEffect} from 'react';
import Pagination from './Pagination';

// Componentes
import RowTable from './RowTable'

const Table = () => {
    
    const [productos, setProductos] = useState([]);
    const [pagination, setPagination] = useState({
        previous: 0,
        current: 1,
        next: 0,
        pages: 3,
    });
    
    useEffect(() => {
        obtenerProductos()
    }, [])
    
    const obtenerProductos = () => {
        fetch("http://localhost:3000/api/products?page=" + pagination.current)
        .then(response => response.json())
        .then(json => {
            setPagination({
                previous: json.paging.previous == undefined ? 0 : json.paging.offset / 10,
                current: json.paging.offset / 10 + 1,
                next: json.paging.next == undefined ? 0 : json.paging.offset / 10 + 2,
                pages: 3,
            })
            
            setProductos(json.products)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <div className="row">
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
            <Pagination
                previous = {pagination.previous}
                current = {pagination.current}
                next = {pagination.next}
                pages = {3}
            />
        </div>
    );
}

export default Table;
