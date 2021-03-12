import React from 'react';


function Articulo(props,children){
	
	return(
		<>
		<div className="col-lg-6 mb-4">
		<div className="card shadow mb-4">
		<div className="card-header py-3">
		<h6 className="m-0 font-weight-bold text-primary">{props.titulo}</h6>
		</div>
		<div className="card-body">
		<div className="row">
		
		{props.children}
		</div>
		
		</div>
		</div>
		</div>
		</>
		
		)
	}
	
	export default Articulo;