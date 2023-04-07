import './style_anime.css';
import HeaderCompo from '../../Header/HeaderComponent';
import React, {useContext,useEffect} from 'react';
import {blogData} from '../../Utility/ContextAPI';
import {useNavigate} from 'react-router-dom';

const Animes = () => {

    useEffect(() => {
        fetch("https://luna-blog-data.onrender.com/animes")
        .then( res => res.json())
        .then( data => console.log(data))
    })
    
    const [animeList] = useContext(blogData);

    const nav = useNavigate();
    const toNavigate = (category, id, selectedAnime) => {
        nav(`/article/${category}/${id}`, { state: { content: selectedAnime } });
    };

    return(
        <>
            <HeaderCompo />
            <br/>
            <div className='pageColumns'>

                <div className='col1'>
                    <h1>Animes</h1>
                    {
                        animeList.filter((item) => item.category === 'animes').map((art) => {
                            return(
                                <>
                                <div className='dataFlex' id='{art.id}' onClick = {() => toNavigate(art.category, art.id, art)} style={{cursor:'pointer'}}>
                                    <div>
                                        <img src={art.url} alt='cover art'></img>
                                    </div>
                                    <div className='textCol'>
                                        <h2>{art.title}</h2>
                                        <p>{art.description}</p>
                                        <span>{art.theme} / {art.date}</span>
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
                        animeList.filter((item) => item.category === 'animes' && item.featureID === 1).map((art) => {
                            return(
                                <>
                                <div id='{art.id}' className='firstTP' onClick = {() => toNavigate(art.category, art.id, art)} style={{cursor:'pointer'}}>
                                    <img src={art.url} alt='cover art'></img>
                                    <div className='tp1'>
                                        <div>
                                            <h3>{art.title}</h3>
                                            <span>{art.date}</span>
                                        </div>
                                        <div>
                                            <h2> {art.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                </>
                            );
                        })
                    }

                    {
                        animeList.filter((item) => item.category === 'animes' && item.featureID === 2).map((art) => {
                            return(
                                <>
                            
                                    <div id='{art.id}' className='tp' onClick = {() => toNavigate(art.category, art.id, art)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={art.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{art.title}</h3>
                                            <span>{art.date}</span>
                                        </div>
                                        <div>
                                            <h2> {art.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        animeList.filter((item) => item.category === 'animes' && item.featureID === 3).map((art) => {
                            return(
                                <>
                            
                                    <div id='{art.id}' className='tp' onClick = {() => toNavigate(art.category, art.id, art)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={art.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{art.title}</h3>
                                            <span>{art.date}</span>
                                        </div>
                                        <div>
                                            <h2> {art.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        animeList.filter((item) => item.category === 'animes' && item.featureID === 4).map((art) => {
                            return(
                                <>
                            
                                    <div id='{art.id}' className='tp' onClick = {() => toNavigate(art.category, art.id, art)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={art.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{art.title}</h3>
                                            <span>{art.date}</span>
                                        </div>
                                        <div>
                                            <h2> {art.featureID} </h2>
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

export default Animes;