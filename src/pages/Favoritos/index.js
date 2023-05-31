import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import './favoritos.css';


function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);

        
    }, [])

    
    function excluirFilmes(id){
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id);//retorna todos os filmes menos esse em que estamos excluindo
        })

        setFilmes(filtroFilmes);  
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
        toast.success("FILME REMOVIDO COM SUCESSO");
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não tem nenhum filme na sua Lista!</span>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={() => excluirFilmes(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;