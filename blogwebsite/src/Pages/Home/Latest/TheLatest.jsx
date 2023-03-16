import './style_latest.css';
import React, {useContext} from 'react';
import {blogData} from '../../../Utility/ContextAPI';
import {useNavigate} from 'react-router-dom';

const TheLatest = () => {

    const [latestList] = useContext(blogData);
    const nav = useNavigate();
    const toNavigate = (category, id, selected) => {
        nav(`/article/${category}/${id}`, { state: { content: selected } });
    };

    return(
        <>
        <h1 className='theLatest'> From The Palette </h1>
            <div className='latestBox1'>

                <div className='box1'>

                    {
                        latestList.filter((item) => item.category === 'painting' && item.id === 15).map((data) => {
                            return(
                                <>
                                <div id='{data.id}' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                                    <img src={data.url} alt='pic' style={{width:'275px',height:'220px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <p style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </p>
                                    <p style={{color:'slategray'}}> {data.description} </p>
                                    <p>
                                        {data.category} / <span style={{color:'grey'}}>{data.date}</span>
                                    </p>
                                </div>
                                </>
                            );
                        })
                    }
                </div>

                <div className='box1'>

                    {
                        latestList.filter((item) => item.category === 'photography' && item.id === 8).map((data) => {
                            return(
                                <>
                                <div id='{data.id}' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                                    <img src={data.url} alt='pic' style={{width:'275px',height:'220px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <p style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </p>
                                    <p style={{color:'slategray'}}> {data.description} </p>
                                    <p>
                                        {data.category} / <span style={{color:'grey'}}>{data.date}</span>
                                    </p>
                                </div>
                                </>
                            );
                        })
                    }

                </div>

                <div className='box1'>

                    {
                        latestList.filter((item) => item.category === 'painting' && item.id === 16).map((data) => {
                            return(
                                <>
                                <div id='{data.id}' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                                    <img src={data.url} alt='pic' style={{width:'275px',height:'220px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <p style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </p>
                                    <p style={{color:'slategray'}}> {data.description} </p>
                                    <p>
                                        {data.category} / <span style={{color:'grey'}}>{data.date}</span>
                                    </p>
                                </div>
                                </>
                            );
                        })
                    }

                </div>

                <div className='box1'>

                    {
                        latestList.filter((item) => item.category === 'photography' && item.id === 9).map((data) => {
                            return(
                                <>
                                <div id='{data.id}' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                                    <img src={data.url} alt='pic' style={{width:'275px',height:'220px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                                    <p style={{fontSize:'18px',fontWeight:'bold'}}> {data.title} </p>
                                    <p style={{color:'slategray'}}> {data.description} </p>
                                    <p>
                                        {data.category} / <span style={{color:'grey'}}>{data.date}</span>
                                    </p>
                                </div>
                                </>
                            );
                        })
                    }

                </div>
                
            </div>
            <br/><br/><br/>

            <h1 className='theLatest'>Latest Reviews</h1>

            <div className='latestBox2'>

                    <div className='box21'>

                    <div>
                        {
                            latestList.filter((item) => item.category === 'kdramas' && item.id === 29).map((data) => {
                                return(
                                    <>
                                    <hr/>                                    
                                    <div id='{data.id}' className='reviewList' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={data.url} alt='cover art'></img>
                                        </div>
                                        <div className='reviewDetails'>
                                            <h2>{data.title}</h2>
                                            <p style={{color:'grey',fontSize:'18px'}}>{data.description}</p>
                                            {data.theme} / <span style={{color:'grey'}}> {data.date}</span>
                                        </div>
                                    </div>
                                    </>
                                );
                            })
                        }
                        </div>

                        <div>
                        {
                            latestList.filter((item) => item.category === 'kdramas' && item.id === 30).map((data) => {
                                return(
                                    <>
                                    <hr/>                                    
                                    <div id='{data.id}' className='reviewList' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={data.url} alt='cover art'></img>
                                        </div>
                                        <div className='reviewDetails'>
                                            <h2>{data.title}</h2>
                                            <p style={{color:'grey',fontSize:'18px'}}>{data.description}</p>
                                            {data.theme} / <span style={{color:'grey'}}> {data.date}</span>
                                        </div>
                                    </div>
                                    </>
                                );
                            })
                        }
                        </div>

                        <div>
                        {
                            latestList.filter((item) => item.category === 'kdramas' && item.id === 31).map((data) => {
                                return(
                                    <>
                                    <hr/>
                                    <div id='{data.id}' className='reviewList' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={data.url} alt='cover art'></img>
                                        </div>
                                        <div className='reviewDetails'>
                                            <h2>{data.title}</h2>
                                            <p style={{color:'grey',fontSize:'18px'}}>{data.description}</p>
                                            {data.theme} / <span style={{color:'grey'}}> {data.date}</span>
                                        </div>
                                    </div>
                                    </>
                                );
                            })
                        }
                        </div>

                    </div>

                    <div className='box22'></div>

            </div><br/><br/>

            <div className='latestBox3'>

                <div style={{marginTop:'85px'}}>
                    <div className='box31Ad'></div>
                    <h1>THEME OF THE MONTH</h1>
                    <div className='box31'></div>
                </div>

                <div className='box32'>
                    <h2 style={{textDecoration:'underline',textDecorationColor:'blueviolet',fontSize:'1.8rem'}}>Top Posts</h2>
                    {
                        latestList.filter((item) => item.id === 7).map((data) => {
                            return(
                                <>
                                <div id='{data.id}' className='firstTP' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                                    <img src={data.url} alt='cover art' style={{height:'200px',width:'350px'}}></img>
                                    <div className='tp1'>
                                        <div>
                                            <h3>{data.title}</h3>
                                            <span>{data.category} / {data.date}</span>
                                        </div>
                                        <div>
                                            <h2> {data.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                </>
                            );
                        })
                    }

                    {
                        latestList.filter((item) => item.id === 17).map((data) => {
                            return(
                                <>
                            
                                    <div id='{data.id}' className='tp' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={data.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{data.title}</h3>
                                            <span>{data.theme} / {data.date}</span>
                                        </div>
                                        <div>
                                            <h2> {data.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        latestList.filter((item) => item.id === 25).map((data) => {
                            return(
                                <>
                            
                                    <div id='{data.id}' className='tp' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={data.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{data.title}</h3>
                                            <span>{data.theme} / {data.date}</span>
                                        </div>
                                        <div>
                                            <h2> {data.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }

                    {
                        latestList.filter((item) => item.id === 29).map((data) => {
                            return(
                                <>
                            
                                    <div id='{data.id}' className='tp' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                                        <div>
                                            <img src={data.url} alt='cover art'></img>
                                        </div>
                                        <div>
                                            <h3>{data.title}</h3>
                                            <span>{data.theme} / {data.date}</span>
                                        </div>
                                        <div>
                                            <h2> {data.featureID} </h2>
                                        </div>
                                    </div>
                                    <hr/>   
                                
                                </>
                            );
                        })
                    }
                </div>
            </div>
            <br/><br/>

            <h1 className='theLatest'> Latest Poetry </h1> <br/>
            <hr style={{width:'1270px'}}></hr> <br/>
            <div className='latestBox4'>
                
                {
                    latestList.filter((item) => item.category === 'poetry' && item.id === 1).map((data) => {
                    return(
                        <>
                        <div id='{data.id}' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                            <h2 style={{color:'purple'}}> {data.title} </h2>
                            <p style={{fontSize:'18px'}}> {data.description} </p>
                            <br/>
                            <span style={{textTransform:'uppercase'}}> {data.theme} </span>
                             / <span style={{color:'grey',textTransform:'uppercase'}}> {data.date} </span>
                        </div>
                        <hr/>
                        </>
                    );
                    })
                }

                {
                    latestList.filter((item) => item.category === 'poetry' && item.id === 2).map((data) => {
                    return(
                        <>
                        <div id='{data.id}' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                            <h2 style={{color:'purple'}}> {data.title} </h2>
                            <p style={{fontSize:'18px'}}> {data.description} </p>
                            <br/>
                            <span style={{textTransform:'uppercase'}}> {data.theme} </span>
                             / <span style={{color:'grey',textTransform:'uppercase'}}> {data.date} </span>
                        </div>
                        <hr/>
                        </>
                    );
                    })
                }

                {
                    latestList.filter((item) => item.category === 'poetry' && item.id === 3).map((data) => {
                    return(
                        <>
                        <div id='{data.id}' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                            <h2 style={{color:'purple'}}> {data.title} </h2>
                            <p style={{fontSize:'18px'}}> {data.description} </p>
                            <br/>
                            <span style={{textTransform:'uppercase'}}> {data.theme} </span>
                             / <span style={{color:'grey',textTransform:'uppercase'}}> {data.date} </span>
                        </div>
                        <hr/>
                        </>
                    );
                    })
                }

                {
                    latestList.filter((item) => item.category === 'poetry' && item.id === 4).map((data) => {
                    return(
                        <>
                        <div id='{data.id}' onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                            <h2 style={{color:'purple'}}> {data.title} </h2>
                            <p style={{fontSize:'18px'}}> {data.description} </p>
                            <br/>
                            <span style={{textTransform:'uppercase'}}> {data.theme} </span>
                             / <span style={{color:'grey',textTransform:'uppercase'}}> {data.date} </span>
                        </div>
                        </>
                    );
                    })
                }

            </div>
            <hr style={{width:'1270px'}}></hr> <br/><br/><br/><br/>
        </>
    );
};

export default TheLatest;