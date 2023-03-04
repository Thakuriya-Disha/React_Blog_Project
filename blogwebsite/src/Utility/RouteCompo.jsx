import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "../Pages/Home/HomeCompo";
import Poetry from "../Pages/Poetry/Poetry";
import Movies from "../Pages/Movies/Movies";
import Paintings from "../Pages/Paintings/Paintings";
import Music from "../Pages/Music/Music";
import Photography from "../Pages/Photography/Photography";

const RouterComponent = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/poetry" element={<Poetry />} />
                <Route path="/paintings" element={<Paintings />} />
                <Route path="/music" element={<Music />} />
                <Route path="/photography" element={<Photography />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterComponent;