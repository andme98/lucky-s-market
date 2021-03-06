import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

interface INavBarProps {
    title: string,
}


const Navbar: React.FC<INavBarProps> = ({title}) => {
    return (
        <div className="navBar">
            
            <h1 className="titleNavbar">{title}</h1>
            
            <Link className="itemNavbar" to="/Catalogue"><h3>Catálogo</h3></Link>
            <Link className="itemNavbar" to="/AboutUs"><h3>Nosotros</h3></Link>
            <Link className="itemNavbar" to="/Contact"><h3>Contacto</h3></Link>
            <Link className="itemNavbar" to="/Register"><h3>Registro</h3></Link>
            
        </div>
    )
}


export default Navbar
