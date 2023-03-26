import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title/index';

function Sobre() {
    const { name } = useParams();
    
    return (
        <div>  
            <Title
                title={"Sobre"}
                text={"Mais informações sobre a empresa"} />

            <div className="container">
                <div className="row align-items-center">
                    <div className='col' key='1'>
                        <p className='lh-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <div className='col' key='2'>
                        <img src={'/assets/images/logo.png'} alt="logo" className="img-fluid img-thumbnail border border-0" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Sobre;