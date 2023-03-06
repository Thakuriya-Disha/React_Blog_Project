import './style_latest.css';
import React, {useContext} from 'react';
import {blogData} from '../../../Utility/ContextAPI';

const TheLatest = () => {

    const [latestList] = useContext(blogData);

    return(
        <>
        <h1 className='theLatest'>The Latest</h1>

            <div className='latestBox1'>

                <div className='box1A'>

                    {
                        latestList.filter((item) => item.category === 'poetry' && item.id === 1).map((data) => {
                            return(
                                <>
                                <div style={{backgroundImage:'{data.url}', width:'250px', height:'250px', backgroundRepeat:'noRepeat', backgroundSize:'cover'}}></div>
                                <div style={{fontSize:'18px'}}> {data.title} </div>
                                <div style={{color:'grey'}}> {data.description} </div>
                                <div>
                                    {data.category} / <span style={{color:'grey'}}>{data.date}</span>
                                </div>
                                </>
                            );
                        })
                    }
                </div>

                <div className='box1B'>

                    {
                        latestList.filter((item) => item.category === 'music' && item.id === 3).map((data) => {
                            return(
                                <>
                                <div style={{backgroundImage:'{data.url}', width:'250px', height:'250px', backgroundRepeat:'noRepeat', backgroundSize:'cover'}}></div>
                                <div style={{fontSize:'18px'}}> {data.title} </div>
                                <div style={{color:'grey'}}> {data.description} </div>
                                <div>
                                    {data.category} / <span style={{color:'grey'}}>{data.date}</span>
                                </div>
                                </>
                            );
                        })
                    }

                </div>

                <div className='box1C'>

                {
                        latestList.filter((item) => item.category === 'painting' && item.id === 1).map((data) => {
                            return(
                                <>
                                <div style={{backgroundImage:'{data.url}', width:'250px', height:'250px', backgroundRepeat:'noRepeat', backgroundSize:'cover'}}></div>
                                <div style={{fontSize:'18px'}}> {data.title} </div>
                                <div style={{color:'grey'}}> {data.description} </div>
                                <div>
                                    {data.category} / <span style={{color:'grey'}}>{data.date}</span>
                                </div>
                                </>
                            );
                        })
                    }

                </div>
                
            </div>
        </>
    );
};

export default TheLatest;