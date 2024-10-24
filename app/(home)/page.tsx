import Link from "next/link";

// 서버 컴포넌트에서는 metadata도 사용 가능
export const metadata = {
    title : 'Home'
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// data fetch할 async/await 문법의 함수 
async function getMovies(){     

    // 서버에서 시간이 오래걸리는 작업이 발생하는 상황을 가정
    // await new Promise((resolve)=>setTimeout(resolve,1000));
   
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

// 화면을 그려줄 export default에도 async를 명시
export default async function HomePage(){
    // 내부에서 async/await 함수를 통한 data fetch
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie)=>{
                return (
                    <li key={movie.id}>
                        <Link href={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                )
            })}
        </div>
    )
}