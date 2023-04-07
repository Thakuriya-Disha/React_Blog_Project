import './style_poster.css';

const PosterCompo = () => {
    return(
        <>
        <div className='posterGrid'>
            <div id='pic1'>
                <h2> Welcome to La Luna: the Treasure trove of Stories !</h2>
                <p style={{font:"18px",marginTop:"30px"}}> 
                    Stories are not to be underestimated. I believe it is not an understatement that our world itself 
                    is made up of stories. Stories exist within things both big and small. There are so many kinds of them.
                    And it's this fascination with stories that led me to create this blog: La Luna. 
                    Stories are hidden inside poems, movies, songs and shows. It is so fun to decipher them.
                </p>
            </div>
            <div id='pic2'>
                <h2><span> Through art, our heart speaks </span></h2>
            </div>
            <div id='pic3'>
                <h2> Music feeds our souls </h2>
            </div>
        </div>    
        </>
    );
}

export default PosterCompo;