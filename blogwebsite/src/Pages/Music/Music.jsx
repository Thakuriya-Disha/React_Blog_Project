import './style_music.css';
import HeaderCompo from '../../Header/HeaderComponent';
import React, {useContext} from 'react';
import {blogData} from '../../Utility/ContextAPI';

const Music = () => {

    const [musicList] = useContext(blogData);

    return(
        <>
            <HeaderCompo />
            <br/>
            <div className='pageColumns'>

                <div className='col1'>
                    <h1>Music</h1>
                    {
                        musicList.filter((item) => item.category === 'music').map((song) => {
                            return(
                                <>
                                <div className='dataFlex' id='{song.id}'>
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
                        musicList.filter((item) => item.category === 'music' && item.featureID === 1).map((song) => {
                            return(
                                <>
                                <div id='{song.id}' className='firstTP'>
                                    <img src={song.url} alt='cover art'></img>
                                    <div className='tp1'>
                                        <div>
                                            <h3>{song.title}</h3>
                                            <span>{song.theme} / {song.date}</span>
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
                        musicList.filter((item) => item.category === 'music' && item.featureID === 2).map((song) => {
                            return(
                                <>
                            
                                    <div id='{song.id}' className='tp'>
                                        <div>
                                            <img src={poem.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{song.title}</h3>
                                            <span>{song.theme} / {song.date}</span>
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
                        musicList.filter((item) => item.category === 'music' && item.featureID === 3).map((song) => {
                            return(
                                <>
                            
                                    <div id='{song.id}' className='tp'>
                                        <div>
                                            <img src={song.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{song.title}</h3>
                                            <span>{song.theme} / {song.date}</span>
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
                        musicList.filter((item) => item.category === 'music' && item.featureID === 4).map((song) => {
                            return(
                                <>
                            
                                    <div id='{song.id}' className='tp'>
                                        <div>
                                            <img src={song.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{song.title}</h3>
                                            <span>{song.theme} / {song.date}</span>
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
                </div>
            </div>
        </>
    );
}

export default Music;