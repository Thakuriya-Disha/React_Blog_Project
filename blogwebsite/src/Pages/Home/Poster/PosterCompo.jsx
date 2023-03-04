import './style_poster.css';

const PosterCompo = () => {
    return(
        <>
        <div className='posterGrid'>
            <div id='pic1'>
                <h2> Welcome to La Luna: an Art Blog </h2>
                <span> Introduction / 27th Feb 2023 </span>
            </div>
            <div id='pic2'>
                <h2><span> Through art, our heart speaks </span></h2>
                <span> Paintings / 1st Mar 2023 </span>
            </div>
            <div id='pic3'>
                <h2> Music feeds our soul </h2>
                <span> Music / 2nd Mar 2023 </span>
            </div>
        </div>    
        </>
    );
}

export default PosterCompo;