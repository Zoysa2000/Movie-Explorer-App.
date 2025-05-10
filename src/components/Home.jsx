
import '../App.css'
import MovieApp from "./Movielist.jsx";
import Upcoming from "./Upcoming.jsx";
import SearchBar from "./SearchBar.jsx";
import FooterBar from "./FooterBar.jsx";
function Home() {


    return (
        <>
            {/* background image */}
            <div
                className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/14db4679-e946-46ab-a96a-9285864a1422/LK-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg')] md:h-[80vh] h-[70vh] bg-cover bg-center relative">
                <div
                    className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90"></div>
                <div className='relative z-10 flex items-center justify-between px-8 pt-8 '>

                </div>
                <div
                    className='relative z-10 flex flex-col  text-center px-5 justify-center items-center w-full md:w-[85%] max-w-[800px] text-white h-full mx-auto gap-2'>
                    <h1 className="max-w-screen-sm title">Unlimited movies, TV shows, and more.</h1>
                    <p className="subtitle md:py-[12px]">Watch anywhere. Cancel anytime.</p>
                    <p className="md:text-[1.2rem] text-[18px] font-light">Ready to watch? Enter your email to create or
                        restart your membership.</p>
                 <SearchBar/>{/*re usable component*/}

                </div>
            </div>
            {/*Trending Movie List*/}
            <div className="border">
                <div className="mx-auto text-center  max-w-[1300px]  py-10 px-5 text-white">
                    <h1 className=" title ">Watch the Trending Movies YouTube Trailers</h1>
                    <p className="subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
                        players, and more.</p>
                </div>
                <MovieApp/>  {/*re usable component*/}

            </div>

            {/* second content*/}
            <div className='border'>
                <div
                    className="flex md:flex-row flex-col text-white justify-between py-10 md:gap-[30px] max-w-[1300px] px-5 mx-auto items-center ">
                    <div className="md:w-[52%]">
                        <h1 className="pb-3 title">Enjoy on your Movies.</h1>
                        <p className="subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
                            players, and more.</p>
                    </div>
                    <div className="relative md:w-[48%] w-full">
                        <img
                            className="w-full h-full"
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                            alt="TV Image"
                        />
                        <video
                            className="absolute top-[48%] max-h-[74%] max-w-[73%] left-[50%] -translate-x-1/2 -translate-y-1/2"
                            data-uia="our-story-card-video"
                            autoPlay
                            playsInline
                            muted
                            loop
                        >
                            <source
                                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </div>


            <div className="border">
                <div className="mx-auto text-center  max-w-[1300px]  py-10 px-5 text-white ">
                    <h1 className=" title ">Find the Upcoming Movies Trailers</h1>
                    <p className="subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
                        players, and more.</p>
                </div>
                <Upcoming/> {/*re usable component*/}

            </div>
            <div className=" mb-10">
            </div>
        <FooterBar/>
        </>
    )
}

export default Home