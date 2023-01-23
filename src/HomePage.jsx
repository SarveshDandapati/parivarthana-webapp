import "./HomePage.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Slider from "./components/Slider/Slider.jsx";

const HomePage = () => {
    return (
        <header>
            <NavBar/>
            <Slider/>
        </header>
    );
};

export default HomePage;