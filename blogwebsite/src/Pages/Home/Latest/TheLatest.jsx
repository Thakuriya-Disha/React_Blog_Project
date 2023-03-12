import './style_latest.css';
import React, {useContext} from 'react';
import {blogData} from '../../../Utility/ContextAPI';

const TheLatest = () => {

    const [latestList] = useContext(blogData);

    return(
        <>
        <h1 className='theLatest'>The Latest Poems</h1>

            <div className='latestBox1'>

                <div className='box1'>

                    {
                        latestList.filter((item) => item.category === 'poetry' && item.id === 1).map((data) => {
                            return(
                                <>
                                <div id={data.id}>
                                    <img src={data.url} alt='pic' style={{width:'250px',height:'250px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <div style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </div>
                                    <div> {data.oneliner} </div><br/>
                                    <div>
                                        {data.category} / <span style={{color:'grey'}}>{data.date}</span>
                                    </div>
                                </div>
                                </>
                            );
                        })
                    }
                </div>

                <div className='box1'>

                    {
                        latestList.filter((item) => item.category === 'poetry' && item.id === 2).map((data) => {
                            return(
                                <>
                                <div id={data.id}>
                                    <img src={data.url} alt='pic' style={{width:'250px',height:'250px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <div style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </div>
                                    <div> {data.oneliner} </div><br/>
                                    <div>
                                        {data.category} / <span style={{color:'grey'}}>{data.date}</span>
                                    </div>
                                </div>
                                </>
                            );
                        })
                    }

                </div>

                <div className='box1'>

                    {
                        latestList.filter((item) => item.category === 'poetry' && item.id === 3).map((data) => {
                            return(
                                <>
                                <div id={data.id}>
                                    <img src={data.url} alt='pic' style={{width:'250px',height:'250px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <div style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </div>
                                    <div> {data.oneliner} </div><br/>
                                    <div>
                                        {data.category} / <span style={{color:'grey'}}>{data.date}</span>
                                    </div>
                                </div>
                                </>
                            );
                        })
                    }

                </div>

                <div className='box1'>

                    {
                        latestList.filter((item) => item.category === 'poetry' && item.id === 4).map((data) => {
                            return(
                                <>
                                <div id={data.id}>
                                    <img src={data.url} alt='pic' style={{width:'250px',height:'250px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <div style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </div>
                                    <div> {data.oneliner} </div><br/>
                                    <div>
                                        {data.category} / <span style={{color:'grey'}}>{data.date}</span>
                                    </div>
                                </div>
                                </>
                            );
                        })
                    }

                </div>
                
            </div>
            <br/><br/>

            <h1 className='theLatest'>Latest Paintings & Photographs</h1>

            <div className='latestBox2'>

                    <div className='box21'>

                        <div className='paintAndPhoto'>
                        {
                            latestList.filter((item) => item.category === 'painting' && item.id === 1).map((data) => {
                                return(
                                    <>
                                    <div id='{data.id}'>
                                        <hr/>
                                        <div>
                                            <img src={data.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{data.title}</h3>
                                            <p>{data.description}</p>
                                            <span>{data.theme} / {data.date}</span>
                                        </div>
                                    </div>
                                    </>
                                );
                            })
                        }
                        </div>

                        <div className='paintAndPhoto'>
                        {
                            latestList.filter((item) => item.category === 'photography' && item.id === 1).map((data) => {
                                return(
                                    <>
                                    <div id='{data.id}'>
                                        <hr/>
                                        <div>
                                            <img src={data.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{data.title}</h3>
                                            <p>{data.description}</p>
                                            <span>{data.theme} / {data.date}</span>
                                        </div>
                                    </div>
                                    </>
                                );
                            })
                        }
                        </div>

                        <div className='paintAndPhoto'>
                        {
                            latestList.filter((item) => item.category === 'painting' && item.id === 2).map((data) => {
                                return(
                                    <>
                                    <div id='{data.id}'>
                                        <hr/>
                                        <div>
                                            <img src={data.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{data.title}</h3>
                                            <p>{data.description}</p>
                                            <span>{data.theme} / {data.date}</span>
                                        </div>
                                    </div>
                                    </>
                                );
                            })
                        }
                        </div>

                    </div>

                    <div className='box22'> advertisement </div>

            </div>
        </>
    );
};

export default TheLatest;