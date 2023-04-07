import './style_poster.css';

const PosterCompo = () => {
    return(
        <>
        <div className='posterGrid'>
            <div id='pic1'>
                <h1> Welcome to La Luna: the World of Stories !</h1>
                <h3> 
                    Stories are not to be underestimated. <br/>
                    Stories exist within things both big and small. <br/>
                    I believe it is not an understatement to say that our world is made up of stories.<br/>
                    It's this fascination with stories that led me to create this blog: La Luna. <br/>
                    There are so many kinds of them. Stories can be found hidden inside <br/>
                    poems, movies, songs and shows. It is so fun to decipher them!
                </h3>
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