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
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=5fe3767eabd4d5ca825563bb86d6e8ae&language=en-US`)
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
        // Dispatching an action to the Redux store to update the movie detail state
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
                        <div
                            key={movie.id}
                            className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                        >
                            <img
                                className="rounded-t-lg w-full h-60 object-cover"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="px-5 pb-5">
                                <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                                    {movie.title}
                                </h5>
                                <div className="flex items-center mt-2.5 mb-4">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < Math.round(movie.vote_average / 2)
                                                        ? 'text-yellow-300'
                                                        : 'text-gray-200 dark:text-gray-600'
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M20.924 7.625a1.523 1.523 0 00-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 00-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 001.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 002.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 002.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 00.387-1.575z"/>
                                            </svg>
                                        ))}
                                    </div>
                                    <span
                                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
        {movie.vote_average.toFixed(1)}
      </span>
                                </div>
                                <div className="flex items-center justify-between">
      <span className="text-sm text-gray-700 dark:text-white">
        {movie.release_date}
      </span>
                                    <button
                                        type="button"
                                        onClick={() => handleDiscoverClick(movie)}
                                        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-xs px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700"
                                    >
                                        WATCH
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </>
    );
};

export default MovieApp;


