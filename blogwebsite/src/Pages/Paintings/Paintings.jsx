import './style_paint.css';
import HeaderCompo from '../../Header/HeaderComponent';
import React, {useContext} from 'react';
import {blogData} from '../../Utility/ContextAPI';
import {useNavigate} from 'react-router-dom';

const Paintings = () => {

    const [artList] = useContext(blogData);

    const nav = useNavigate();
    const toNavigate = (category, id, selectedArt) => {
        nav(`/article/${category}/${id}`, { state: { content: selectedArt } });
    };

    return(
        <>
            <HeaderCompo />
            <br/>
            <div className='pageColumns'>

                <div className='col1'>
                    <h1>Paintings</h1>
                    {
                        artList.filter((item) => item.category === 'painting').map((art) => {
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
                        artList.filter((item) => item.category === 'painting' && item.featureID === 1).map((art) => {
                            return(
                                <>
                                <div id='{art.id}' className='firstTP' onClick = {() => toNavigate(art.category, art.id, art)} style={{cursor:'pointer'}}>
                                    <img src={art.url} alt='cover art'></img>
                                    <div className='tp1'>
                                        <div>
                                            <h3>{art.title}</h3>
                                            <span>{art.theme} / {art.date}</span>
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
                        artList.filter((item) => item.category === 'painting' && item.featureID === 2).map((art) => {
                            return(
                                <>
                            
                                    <div id='{art.id}' className='tp' onClick = {() => toNavigate(art.category, art.id, art)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={art.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{art.title}</h3>
                                            <span>{art.theme} / {art.date}</span>
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
                        artList.filter((item) => item.category === 'painting' && item.featureID === 3).map((art) => {
                            return(
                                <>
                            
                                    <div id='{art.id}' className='tp' onClick = {() => toNavigate(art.category, art.id, art)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={art.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{art.title}</h3>
                                            <span>{art.theme} / {art.date}</span>
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
                        artList.filter((item) => item.category === 'painting' && item.featureID === 4).map((art) => {
                            return(
                                <>
                            
                                    <div id='{art.id}' className='tp' onClick = {() => toNavigate(art.category, art.id, art)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={art.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{art.title}</h3>
                                            <span>{art.theme} / {art.date}</span>
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

export default Paintings;