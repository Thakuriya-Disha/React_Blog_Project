import './style_kdrama.css';
import HeaderCompo from '../../Header/HeaderComponent';
import React, {useContext,useEffect} from 'react';
import {blogData} from '../../Utility/ContextAPI';
import {useNavigate} from 'react-router-dom';

const Kdramas = () => {

    useEffect(() => {
        fetch("https://luna-blog-data.onrender.com")
        .then( res => res.json())
        .then( data => console.log(data))
    })
    
    const [moviesList] = useContext(blogData);

    const nav = useNavigate();
    const toNavigate = (category, id, selectedDrama) => {
        nav(`/article/${category}/${id}`, { state: { content: selectedDrama } });
    };

    return(
        <>
           <HeaderCompo />
            <br/>
            <div className='pageColumns'>

                <div className='col1'>
                    <h1>K-DRAMAS</h1>
                    {
                        moviesList.filter((item) => item.category === 'kdramas').map((film) => {
                            return(
                                <>
                                <div className='dataFlex' id='{film.id}' onClick = {() => toNavigate(film.category, film.id, film)} style={{cursor:'pointer'}}>
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
                        moviesList.filter((item) => item.category === 'kdramas' && item.featureID === 1).map((film) => {
                            return(
                                <>
                                <div id='{film.id}' className='firstTP' onClick = {() => toNavigate(film.category, film.id, film)} style={{cursor:'pointer'}}>
                                    <img src={film.url} alt='cover art'></img>
                                    <div className='tp1'>
                                        <div>
                                            <h3>{film.title}</h3>
                                            <span>{film.date}</span>
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
                        moviesList.filter((item) => item.category === 'kdramas' && item.featureID === 2).map((film) => {
                            return(
                                <>
                            
                                    <div id='{film.id}' className='tp' onClick = {() => toNavigate(film.category, film.id, film)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={film.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{film.title}</h3>
                                            <span>{film.date}</span>
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
                        moviesList.filter((item) => item.category === 'kdramas' && item.featureID === 3).map((film) => {
                            return(
                                <>
                            
                                    <div id='{film.id}' className='tp' onClick = {() => toNavigate(film.category, film.id, film)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={film.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{film.title}</h3>
                                            <span>{film.date}</span>
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
                        moviesList.filter((item) => item.category === 'kdramas' && item.featureID === 4).map((film) => {
                            return(
                                <>
                            
                                    <div id='{film.id}' className='tp' onClick = {() => toNavigate(film.category, film.id, film)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={film.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{film.title}</h3>
                                            <span>{film.date}</span>
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

                    <br/><br/>
                    <div className='adCol'></div>
                </div>
            </div>
        </>
    );
}

export default Kdramas;