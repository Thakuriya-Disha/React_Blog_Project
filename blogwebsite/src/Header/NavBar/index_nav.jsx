import './style_nav.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <>
        <div className='navList'>
            <Link to={"/"}>
                <div>Home</div>
            </Link>

            <Link to={"/Bollywood"}>
                <div>Bollywood</div>
            </Link>
            
            <Link to={"/Technology"}>
                <div>Technology</div>
            </Link>

            <Link to={"/Hollywood"}>
                <div>Hollywood</div>
            </Link>

            <Link to={"/Fitness"}>
                <div>Fitness</div>
            </Link>

            <Link to={"/Food"}>
                <div>Food</div>
            </Link>
        </div>
        <hr/>
        </>
    );
}
export default NavBar;