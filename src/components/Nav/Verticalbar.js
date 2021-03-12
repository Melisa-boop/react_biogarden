import React from 'react';
import logo from "../../assets/images/logo.png";
import Verticalcomponent from './Verticalcomponent';
import navdata from '../../database/navdata';
import Footer from '../Footer';


function Verticalbar (props){
	
	return(
		
		<div>
		
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="Sidebar">
		<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
		<div className="sidebar-brand-icon">
		<img className="logo" src={logo} width="30%"/>
		</div>
		</a>
		
		<div className="logo">
		<a href="/" >
		
		</a>
		</div>
		
		<hr className="sidebar-divider my-0"/>
		
		<li className="nav-item active">
		<a className="nav-link" href="/">
		<i className="fas fa-fw fa-tachometer-alt"></i>
		<span>Dashword</span></a>
		</li>
		
		
		<hr className="sidebar-divider"></hr>
		
		
		<div className="sidebar-heading">Opciones de Menu</div>
		
		{
			navdata.map((componente,key)=>{
				return(
					<Verticalcomponent
					key={key}
					href={componente.href}
					icono={componente.icono}
					titulo={componente.titulo}
					/>
					
					)
					
				})
				
			}
			
			<hr className="sidebar-divider d-none d-md-block"></hr>
			
			<Footer/>
			</ul>
			
			
			</div>
			
			)}
			
			export default Verticalbar;