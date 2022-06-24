import React, { useEffect, useState } from "react";
import './styles.css'

const Header = (props) => {

    return (
        <>
            <div className="header mt-4">
                <div className="text">
                    
                    <h1>Tenha o historico de seu carro dentro da blockchain</h1>
                    <p>Salve todo os seus historiocos com apenas alguns cliques e tenha para sempre o historico de suas manutenções.</p>
                </div>
                <div className="container mt-4">
                    <form onSubmit={props.onSubmitForm}>
                        <input className="form-control" onChange={props.onHandleForm}  type="text" name="search" id="search" placeholder="Digite o número do Chassi do veículo" />
                        <button className="btn-main" type="submit">Pesquisar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Header;