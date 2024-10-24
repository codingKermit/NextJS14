import { API_URL } from "../app/(home)/page";

async function getMovie(id:string){
    // 작업이 오래 걸리는 경우를 가정 
    // await new Promise((resolve)=>setTimeout(resolve,5_000));
    
    const response = await fetch(`${API_URL}/${id}`);
    const json = response.json();
    return json;
}

export default async function MovieInfo({id}:{id:string}){
    const movie = await getMovie(id);
    return(
        <div>
            {JSON.stringify(movie)}
        </div>
    )
};