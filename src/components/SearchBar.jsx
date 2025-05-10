import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const API_KEY = '5fe3767eabd4d5ca825563bb86d6e8ae';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const moviesFromStore = useSelector((state) => state.action.movies);

    useEffect(() => {
        const fetchMovies = async () => {
            if (!searchTerm.trim()) {
                setResults([]);
                return;
            }

            setLoading(true);
            try {
                const res = await axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: API_KEY,
                        query: searchTerm,
                    },
                });

                setResults(res.data.results);
            } catch (error) {
                console.error('TMDb API error:', error);
                const fallback = moviesFromStore.filter((item) =>
                    item.movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
                );
                setResults(fallback.map((f) => f.movie));
            } finally {
                setLoading(false);
            }
        };

        const delayDebounce = setTimeout(fetchMovies, 500);
        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);

    return (
        <div className="w-full flex flex-col items-center mt-6">
            {/* Search Input */}
            <div className="flex flex-col items-center justify-center w-full md:flex-row md:items-stretch gap-4 px-4">
                <input
                    type="text"
                    placeholder="Search TMDb Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="md:w-[60%] w-full px-4 py-2 md:py-3 bg-white text-black placeholder:text-sm rounded-md"
                />
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm">
                    <span>Find Movies</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 6 12">
                        <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" />
                    </svg>
                </button>
            </div>

            {/* Movie Cards */}
            {searchTerm && (
                <div className="w-full overflow-x-auto mt-6 px-4">
                    <div className="flex gap-6 min-w-max">
                        {loading ? (
                            <p className="text-white">Loading...</p>
                        ) : results.length > 0 ? (
                            results.slice(0, 10).map((movie) => (
                                <div
                                    key={movie.id}
                                    className="min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                                >
                                    <img
                                        className="w-full h-60 object-cover"
                                        src={
                                            movie.poster_path
                                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                                : 'https://via.placeholder.com/500x750?text=No+Image'
                                        }
                                        alt={movie.title}
                                    />
                                    <div className="px-4 py-3">
                                        <h5 className="text-md font-semibold text-gray-900 dark:text-white line-clamp-2">
                                            {movie.title}
                                        </h5>
                                        <div className="flex items-center mt-2 mb-3">
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
                                                        <path d="M20.924 7.625a1.523 1.523 0 00-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 00-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 001.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 002.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 002.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 00.387-1.575z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm">
                        {movie.vote_average?.toFixed(1)}
                      </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-white">
                        {movie.release_date}
                      </span>
                                            <a
                                                href={`/details/${movie.id}`}
                                                className="text-white bg-red-600 hover:bg-red-700 rounded px-3 py-1 text-xs"
                                            >
                                                Watch Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 text-center w-full">
                                No movies found for "{searchTerm}"
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;




