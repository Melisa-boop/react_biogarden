// Data
import logo from "../../assets/images/logo.png";
import navdata from '../../database/navdata';

// Componentes
import Verticalcomponent from './Verticalcomponent';

function Verticalbar (props){
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="Sidebar">
            
            {/* Brand y logo */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <img className="logo" src={logo} width="30%"/>
                </div>
            </a>
            
            <hr className="sidebar-divider my-0"/>
            
            {/* Titulo */}
            <li className="nav-item active">
                <a className="nav-link" href="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
            </li>

            <hr className="sidebar-divider"></hr>
            
            <div className="sidebar-heading">Opciones de Menu</div>
            {
                navdata.map((componente,key)=>{
                    return(
                        <Verticalcomponent
                            key = {key}
                            href = {componente.href}
                            icono = {componente.icono}
                            titulo = {componente.titulo}
                        />
                    );  
                })
            }
            <hr className="sidebar-divider d-none d-md-block"></hr>
        </ul>  
    );
}

export default Verticalbar;