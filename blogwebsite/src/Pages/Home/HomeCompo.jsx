import HeaderCompo from '../../Header/HeaderComponent';
import PosterCompo from './Poster/PosterCompo.jsx';
import TheLatest from './Latest/TheLatest';

const HomePage = () => {
    return(
        <>
            <HeaderCompo />
            <br/><br/>
            <PosterCompo />
            <br/><br/><br/>
            <TheLatest />
        </>
    );
}

export default HomePage;