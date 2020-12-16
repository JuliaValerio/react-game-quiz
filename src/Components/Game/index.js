import React, { Component } from 'react'
import Indicators from '../Indicators'
import LocalStorageDatabase from '../../Database/LocalData'
import arte_indicadores from '../../Assets/Image/arte_indicadores.png'
import './style.css'

class StartGame extends Component {
    order = []
    constructor(props) {
        super(props)
        this.database = new LocalStorageDatabase()
        this.state = {
            order: this.props.order,
            round: 0,
            satisfacao: 0,
            fidelizacao: 0,
            satisfacaoTemp: null,
            fidelizacaoTemp: null
        }
    }

    saveValue(satisfacao, fidelizacao) {
        this.setState({
            satisfacaoTemp: satisfacao,
            fidelizacaoTemp: fidelizacao
        })
    }

    sendData() {
        if (this.state.satisfacaoTemp != null && this.state.fidelizacaoTemp != null) {

            let round = this.state.round + 1;
            let satisfacao = this.state.satisfacao + this.state.satisfacaoTemp;
            let fidelizacao = this.state.fidelizacao + this.state.fidelizacaoTemp;

            this.setState({
                satisfacaoTemp: null,
                fidelizacaoTemp: null,
                satisfacao: satisfacao,
                fidelizacao: fidelizacao,
                round: round
            });
        }
    }

    finishGame() {
        return (
            <div className='container-result'>
                <div className='content-result'>
                    <h2><img className='arte-indicador' src={arte_indicadores} /> Veja sua <i> performance </i> em cada indicador:</h2>
                    <Indicators
                        satisfacao={this.state.satisfacao}
                        fidelizacao={this.state.fidelizacao}
                    />
                </div>
            </div>
        )
    }

    render() {
        if (this.state.round === this.database.questions.banco_questoes.length) {
            return (
                <div>
                    {this.finishGame()}
                </div>
            );
        } else {
            const question = this.database.questions.banco_questoes[this.state.order[this.state.round]];
            //console.log(question)
            return (
                <div className='container-game'>
                    <Indicators
                        satisfacao={this.state.satisfacao}
                        fidelizacao={this.state.fidelizacao}
                    />
                    <div className='content-game'>
                        <h2>Pergunta {this.state.round + 1}: {question.pergunta}</h2>
                        <ul>
                            <li>
                                <button
                                    onClick={() => this.saveValue(question.alternativas[0].impacto_indicadores.satisfacao, question.alternativas[0].impacto_indicadores.fidelizacao)}
                                >A </button> {question.alternativas[0].descricao}
                            </li>
                            <li>
                                <button
                                    onClick={() => this.saveValue(question.alternativas[0].impacto_indicadores.satisfacao, question.alternativas[1].impacto_indicadores.fidelizacao)}
                                >B </button> {question.alternativas[1].descricao}
                            </li>
                            <li>
                                <button
                                    onClick={() => this.saveValue(question.alternativas[2].impacto_indicadores.satisfacao, question.alternativas[0].impacto_indicadores.fidelizacao)}
                                >C </button> {question.alternativas[2].descricao}
                            </li>
                        </ul>
                        <div>
                            <button className='btn-send'
                                onClick={() => this.sendData()}
                            >CONFIRMAR</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const Game = () => {

    function collectData() {
        let database = new LocalStorageDatabase();
        let qtd = database.questions.banco_questoes.length;
    
        let arr = [];
    
        for (let i = 0; i < qtd; i++) {
            arr.push(i);
        }
        return arr;
    }

    let arrQuestions = collectData()

    return (
        <div>
            <StartGame
            order={arrQuestions}
            />
        </div>
    )
}

export default Game