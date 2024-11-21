import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVidoes from "../../../../components/movie-videos";

interface IParams {
    params : {id:string};
}

export async function generateMetadata({params:{id}}: IParams){
    // 구조적으로 인해 getMovie 두번 호출 되지만 실제로는 Next.js에서 이미 호출한 요청에 대해서는 캐싱을 하기 때문에 호출 되지 않음 
    const movie = await getMovie(id);
    return {
        title : movie.title
    }
}


export default async function MovieDetail({ params : { id } }: IParams ){

    return(
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVidoes id={id} />
            </Suspense>
        </div>
    )
}