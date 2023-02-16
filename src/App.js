import "./App.css";
import HomePage from "./components/HomePage/HomePage.jsx";
import Slider from "./components/Slider/Slider.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
    return (
        <header>
            <BrowserRouter>
                <HomePage/>
                <Routes>
                    <Route path="/" element={<Slider /> } />
                    <Route path="/signIn" element={<SignIn />}/>
                    <Route path="/product" element={<ProductPage />}/>
                </Routes>
            </BrowserRouter>
        </header>
    );
};

export default App;