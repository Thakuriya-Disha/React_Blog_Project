import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "../Pages/Home/HomeCompo";
import Poetry from "../Pages/Poetry/Poetry";
import Kdramas from "../Pages/Kdramas/Kdramas";
import Animes from "../Pages/Animes/Animes";
import Music from "../Pages/Music/Music";
import Movies from "../Pages/Movies/Movies";
import ArticlePage from '../Pages/Articles/ArticlePage';

const RouterComponent = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/kdramas" element={<Kdramas />} />
                <Route path="/poetry" element={<Poetry />} />
                <Route path="/animes" element={<Animes />} />
                <Route path="/music" element={<Music />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/article/:category/:id" element={<ArticlePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterComponent;