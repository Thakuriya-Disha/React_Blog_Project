import './style_poem.css';
import HeaderCompo from '../../Header/HeaderComponent';
import React, {useContext} from 'react';
import {blogData} from '../../Utility/ContextAPI';

const Poetry = () => {

    const [poemsList] = useContext(blogData);

    return(
        <>
            <HeaderCompo />
            <br/>
            <div className='pageColumns'>

                <div className='col1'>
                    <h1>Poetry</h1>
                    {
                        poemsList.filter((item) => item.category === 'poetry').map((poem) => {
                            return(
                                <>
                                <div className='dataFlex' id='{poem.id}'>
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
                </div>

            </div>
        </>
    );
};

export default Poetry;