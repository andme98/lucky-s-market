import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMailBulk, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactCard = () => {
    return (
        <div className="card-contact">
            <h2 className="h3-contact">CONTACTO</h2>
            <FontAwesomeIcon style={{marginTop:'20px', color:'azure', fontSize:'30px'}} icon={faPhone} size='xs'/>        
                <h3 className="soft">- Teléfono Fijo -</h3>
                <h5 className='soft'>(01) 611 - 9840</h5>
                <h5 className='soft'>(01) 505 - 0505</h5>
                <hr></hr>
                <FontAwesomeIcon style={{marginTop:'20px', color:'azure', fontSize:'30px'}} icon={faMobile} size='xs'/>        
                <h3 className="soft">- Móvil -</h3>
                <h5 className='soft'>(+51) 955 318 599</h5>
            
                <h3 className="soft">- WhatsApp -</h3>
                <h5 className='soft'>(+51) 955 318 599</h5>
                <h5 className='soft'>(+51) 957 227 259</h5>
                <hr></hr>
                <FontAwesomeIcon style={{marginTop:'20px', color:'azure', fontSize:'30px'}} icon={faMailBulk} size='xs'/>
                <h3 className="soft">- Correo electrónico -</h3>
                <h5 className='soft'>dev_group@gmail.com</h5>
        </div>
    )
}

export default ContactCard
