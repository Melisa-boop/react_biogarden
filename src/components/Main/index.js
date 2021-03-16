// Componentes
import Header from '../Header/Header'
import Section from './Section';
import Footer from './Footer';

function Main(){
    return(
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Header/>
                <Section/>
            </div>
            <Footer/>
        </div>
    );
}

export default Main;