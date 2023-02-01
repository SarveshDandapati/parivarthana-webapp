import "./HomePage.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Sign from "./components/user/signUp.jsx";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Slider /> } />
                    <Route path="/signUp" element={<Sign />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default HomePage;