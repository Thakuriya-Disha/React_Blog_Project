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

            <Link to={"/paintings"} style={{textDecoration:'none',color:'indigo'}}>
                <div>PAINTINGS</div>
            </Link>

            <Link to={"/movies"} style={{textDecoration:'none',color:'indigo'}}>
                <div>MOVIES</div>
            </Link>

            <Link to={"/photography"} style={{textDecoration:'none',color:'indigo'}}>
                <div>PHOTOGRAPHY</div>
            </Link>
        </div><br/>
        </>
    );
};
export default NavBar;