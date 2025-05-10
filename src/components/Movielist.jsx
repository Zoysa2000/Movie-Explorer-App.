import { useEffect, useState } from "react";
import {ImgOverlay} from "image-overlay-react";
import 'image-overlay-react/dist/index.css';
import {useDispatch} from "react-redux";
import {detailStore} from "../utilities/actionSlice.jsx";
import {useNavigate} from "react-router-dom";
const MovieApp = () => {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch movies and set a loading state
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=f50ba9b5b96af22ce97328b1bb12a676&language=en-US`)
            .then((res) => res.json())
            .then((data) => {
                setMovieList(data.results.slice(0, 18));
            });
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    const handleDiscoverClick = (movie) => {
        dispatch(
            detailStore({
                id: movie.id,
                title: movie.title,
                posterPath: movie.poster_path,
                overview: movie.overview,
                releaseDate: movie.release_date,
                voteAverage: movie.vote_average,
                backdropPath: movie.backdrop_path,
            })
        );
        navigate(`/details/${movie.id}`);
    };
    return (
        <>
            {isLoading ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-5  max-w-[1300px] items-center justify-center mx-auto mb-10">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                        <div
                            key={item}
                            className="h-[250px] w-[200px] bg-[#AEAEAE] animate-pulse rounded-lg"
                        />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-5 p-3 sm:p-0 mb-10 max-w-[1300px] items-center justify-center mx-auto  items-stretch">
                    {movieList.map((movie) => (
                        <div key={movie.id} className="text-center">
                            <ImgOverlay
                                imgSrc={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                bgColor="rgba(0, 0, 0, 0.4)"
                                position="top"
                                width="100%"
                                height="auto"
                            >
                                <button
                                    type="button"
                                    className="focus:outline-none text-white bg-[#e50914] hover:bg-red-800 focus:ring-4 focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    onClick={() => handleDiscoverClick(movie)}
                                >
                                    WATCH
                                </button>
                            </ImgOverlay>

                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default MovieApp;


