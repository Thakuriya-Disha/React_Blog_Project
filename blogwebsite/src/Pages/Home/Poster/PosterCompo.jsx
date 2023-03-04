import './style_poster.css';

const PosterCompo = () => {
    return(
        <>
        <div className='posterGrid'>
            <div id='pic1'>
                <h2> Welcome to La Luna: an Art Blog </h2><br/>
                <span> Introduction / </span><span>Feb 27 2023 </span>
            </div>
            <div id='pic2'>
                <h2> Through art, our heart speaks </h2><br/>
                <span> Paintings / </span><span>March 1 2023 </span>
            </div>
            <div id='pic3'>
                <h2> Music feeds our soul </h2><br/>
                <span> Music / </span><span>March 2 2023 </span>
            </div>
        </div>    
        </>
    );
}

export default PosterCompo;