import "./HomePage.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Menu from "./components/Menu/Menu.jsx";
const HomePage = () => {
    return (
        <header>
            <NavBar/>
            <Slider/>
        </header>
    );
};

export default HomePage;