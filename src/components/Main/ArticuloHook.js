import react,{useState,useEffect} from 'react';


const ArticuloHook=()=>{
    const datos=[

    ]

const [producto,setProducto]=useState([])//constante mas el estado de la constante


    useEffect(()=>{
        console.log('useEffect')
       obtenerProducto()

    },[])
    const obtenerProducto=async()=>{
        const data = await axios("https://localhost:3000/api/products")
        const productos=await data.json()
        console.log(productos)
        setProducto({//como hago apra que me muestre el ultimo producto cargado?
            image: `https://localhost:3000/api/products${productos[productsJson-1].image}`,
            description: productos[productsJson-1].description,
        })
    }

        return(
            <div className="card-body">
			    <div className="text-center">
				<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src={image} alt=""></img>
				</div>
				<p>{description}</p>
				<a target="_blank" rel="nofollow" href="/https://localhost:3000">View product detail</a>
			</div>
            

        );
 }
export default ArticuloHook;
