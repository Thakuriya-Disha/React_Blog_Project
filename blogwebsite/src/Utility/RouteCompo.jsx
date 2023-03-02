import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "../Pages/Home/HomeCompo";
import TechPage from "../Pages/Technology/TechPage";
import BollywoodPage from "../Pages/Bollywood/BollywoodPage";
import HollywoodPage from "../Pages/Hollywood/HollywoodPage";
import FitnessPage from "../Pages/Fitness/FitnessPage";
import FoodPage from "../Pages/Food/FoodPage";

const RouterComponent = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Bollywood" element={<BollywoodPage />} />
                <Route path="/Technology" element={<TechPage />} />
                <Route path="/Hollywood" element={<HollywoodPage />} />
                <Route path="/Fitness" element={<FitnessPage />} />
                <Route path="/Food" element={<FoodPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent;