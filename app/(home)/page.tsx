// 서버 컴포넌트에서는 metadata도 사용 가능
export const metadata = {
    title : 'Home'
}

const url = "https://nomad-movies.nomadcoders.workers.dev/movies";

// data fetch할 async/await 문법의 함수 
async function getMovies(){     
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

// 화면을 그려줄 export default에도 async를 명시
export default async function HomePage(){
    // 내부에서 async/await 함수를 통한 data fetch
    const movies = await getMovies();
    return (
        <div>
            {JSON.stringify(movies)}
        </div>
    )
}