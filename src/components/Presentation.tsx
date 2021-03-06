import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Presentation = () => {
    return (
        <div>
            <div className="card" style={{paddingTop:'20px', paddingBottom:'20px',}}> 
                <div className="text-card">
                    <h1 className="h1-card">Comodidad y calidad a tu disposición</h1>
                    <h3 className="h3-card">Servicio de ecommerce en tiempo récord.</h3>
                    <div style={{textAlign:'right',position:'relative'}}>
                        <h5 className="h5-card" style={{display:'inline-block'}}>Ir a catálogo de productos</h5>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{display:'inline-block', paddingLeft:'5px', textAlign:'right'}}/>
                    </div>
                </div> 
            </div>
        </div>
    )
}
 
 export default Presentation
