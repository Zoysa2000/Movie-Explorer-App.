import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";
import FooterBar from "./FooterBar.jsx";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const backgroundImageUrl =
        'https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/14db4679-e946-46ab-a96a-9285864a1422/LK-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === 'admin') {
            setError('');
            setIsLoading(true);
            setTimeout(() => {
                navigate('/home');
            }, 3000);
        } else {
            setError('Invalid username or password');
        }
    };

    const [isZoomed, setIsZoomed] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsZoomed((prev) => !prev);
        }, 1000); // Toggle every 1 second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-screen flex justify-center items-center overflow-hidden">
            {/* Background */}
            <div
                className="fixed inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            ></div>
            <div className="fixed inset-0 bg-black opacity-50"></div>

            {/* Form */}
            <div className="relative z-10 w-full max-w-md bg-white rounded-lg shadow-md p-6 text-center mx-4">
                <form onSubmit={handleSubmit}>
                    <img alt="logo" src="./logo.png" className="h-20 w-20 mx-auto mb-6"/>
                    <h3
                        className={`mt-4 font-medium text-2xl text-black transition-transform duration-500 ${
                        isZoomed ? 'scale-110' : 'scale-100'
                        }`}
                    >
                        Your Ticket to Entertainment!
                    </h3>

                    <input
                        type="text"
                        placeholder="Username is admin"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border mt-5 rounded-md"
                    />
                    <input
                        type="password"
                        placeholder="Password is admin"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border mt-5 rounded-md"
                    />

                    {/* Spinner or Error Message */}
                    {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
                    {isLoading && (
                        <div className="mt-3 flex justify-center items-center">
                            <svg aria-hidden="true"
                                 className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-700"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"/>
                            </svg>
                            <span className="ml-2 text-sm text-gray-700">Logging in...</span>
                        </div>
                    )}

                    <div className="flex justify-center mt-4">
                        <p className="text-black flex items-center text-sm bg-yellow-50 px-4 py-2 rounded-md shadow-sm">
                            <span className="mr-2 text-yellow-500 text-lg">⚠️</span>
                            <span className="mr-4">Username: <b>admin</b></span>
                            <span>Password: <b>admin</b></span>
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 mt-5 rounded-md hover:bg-red-700"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Redirecting...' : 'Login With MTube'}
                    </button>
                </form>

            </div>
            <FooterBar/>
        </div>
    );
}

export default Login;





