import react,{Component} from 'react';

class Articuloproducto extends Component{

    constructor(props){
        super(props);
        this.state={
            products:[],
            image:"",
            description:""
        }
    }
    apiCall(url,handler){
        axios(url)
        .then(response=>response.json()
        .then(datos=>handler(datos))
        .catch(error=>{
            console.log(error);
            return error
        })
    }


    respuestaApi(){
        this.apiCall("https://localhost:3000/api/products",this.handlerData)
    }

    handlerData =(datos)=>{
        this.setState({
            image:datos.products[-1].image,
            description:datos.products[-1].description,
        })
    }


    ComponentDidMount(){
        console.log('me estoy renderizando')
        this.respuestaApi()

    }

    render(){
        return(
            <div className="card-body">
			    <div className="text-center">
				<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src={this.state.image} alt=""></img>
				</div>
				<p>{this.state.description}</p>
				<a target="_blank" rel="nofollow" href="/https://localhost:3000">View product detail</a>
			</div>
            

        )
    }



}

export default Articuloproducto;



//montaje- ComponentDidMount()

//actualizacion-ComponentDidUpdate()

//desmontaje-ComponentWillUnmount()-no se debe invocar setState

//consumo de la API

//endopoints-AXIOS

//
