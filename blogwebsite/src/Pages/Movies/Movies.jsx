import './style_movie.css';
import HeaderCompo from '../../Header/HeaderComponent';
import React, {useContext} from 'react';
import {blogData} from '../../Utility/ContextAPI';

const Movies = () => {

    const [moviesList] = useContext(blogData);

    return(
        <>
           <HeaderCompo />
            <br/>
            <div className='pageColumns'>

                <div className='col1'>
                    <h1>Movies</h1>
                    {
                        moviesList.filter((item) => item.category === 'movie').map((film) => {
                            return(
                                <>
                                <div className='dataFlex' id='{film.id}'>
                                    <div>
                                        <img src={film.url} alt='cover art'></img>
                                    </div>
                                    <div className='textCol'>
                                        <h2>{film.title}</h2>
                                        <p>{film.description}</p>
                                        <span>{film.theme} / {film.date}</span>
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
                        moviesList.filter((item) => item.category === 'movie' && item.featureID === 1).map((film) => {
                            return(
                                <>
                                <div id='{film.id}' className='firstTP'>
                                    <img src={film.url} alt='cover art'></img>
                                    <div className='tp1'>
                                        <div>
                                            <h3>{film.title}</h3>
                                            <span>{film.theme} / {film.date}</span>
                                        </div>
                                        <div>
                                            <h2> {film.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                </>
                            );
                        })
                    }

                    {
                        moviesList.filter((item) => item.category === 'movie' && item.featureID === 2).map((film) => {
                            return(
                                <>
                            
                                    <div id='{film.id}' className='tp'>
                                        <div>
                                            <img src={film.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{film.title}</h3>
                                            <span>{film.theme} / {film.date}</span>
                                        </div>
                                        <div>
                                            <h2> {film.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        moviesList.filter((item) => item.category === 'movie' && item.featureID === 3).map((film) => {
                            return(
                                <>
                            
                                    <div id='{film.id}' className='tp'>
                                        <div>
                                            <img src={film.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{film.title}</h3>
                                            <span>{film.theme} / {film.date}</span>
                                        </div>
                                        <div>
                                            <h2> {film.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        moviesList.filter((item) => item.category === 'movie' && item.featureID === 4).map((film) => {
                            return(
                                <>
                            
                                    <div id='{poem.id}' className='tp'>
                                        <div>
                                            <img src={film.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{film.title}</h3>
                                            <span>{film.theme} / {film.date}</span>
                                        </div>
                                        <div>
                                            <h2> {film.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Movies;