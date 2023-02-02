import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Sign from "./components/user/signup.jsx";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
    return (
        <header>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Slider /> } />
                    <Route path="/signUp" element={<Sign />}/>
                </Routes>
            </BrowserRouter>
        </header>
    );
};

export default App;