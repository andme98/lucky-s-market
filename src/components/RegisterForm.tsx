import React from 'react'

const RegisterForm = () => {
    return (
        <div>
            <h2 style={{paddingTop:'20px',textAlign:'center', fontFamily:'Livvic, sans-serif', fontWeight:'bolder'}}>Registro</h2>
            <div className="register-form">  
                <input placeholder="Nombres"></input>
                <input placeholder="Apellidos"></input>
                <input placeholder="Dirección"></input>
                <input placeholder="Correo electrónico"></input>
                <input placeholder="Teléfono"></input>
                <button>Registrarme</button>
            </div>
        </div>
    )
}

export default RegisterForm