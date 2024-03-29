import './style_poem.css';
import HeaderCompo from '../../Header/HeaderComponent';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Poetry = () => {

    const [poem, setPoem] = useState([]);
    useEffect(() => {
        fetch("https://luna-blog.onrender.com/poetry")
        .then(res => res.json())
        .then((data) => {
            setPoem(data);
        })
    })

    const nav = useNavigate();
    const toNavigate = (category, id, selectedPoem) => {
        nav(`/article/${category}/${id}`, { state: { content: selectedPoem } });
    };

    return(
        <>
            <HeaderCompo />
            <br/>
            <div className='pageColumns'>

                <div className='col1'>
                    <h1>Poetry</h1>
                    {
                        poem?.map((poem) => {
                            return(
                                <>
                                <div className='dataFlex' id='{poem.id}' onClick = {() => toNavigate(poem.category, poem.id, poem)} style={{cursor:'pointer'}}>
                                    <div>
                                        <img src={poem.url} alt='poem cover art'></img>
                                    </div>
                                    <div className='textCol'>
                                        <h2>{poem.title}</h2>
                                        <p>{poem.description}</p>
                                        <span>{poem.theme} / {poem.date}</span>
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
                        poem?.filter((item) => item.featureID === 1).map((poem) => {
                            return(
                                <>
                                <div id='{poem.id}' className='firstTP' onClick = {() => toNavigate(poem.category, poem.id, poem)} style={{cursor:'pointer'}}>
                                    <img src={poem.url} alt='cover art'></img>
                                    <div className='tp1'>
                                        <div>
                                            <h3>{poem.title}</h3>
                                            <span>{poem.date}</span>
                                        </div>
                                        <div>
                                            <h2> {poem.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                </>
                            );
                        })
                    }

                    {
                        poem?.filter((item) => item.featureID === 2).map((poem) => {
                            return(
                                <>
                            
                                    <div id='{poem.id}' className='tp' onClick = {() => toNavigate(poem.category, poem.id, poem)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={poem.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{poem.title}</h3>
                                            <span>{poem.date}</span>
                                        </div>
                                        <div>
                                            <h2> {poem.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        poem?.filter((item) => item.featureID === 3).map((poem) => {
                            return(
                                <>
                            
                                    <div id='{poem.id}' className='tp' onClick = {() => toNavigate(poem.category, poem.id, poem)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={poem.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{poem.title}</h3>
                                            <span>{poem.date}</span>
                                        </div>
                                        <div>
                                            <h2> {poem.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        poem?.filter((item) => item.featureID === 4).map((poem) => {
                            return(
                                <>
                            
                                    <div id='{poem.id}' className='tp' onClick = {() => toNavigate(poem.category, poem.id, poem)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={poem.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{poem.title}</h3>
                                            <span>{poem.date}</span>
                                        </div>
                                        <div>
                                            <h2> {poem.featureID} </h2>
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

export default Poetry;