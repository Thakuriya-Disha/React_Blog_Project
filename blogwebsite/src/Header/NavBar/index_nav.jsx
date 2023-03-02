import './style_nav.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <>
        <div className='navList'>
            <Link to={"/"} style={{textDecoration:'none',color:'black'}}>
                <div>Home</div>
            </Link>

            <Link to={"/bollywood"} style={{textDecoration:'none',color:'black'}}>
                <div>Bollywood</div>
            </Link>
            
            <Link to={"/technology"} style={{textDecoration:'none',color:'black'}}>
                <div>Technology</div>
            </Link>

            <Link to={"/hollywood"} style={{textDecoration:'none',color:'black'}}>
                <div>Hollywood</div>
            </Link>

            <Link to={"/fitness"} style={{textDecoration:'none',color:'black'}}>
                <div>Fitness</div>
            </Link>

            <Link to={"/food"} style={{textDecoration:'none',color:'black'}}>
                <div>Food</div>
            </Link>
        </div>
        <hr/>
        </>
    );
}
export default NavBar;