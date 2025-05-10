9

const FooterBar = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-red-600 bg-opacity-60 text-white py-3 shadow-md z-50">
            <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center">
        <span className="text-sm text-center">
          &copy; {new Date().getFullYear()} MTube. All rights reserved.
        </span>
            </div>
        </footer>
    );
};

export default FooterBar;

