import React from 'react';
import Articulocategoria from './Articulocategoria';
import Articuloproducto from './Articuloproducto';
import Maincards from './Maincards'
import Articulo from './Articulo'


let titulos = ['Ultimo producto publicado','Categorias']


function Section (){
    return(
        
        <section className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashword</h1>
					</div>
          <div className="row">
             <Maincards/>
             <Articulo titulo={titulos[1]}>
                 <Articulocategoria/>
             </Articulo>
             <Articuloproducto titulo ={titulos[0]}>
             </Articuloproducto>

          </div>

        
        </section>

        


    )

}
export default Section; 