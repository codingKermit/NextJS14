import { API_URL } from "../../../(home)/page";

async function getMovie(id:string){
    // 작업이 오래 걸리는 경우를 가정 
    await new Promise((resolve)=>setTimeout(resolve,5_000));
    
    const response = await fetch(`${API_URL}/${id}`);
    const json = response.json();
    return json;
}

async function getVideos(id:string){
    await new Promise((resolve)=>setTimeout(resolve,5_000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    const json = response.json();
    return json;
}

export default async function MovieDetail({
    params : { id }
}:{
    params : { id : string };
}){
     const [movie, videos] = await Promise.all([ getMovie(id), getVideos(id)]);
    return(
        <h1>{movie.title}</h1>
    )
}