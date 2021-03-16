// React
import react, {useState, useEffect} from 'react';

// Data
import datacards from '../../../database/datacards';

// Componentes
import Cards from './Card';

function Maincards () {
    const [totalProducts, setTotalProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState([]);
    const [totalUsers, setTotalUsers] = useState([]);
    
    useEffect(() => {
        obtenerDataProductos()
    }, {})
    
    const obtenerDataProductos = () => {
        fetch("http://localhost:3000/api/products?page=all")
        .then(response => response.json())
        .then(json => {
            setTotalProducts(json.count)            
            let amount = 0.0
            for (let product of json.products) {
                amount = amount + ( parseFloat(product.price) * product.quantity )
            }
            amount = amount.toFixed(2);
            setTotalAmount(amount)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const [dataUsers, setDataUsers] = useState([]);
    
    useEffect(() => {
        obtenerDataUsers()
    }, {})
    
    const obtenerDataUsers = () => {
        fetch("http://localhost:3000/api/users")
        .then(response => response.json())
        .then(json => {
            setTotalUsers(json.count)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return(
        <div className="row">
        {
            datacards.map((data,i) => {
                switch (data.id) {
                    case 'totalProducts':
                        data.cifra = totalProducts;
                        break;
                    case 'totalAmount':
                        data.cifra = '$ ' + totalAmount.toString();
                        break;
                    case 'totalUsers':
                        data.cifra = totalUsers;
                        break;
                }
                
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
