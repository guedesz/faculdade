import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

const filmes = [{
    "nome": "Vingadores",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2010,
    "assistido": true,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
  },
  {
    "nome": "Vingadores 2",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2014,
    "assistido": true,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
  },
  {
    "nome": "Vingadores 3",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2015,
    "assistido": false,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
  }
  ]

function FilmeExist(nomeFilme) {

    for (const key in filmes) {

        if (filmes[key].nome != nomeFilme) {
            continue;
        };

       return filmes[key];
    }

    return 0
};

function Assistido({ javisto }) {
    if (javisto) {
      return <p>✔</p>;
    }

    return <span className="item">Não assistido</span>;
}

function Detalhes() {
    const { filme } = useParams();

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />            

            {(() => {
                let desc = FilmeExist(filme)

                // if movie doesn't exist on array
                if (desc == 0) {
                    return (
                        <div className='container'>
                            <p className='display-6 text-center'> Detalhes do filme não encontrados :'(</p>
                        </div>
                    )
                }

                // display correct info about movie
                return (
                    <div className='container px-4 text-center'> 
                        <div className='row gx-5'>
                            <div className='col' key='1'>
                                <img src={'/assets/images/' + desc.foto} alt={filme.nome} className="img-fluid img-thumbnail border border-0 rounded rounded-5 w-50 p-3" />
                            </div>
                            <div className="col align-self-center" key='2'>
                                <p className='lead fs-1 '> <span className='fw-semibold '>Detalhes sobre: </span> {desc.nome}</p>
                                <p className='lead'> <span className='fw-semibold'>Duração: </span>{desc.duracao} </p>
                                <p className='lead'> <span className='fw-semibold'>Gênero: </span> {desc.genero}</p>
                                <p className='lead'> <span className='fw-semibold'>Sinopse: </span> {desc.descricao}</p>
                                <p className='lead'> <span className='fw-semibold'>Pontuação: </span>{desc.nota} </p>
                                <p className='lead'> <span className='fw-semibold'>Assistido: </span><Assistido javisto={desc.assistido} /></p>
                            </div>
                        </div>
                    </div>
                )
                
            })()}

        </div>
    )
}

export default Detalhes;