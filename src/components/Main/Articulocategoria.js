import React from 'react';
import datacategoria from '../../database/datacategoria'


function Articulocategoria (props){

    return(
				<>	
                    <div className="row">
                                    {
                                        datacategoria.map((categoria,i)=>{
                                            return(

                                                <div className="col-lg-6 mb-4">
                                                <div className="card bg-info text-white shadow">
                                                    <div className="card-body">
                                                        {categoria}
                                                    </div>
                                                </div>
                                            </div>
        
                                            )
                                        
                                        })
                                        

                                    }										
				
					</div>

                </>
							
      
    )
}

export default Articulocategoria;