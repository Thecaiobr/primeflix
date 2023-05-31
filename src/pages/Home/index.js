import { useEffect, useState } from "react"; //vamos usar o useEffect para que todas as vezes que rodar a api buscar os filmes na api, e o useState para armazenar em algum estado para eu poder usar no app
import api from "../../services/api"; 
import { Link } from 'react-router-dom';
import './home.css';
//URL DA API: /movie/now_playing?api_key=5ec203db5ea46346c2f587932a0ca80c&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //mais detalhes nesse link https://www.pluralsight.com/guides/process-an-api-response-in-react onde mostra como funciona o response
        //chamada da api, o await serve para esperar chamar a api
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "5ec203db5ea46346c2f587932a0ca80c",
                    language: "pt-BR",
                    PAGE: 1,
                }
            })

            //console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results.slice(0,10))
            setLoading(false);

        }

        loadFilmes();

    }, [])

    if(loading) {
        return(
            <div className="loading">
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Home;