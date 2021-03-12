import React from 'react';
import Header from '../Header/Header'
import Section from './Section';


function Main(){

    return(

        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Header/>
                <Section/>
            </div>


        </div>


    )
}

export default Main;