import './style_nav.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <>
        <div className='navList'>
            <Link to={"/"} style={{textDecoration:'none',color:'purple'}}>
                <div>Home</div>
            </Link>

            <Link to={"/bollywood"} style={{textDecoration:'none',color:'purple'}}>
                <div>Bollywood</div>
            </Link>
            
            <Link to={"/technology"} style={{textDecoration:'none',color:'purple'}}>
                <div>Technology</div>
            </Link>

            <Link to={"/hollywood"} style={{textDecoration:'none',color:'purple'}}>
                <div>Hollywood</div>
            </Link>

            <Link to={"/fitness"} style={{textDecoration:'none',color:'purple'}}>
                <div>Fitness</div>
            </Link>

            <Link to={"/food"} style={{textDecoration:'none',color:'purple'}}>
                <div>Food</div>
            </Link>
        </div>
        <br /><hr/>
        </>
    );
}
export default NavBar;