import './style_nav.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <>
        <div className='navList'>
            <Link to={"/"} style={{textDecoration:'none',color:'indigo'}}>
                <div>HOME</div>
            </Link>

            <Link to={"/poetry"} style={{textDecoration:'none',color:'indigo'}}>
                <div>POETRY</div>
            </Link>
            
            <Link to={"/music"} style={{textDecoration:'none',color:'indigo'}}>
                <div>MUSIC</div>
            </Link>

            <Link to={"/animes"} style={{textDecoration:'none',color:'indigo'}}>
                <div>ANIMES</div>
            </Link>

            <Link to={"/kdramas"} style={{textDecoration:'none',color:'indigo'}}>
                <div>K-DRAMAS</div>
            </Link>

            <Link to={"/movies"} style={{textDecoration:'none',color:'indigo'}}>
                <div>MOVIES</div>
            </Link>
        </div><br/>
        </>
    );
};
export default NavBar;