

import { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const movies = useSelector((state) => state.action.movies); // access from Redux store

    // Filter: match titles starting with the typed value
    const filteredMovies = movies.filter((item) =>
        item.movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full flex flex-col items-center mt-3">
            <div className="flex flex-col items-center justify-center w-full md:flex-row md:items-stretch">
                <input
                    type="text"
                    placeholder="Search My Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="md:w-[60%] w-full px-[10px] py-2 md:py-4 bg-white text-black placeholder:text-sm"
                />
                <button className="red-btn">
                    <span>Find Movies</span>
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 6 12">
                        <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" />
                    </svg>
                </button>
            </div>

            {/* Movie results below input */}
            {searchTerm && (
                <div className="w-full md:w-[60%] mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map((item) => (
                            <div
                                key={item.movie.id}
                                className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                            >
                                <img
                                    className="rounded-t-lg w-full h-60 object-cover"
                                    src={`https://image.tmdb.org/t/p/w500${item.movie.posterPath}`}
                                    alt={item.movie.title}
                                />
                                <div className="px-5 pb-5">
                                    <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                                        {item.movie.title}
                                    </h5>
                                    <div className="flex items-center mt-2.5 mb-4">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-4 h-4 ${
                                                        i < Math.round(item.movie.voteAverage / 2)
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
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                {item.movie.voteAverage.toFixed(1)}
              </span>
                                    </div>
                                    <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-white">
                {item.movie.releaseDate}
              </span>
                                        <a
                                            href={`/details/${item.movie.id}`}
                                            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-xs px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700"
                                        >
                                            Watch Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-center w-full">
                            No movies starting with "{searchTerm}"
                        </p>
                    )}
                </div>
            )}

        </div>
    );
};

export default SearchBar;
