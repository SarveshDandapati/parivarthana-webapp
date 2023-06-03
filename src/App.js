import "./App.css";
import HomePage from "./components/HomePage/HomePage.jsx";
import Slider from "./components/Slider/Slider.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx"
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AddProduct from "./components/AddProduct/AddProduct";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import AdminHome from "./components/HomeAdmin/Home";
import AdminProduct from "./components/productPageAdmin/products";

const App = () => {
    const [isAdmin, setisAdmin] = useState(false)
    return (
        <header>
            <BrowserRouter>
                {
                    isAdmin ? (
                        <>
                            <AdminHome setisAdmin={setisAdmin} />
                            <Routes>
                                <Route path="/" element={<AdminProduct />} />
                                <Route path="/admin/AddNewProduct" element={<AddProduct />} />
                            </Routes>
                        </>
                    ) : (
                        <>
                            <HomePage />
                            <Routes>
                                <Route path="/" element={<About />} />
                                <Route path="/product/:id" element={<ProductDetails />} />
                                <Route path="/signIn" element={<SignIn setisAdmin={setisAdmin} />} />
                                <Route path="/signUp" element={<SignUp />} />
                                <Route path="/product" element={<ProductPage />} />
                                {/* <Route path="/about" element={<About />}/> */}
                                <Route path="/contacts" element={<Contact />} />
                            </Routes>
                            <Footer />
                        </>
                    )
                }

            </BrowserRouter>
        </header>
    );
};

export default App;