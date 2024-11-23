'use client'

interface IMovieProps {
    title : string;
    id : string;
    poster_path : string;
}

import styles from '../styles/movie.module.css';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Movie({id, poster_path, title}:IMovieProps){

    const router = useRouter();
    const onClick = () =>{
        router.push(`/movies/${id}`);
    }

    /*
        강의 내에서
        Link 안에 img를 사용하지 않는 이유는 Link 내에 div를 사용하는 것은 좋은 관행으로 여겨지지 않기 때문에
        별도의 useRouter 훅을 사용 하여 구현하는 것입니다.

        하지만 실제로 Link 안에 넣어도 동작에는 문제가 없습니다.
        사실 저는 Link 안에 넣는 것이 오히려 보기도 편하고 코드도 간결하고 좋은 것 같습니다.
    */
    return(
        <div className={styles.movie}>
            <div key={id}>
                <img src={poster_path} alt={title} onClick={onClick}></img>
                <Link prefetch href={`/movies/${id}`}>{title}</Link>
            </div>
        </div>
    )
}