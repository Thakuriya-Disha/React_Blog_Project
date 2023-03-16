import React, {useContext} from "react";
import { useLocation, Link } from "react-router-dom";
import './style_article.css';
import {blogData} from '../../Utility/ContextAPI';
import {useNavigate} from 'react-router-dom';

const ArticlePage = () => {
    
    const Location = useLocation();
    const [readMoreList] = useContext(blogData);
    const nav = useNavigate();
    const toNavigate = (category, id, selected) => {
        nav(`/article/${category}/${id}`, { state: { content: selected } });
    };

    return(
        <>
            <div className='titlebox'>
                <h2>La Luna</h2>
                <div className='theNav'>
                    <Link to={"/"} style={{textDecoration:'none',color:'violet'}}> <h3>HOME</h3> </Link>
                    <Link to={"/poetry"} style={{textDecoration:'none',color:'violet'}}> <h3>POETRY</h3> </Link>
                    <Link to={"/music"} style={{textDecoration:'none',color:'violet'}}> <h3>MUSIC</h3> </Link>
                    <Link to={"/paintings"} style={{textDecoration:'none',color:'violet'}}> <h3>PAINTINGS</h3> </Link>
                    <Link to={"/kdramas"} style={{textDecoration:'none',color:'violet'}}> <h3>K-DRAMAS</h3> </Link>
                    <Link to={"/photography"} style={{textDecoration:'none',color:'violet'}}> <h3>PHOTOGRAPHY</h3> </Link>
                </div>
            </div>
            <br/><br/>
            
            <div className='articleBox'>
                <div className='articleBoxCol1'>
                    <div className='articleBox1'>
                        <h1> {Location?.state?.content?.title} </h1>
                        <span> Disha Thakuriya </span><br/>
                        <span style={{color:'orchid'}}> {Location?.state?.content?.date} </span> <br/><br/>
                    </div>
                    <div className='articleBox2'>
                        <img src= {Location?.state?.content?.url} alt='cover art'></img><br/><br/>
                    </div>
                    <div className='articleBox4'>
                        <hr/>
                        <span style={{color:'orchid'}}> WRITTEN BY</span> <br/><br/>
                        <span style={{color:'purple'}}><strong> Disha Thakuriya </strong></span> <br/><br/>
                        <span style={{color:'orchid'}}> {Location?.state?.content?.date} </span>
                        <hr/><br/><br/>
                    </div>
                </div>
                <div className='articleBoxCol2'>
                    <div className='articleBox3'>
                        <pre> {Location?.state?.content?.poem} </pre> <br/><br/>
                    </div>
                </div>
            </div>

            <div className='moreArticles'>
                <br/>
                <h2>More from La Luna</h2>
                <hr/><br/><br/>

                <div className='readMore'>

                <div className='readMoreBox'>
                {
                    readMoreList.filter((item) => item.id === 7).map((data) => {
                    return(
                    <>
                    <div id={data.id} onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                        <span style={{color:'darkorchid', textTransform:'uppercase', fontWeight:'bold'}}> {data.category} </span><br/>
                        <img src={data.url} alt='pic' style={{width:'250px',height:'220px'}}></img><br/>
                        <span style={{color:'purple',fontSize:'21px',fontWeight:'bold'}}> {data.title} </span><br/>
                        <span> By Disha Thakuriya </span><br/><br/>
                        <span style={{color:'purple'}}> {data.date} </span> <br/>
                    </div>
                    </>
                    );
                    })
                }
                </div>

                <div className='readMoreBox'>
                {
                    readMoreList.filter((item) => item.id === 21).map((data) => {
                    return(
                    <>
                     <div id={data.id} onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                        <span style={{color:'darkorchid', textTransform:'uppercase', fontWeight:'bold'}}> {data.category} </span><br/>
                        <img src={data.url} alt='pic' style={{width:'250px',height:'220px'}}></img><br/>
                        <span style={{color:'purple',fontSize:'21px',fontWeight:'bold'}}> {data.title} </span><br/>
                        <span> By Disha Thakuriya </span><br/><br/>
                        <span style={{color:'purple'}}> {data.date} </span> <br/>
                    </div>
                    </>
                    );
                    })
                }
                </div>

                <div className='readMoreBox'>
                {
                    readMoreList.filter((item) => item.id === 28).map((data) => {
                    return(
                    <>
                     <div id={data.id} onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                        <span style={{color:'darkorchid', textTransform:'uppercase', fontWeight:'bold'}}> {data.category} </span><br/>
                        <img src={data.url} alt='pic' style={{width:'250px',height:'220px'}}></img><br/>
                        <span style={{color:'purple',fontSize:'21px',fontWeight:'bold'}}> {data.title} </span><br/>
                        <span> By Disha Thakuriya </span><br/><br/>
                        <span style={{color:'purple'}}> {data.date} </span> <br/>
                    </div>
                    </>
                    );
                    })
                }
                </div>

                <div className='readMoreBox'>
                {
                    readMoreList.filter((item) => item.id === 35).map((data) => {
                    return(
                    <>
                    <div id={data.id} onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                        <span style={{color:'darkorchid', textTransform:'uppercase', fontWeight:'bold'}}> {data.category} </span><br/>
                        <img src={data.url} alt='pic' style={{width:'250px',height:'220px'}}></img><br/>
                        <span style={{color:'purple',fontSize:'21px',fontWeight:'bold'}}> {data.title} </span><br/>
                        <span> By Disha Thakuriya </span><br/><br/>
                        <span style={{color:'purple'}}> {data.date} </span> <br/>
                    </div>
                    </>
                    );
                    })
                }
                </div>

                </div>
            </div>
        </>
    );
};

export default ArticlePage;