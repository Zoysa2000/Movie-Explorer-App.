import {BrowserRouter as
        Router,
    Routes,
    Route} from 'react-router-dom';
import Home from "./components/Home.jsx";
import Display from "./components/Display.jsx";
import Login from "./components/Login.jsx";

const Index = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>}></Route>
                    <Route exact path="/details/:id" element={<Display/>}></Route>
                    <Route exact path="/home" element={<Home/>}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default Index;