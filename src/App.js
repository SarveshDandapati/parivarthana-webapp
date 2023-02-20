import "./App.css";
import HomePage from "./components/HomePage/HomePage.jsx";
import Slider from "./components/Slider/Slider.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx"
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
    return (
        <header>
            <BrowserRouter>
                <HomePage/>
                <Routes>
                    <Route path="/" element={<Slider /> } />
                    <Route path="/oneproduct" element={<ProductDetails />} />
                    <Route path="/signIn" element={<SignIn />}/>
                    <Route path="/signUp" element={<SignUp />}/>
                    <Route path="/product" element={<ProductPage />}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </header>
    );
};

export default App;