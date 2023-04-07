import './style_music.css';
import HeaderCompo from '../../Header/HeaderComponent';
import React, {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Music = () => {

    const [music,setMusic] = useState([]);
    useEffect( ()=>{
        fetch("https://luna-blog.onrender.com/music")
        .then( res => res.json())
        .then( (data) => {
            setMusic(data);
        })
    })

    const nav = useNavigate();
    const toNavigate = (category, id, selectedAlbum) => {
        nav(`/article/${category}/${id}`, { state: { content: selectedAlbum } });
    };

    return(
        <>
            <HeaderCompo />
            <br/>
            <div className='pageColumns'>

                <div className='col1'>
                    <h1>Music</h1>
                    {
                        music?.map((song) => {
                            return(
                                <>
                                <div className='dataFlex' id='{song.id}' onClick = {() => toNavigate(song.category, song.id, song)} style={{cursor:'pointer'}}>
                                    <div>
                                        <img src={song.url} alt='cover art'></img>
                                    </div>
                                    <div className='textCol'>
                                        <h2>{song.title}</h2>
                                        <p>{song.description}</p>
                                        <span>{song.theme} / {song.date}</span>
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
                        music?.filter((item) => item.featureID === 1).map((song) => {
                            return(
                                <>
                                <div id='{song.id}' className='firstTP' onClick = {() => toNavigate(song.category, song.id, song)} style={{cursor:'pointer'}}>
                                    <img src={song.url} alt='cover art'></img>
                                    <div className='tp1'>
                                        <div>
                                            <h3>{song.title}</h3>
                                            <span>{song.date}</span>
                                        </div>
                                        <div>
                                            <h2> {song.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                </>
                            );
                        })
                    }

                    {
                        music?.filter((item) => item.featureID === 2).map((song) => {
                            return(
                                <>
                            
                                    <div id='{song.id}' className='tp' onClick = {() => toNavigate(song.category, song.id, song)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={song.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{song.title}</h3>
                                            <span>{song.date}</span>
                                        </div>
                                        <div>
                                            <h2> {song.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        music?.filter((item) => item.featureID === 3).map((song) => {
                            return(
                                <>
                            
                                    <div id='{song.id}' className='tp' onClick = {() => toNavigate(song.category, song.id, song)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={song.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{song.title}</h3>
                                            <span>{song.date}</span>
                                        </div>
                                        <div>
                                            <h2> {song.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        music?.filter((item) => item.featureID === 4).map((song) => {
                            return(
                                <>
                            
                                    <div id='{song.id}' className='tp' onClick = {() => toNavigate(song.category, song.id, song)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={song.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{song.title}</h3>
                                            <span>{song.date}</span>
                                        </div>
                                        <div>
                                            <h2> {song.featureID} </h2>
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

export default Music;