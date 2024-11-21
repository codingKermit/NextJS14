import { API_URL } from '../app/layout';
import styles from '../styles/movie-videos.module.css'

async function getVideos(id:string){
    await new Promise((resolve)=>setTimeout(resolve,3_000));
    // throw new Error('Something broke...');
    const response = await fetch(`${API_URL}/${id}/videos`);
    const json = response.json();
    return json;
}

export default async function MovieVidoes({id}:{id:string}){
    const videos = await getVideos(id);
    return(
        <div className={styles.container}>
            {videos.map((video)=>{
                return(
                    <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}></iframe>
                )
            })}
        </div>
    )
};