import "./HomePage.css";
import NavBar from "./components/NavBar/NavBar.js";
import Slider from "./components/Slider/Slider.js";

const HomePage = () => {
    return (
        <header>
            <NavBar/>
            <Slider/>
        </header>
    );
};

export default HomePage;