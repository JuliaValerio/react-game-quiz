import React  from 'react';
import './style.css'

const Indicators = (props) => {

    let pontuacaoMaxima = 10

    let porcentagemSatisfacao = props.satisfacao / pontuacaoMaxima * 100;
    let porcentagemFidelizacao = props.fidelizacao / pontuacaoMaxima * 100;

    let scope = {
      styleSatisfacao:{
        width: porcentagemSatisfacao + '%'
      },
      styleFidelizacao:{
        width: porcentagemFidelizacao + '%'
      }
    }

    return(
        <div className="container-indicators">
                  <div className="content-indicators">
            <div className="label-indicators">
              <p>Satisfação do Cliente</p>
              <div className="progressbar-indicators">
                <div className="indicator-satisfacao" style={scope.styleSatisfacao}></div>
              </div>
            </div>
            <hr/>
            <div className="label-indicators">
              <p>Fidelização</p>
              <div className="progressbar-indicators">
                <div className="indicator-fidelizacao" style={scope.styleFidelizacao}></div>
              </div>
            </div>
          </div>
        </div>
    )
    }

export default Indicators