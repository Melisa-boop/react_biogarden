import React from 'react';
import PropTypes from 'prop-types';

function Cards ({titulo, cifra,color, icono,className }){
    return(

	<>
        <div className="col-md-4 mb-4">
							<div className={className}>
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className={color}>{titulo}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-clipboard-list fa-2x text-gray-300">{icono}</i>
										</div>
									</div>
								</div>
							</div>
		
						</div>
	</>

    );
	//PROPS DEFAULT

	}
	Cards.defaultProps={//le damos un valor por defecto-recibe un objeto literal
		titulo:"es un titulo",
		color:"tiene color",
		cifra:"2"
	}
     
	Cards.protoTypes={
		titulo:PropTypes.string,
		color:PropTypes.string,
		cifra:PropTypes.number,
		//icono:PropTypes.border-left-primary,



}

export default Cards;