
import { API_URL } from '../app/layout';
import styles from '../styles/movie-info.module.css';

export async function getMovie(id:string){
    // 작업이 오래 걸리는 경우를 가정 
    // await new Promise((resolve)=>setTimeout(resolve,5_000));
    
    const response = await fetch(`${API_URL}/${id}`);
    const json = response.json();
    return json;
}

export default async function MovieInfo({id}:{id:string}){
    const movie = await getMovie(id);
    return(
        <div className={styles.container}>
            <img className={styles.poster} src={movie.poster_path}/>
            <div>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                <p className={styles.info}>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr; </a>
            </div>
        </div>
    )
};