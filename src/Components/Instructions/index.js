import React from 'react'
import { NavLink } from 'react-router-dom'
import arte_indicadores from '../../Assets/Image/arte_indicadores.png'
import './style.css'

const Intructions = () => {
    return (
        <div className='container-instructions'>
                <div className="content-instructions">
                    <div className="instructions-left">
                        <p>Ao lado, estão os três indicadores do <i>game</i>. Quando você tomar suas decisões, eles poderão aumentar ou diminuir. Por isso, acompanhe-os para saber sua evolução no jogo.</p>
                        <p>Você iniciará o game com os indicadores zerados. No decorrer do jogo, eles serão impactados por todas as suas decisões. Então, fique atento!</p>
                        <p>Antes de resolver cada situação, reflita como suas escolhas podem influenciar os indicadores.</p>
                    </div>
                    <div className="instructions-right">
                        <img alt="arte indicador" src={arte_indicadores} />
                    </div>
                </div>
                <NavLink className='btn-next' to='/Game'>Continuar</NavLink>
        </div>
    )
}

export default Intructions