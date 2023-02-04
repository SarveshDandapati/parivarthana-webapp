import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Slider from "./components/Slider/Slider.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
    return (
        <header>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Slider /> } />
                    <Route path="/signIn" element={<SignIn />}/>
                </Routes>
            </BrowserRouter>
        </header>
    );
};

export default App;