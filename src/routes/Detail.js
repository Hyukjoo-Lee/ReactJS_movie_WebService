import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

// useParams - Returns an object of key/value pairs of the dynamic params
// from the current URL that were matched by the route path
// 전달 되는 값 e.g. path="/movie/:key" 에서 key 에 담기는 value 를 가져오는 역할
// json 을 state 에 주고 detail 보여주기
function Details() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();

    console.log(movie);

    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setMovie(json.data.movie);
    }, [id])

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    return (
        <div>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading......</span>
                </div>
            ) : (<div className={styles.movie_details}>
                <h1>{movie.title}</h1>
                    <img src={movie.large_cover_image} alt={movie.title} className={styles.movie_img} />
                    <div><h3>Full Description</h3> <p>{movie.description_full}</p></div>
            </div>
            )
            }

        </div>
    );
}

export default Details;