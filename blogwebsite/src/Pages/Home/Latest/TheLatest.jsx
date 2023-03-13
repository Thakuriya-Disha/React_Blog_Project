import './style_latest.css';
import React, {useContext} from 'react';
import {blogData} from '../../../Utility/ContextAPI';

const TheLatest = () => {

    const [latestList] = useContext(blogData);

    return(
        <>
        <h1 className='theLatest'> From The Palette </h1>
            <div className='latestBox1'>

                <div className='box1'>

                    {
                        latestList.filter((item) => item.category === 'painting' && item.id === 1).map((data) => {
                            return(
                                <>
                                <div id={data.id}>
                                    <img src={data.url} alt='pic' style={{width:'250px',height:'250px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <div style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </div>
                                    <div> {data.description} </div><br/>
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
                        latestList.filter((item) => item.category === 'photography' && item.id === 1).map((data) => {
                            return(
                                <>
                                <div id={data.id}>
                                    <img src={data.url} alt='pic' style={{width:'250px',height:'250px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <div style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </div>
                                    <div> {data.description} </div><br/>
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
                        latestList.filter((item) => item.category === 'painting' && item.id === 2).map((data) => {
                            return(
                                <>
                                <div id={data.id}>
                                    <img src={data.url} alt='pic' style={{width:'250px',height:'250px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <div style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </div>
                                    <div> {data.description} </div><br/>
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
                        latestList.filter((item) => item.category === 'photography' && item.id === 2).map((data) => {
                            return(
                                <>
                                <div id={data.id}>
                                    <img src={data.url} alt='pic' style={{width:'250px',height:'250px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <div style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </div>
                                    <div> {data.description} </div><br/>
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

            <h1 className='theLatest'>Latest Reviews</h1>

            <div className='latestBox2'>

                    <div className='box21'>

                        <div>
                        {
                            latestList.filter((item) => item.category === 'movie' && item.id === 1).map((data) => {
                                return(
                                    <>
                                    <hr/>
                                    <div id='{data.id}' className='reviewList'>
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

                        <div>
                        {
                            latestList.filter((item) => item.category === 'music' && item.id === 1).map((data) => {
                                return(
                                    <>
                                    <hr/>                                    
                                    <div id='{data.id}' className='reviewList'>
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

                        <div>
                        {
                            latestList.filter((item) => item.category === 'movie' && item.id === 2).map((data) => {
                                return(
                                    <>
                                    <hr/>
                                    <div id='{data.id}' className='reviewList'>
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

                    <div className='box22'></div>

            </div>
            <br/>

            <div className='latestBox3'>

                        <div className='box31'></div>
                        <div></div>

            </div>
        </>
    );
};

export default TheLatest;