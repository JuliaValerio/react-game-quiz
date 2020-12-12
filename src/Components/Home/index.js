import React from 'react'
import './style.css'

const Home = () => {
    return(
        <div className='container-home'>
            <div className='content-home'>
                <h1 className="title">Game Quiz</h1>
                <p>Seja bem-vindo(a)! A partir de agora, você terá a oportunidade de colocar em prática tudo o que já aprendeu. Para isso, será necessário superar alguns desafios, tomando a <b>melhor decisão para você, <br/> para o cliente e para <br/> o negócio</b>. Está preparado?</p>
                <button className="btn-challenge">Clique aqui para aceitar o desafio!</button>
            </div>

        </div>
    )
}

export default Home