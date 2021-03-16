// Database
import datacategoria from '../../database/datacategoria'

// Componentes
import Maincards from './Maincards'
import Articulo from './Articulo'
import Producto from './Articulo/Producto';
import Categorias from './Articulo/Categorias';
import Table from './Table' 

let titulos = ['Ultimo producto publicado','Categorias']

function Section (){
    return(
        <section className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <Maincards/>
            <div className="row">
                <Articulo titulo={titulos[0]}>
                    <Producto/>
                </Articulo>
                <Articulo titulo={titulos[1]}>
                    <Categorias/>
                </Articulo>
            </div>
            <div className="row">
                <Table/>
            </div>
        </section>
    )

}
export default Section; 