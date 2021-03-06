import React from 'react'
import Paragraph from '../components/Paragraph'
import Presentation from '../components/Presentation'

const AboutUs = () => {
    return (
        <div>
            <Presentation />
            <Paragraph />
            <img className="img-about" src="../shopping.jpg" alt="shopping"/>
        </div>
    )
}

export default AboutUs
