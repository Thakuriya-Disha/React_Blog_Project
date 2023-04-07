import './style_movie.css';
import HeaderCompo from '../../Header/HeaderComponent';
import React, {useContext,useEffect} from 'react';
import {blogData} from '../../Utility/ContextAPI';
import {useNavigate} from 'react-router-dom';

const Movies = () => {

    useEffect(() => {
        fetch("https://luna-blog-data.onrender.com/movies")
        .then( res => res.json())
        .then( data => console.log(data))
    })

    const [moviesList] = useContext(blogData);

    const nav = useNavigate();
    const toNavigate = (category, id, selectedMovie) => {
        nav(`/article/${category}/${id}`, { state: { content: selectedMovie } });
    };

    return(
        <>
            <HeaderCompo />
            <br/>
            <div className='pageColumns'>

                <div className='col1'>
                    <h1>Movies</h1>
                    {
                        moviesList.filter((item) => item.category === 'movies').map((pic) => {
                            return(
                                <>
                                <div className='dataFlex' id='{pic.id}' onClick = {() => toNavigate(pic.category, pic.id, pic)} style={{cursor:'pointer'}}>
                                    <div>
                                        <img src={pic.url} alt='movie'></img>
                                    </div>
                                    <div className='textCol'>
                                        <h2>{pic.title}</h2>
                                        <p>{pic.description}</p>
                                        <span>{pic.theme} / {pic.date}</span>
                                    </div>
                                </div>
                                <hr/>
                                </>
                            );
                        })
                    }
                </div>
                
                <div className='col2'>
                    <h1>Top Posts</h1>
                    {
                        moviesList.filter((item) => item.category === 'movies' && item.featureID === 1).map((pic) => {
                            return(
                                <>
                                <div id='{pic.id}' className='firstTP' onClick = {() => toNavigate(pic.category, pic.id, pic)} style={{cursor:'pointer'}}>
                                    <img src={pic.url} alt='picture'></img>
                                    <div className='tp1'>
                                        <div>
                                            <h3>{pic.title}</h3>
                                            <span>{pic.date}</span>
                                        </div>
                                        <div>
                                            <h2> {pic.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                </>
                            );
                        })
                    }

                    {
                        moviesList.filter((item) => item.category === 'movies' && item.featureID === 2).map((pic) => {
                            return(
                                <>
                            
                                    <div id='{pic.id}' className='tp' onClick = {() => toNavigate(pic.category, pic.id, pic)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={pic.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{pic.title}</h3>
                                            <span>{pic.date}</span>
                                        </div>
                                        <div>
                                            <h2> {pic.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        moviesList.filter((item) => item.category === 'movies' && item.featureID === 3).map((pic) => {
                            return(
                                <>
                            
                                    <div id='{pic.id}' className='tp' onClick = {() => toNavigate(pic.category, pic.id, pic)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={pic.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{pic.title}</h3>
                                            <span>{pic.date}</span>
                                        </div>
                                        <div>
                                            <h2> {pic.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        moviesList.filter((item) => item.category === 'movies' && item.featureID === 4).map((pic) => {
                            return(
                                <>
                            
                                    <div id='{pic.id}' className='tp' onClick = {() => toNavigate(pic.category, pic.id, pic)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={pic.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{pic.title}</h3>
                                            <span>{pic.date}</span>
                                        </div>
                                        <div>
                                            <h2> {pic.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    <br/><br/>
                    <div className='adCol'></div>

                </div>
            </div>
        </>
    );
};

export default Movies;