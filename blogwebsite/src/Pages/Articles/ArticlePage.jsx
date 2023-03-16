import React, {useContext} from "react";
import { useLocation } from "react-router-dom";
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
            </div>
            <br/><br/>
            
            <div className='articleBox'>
                
                <div className='articleBox1'>
                    <h1> {Location?.state?.content?.title} </h1>
                    <span> Disha Thakuriya </span><br/>
                    <span style={{color:'orchid'}}> {Location?.state?.content?.date} </span> <br/><br/>
                </div>
                <div className='articleBox2'>
                    <img src= {Location?.state?.content?.url} alt='cover art'></img><br/>
                </div>
                <div className='articleBox3'>
                    <pre> {Location?.state?.content?.poem} </pre> <br/><br/>
                </div>
                <div className='articleBox4'>
                    <hr/>
                    <span style={{color:'orchid'}}> WRITTEN BY</span> <br/><br/>
                    <span style={{color:'purple'}}><strong> Disha Thakuriya </strong></span> <br/><br/>
                    <span style={{color:'orchid'}}> {Location?.state?.content?.date} </span>
                    <hr/><br/><br/>
                </div>
               
            </div>

            <div className='moreArticles'>
                <br/>
                <h2>More from La Luna</h2>
                <hr/><br/><br/>

                <div className='readMore'>

                <div className='readMoreBox'>
                {
                    readMoreList.filter((item) => item.id === Location?.state?.content?.id-2).map((data) => {
                    return(
                        <>
                        <div id={data.id} onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                        <img src={data.url} alt='pic' style={{width:'250px',height:'220px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                        <span style={{color:'grey', textTransform:'uppercase', fontWeight:'bold'}}> {data.category} </span><br/>
                        <span style={{color:'black',fontSize:'20px',fontWeight:'bold'}}> {data.title} </span><br/>
                        <span> By Disha Thakuriya </span><br/>
                        <span style={{color:'grey'}}> {data.date} </span>
                        </div>
                        </>
                    );
                    })
                }
                </div>

                <div className='readMoreBox'>
                {
                    readMoreList.filter((item) => item.id === Location?.state?.content?.id-1).map((data) => {
                    return(
                        <>
                        <div id={data.id} onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                        <img src={data.url} alt='pic' style={{width:'250px',height:'220px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                        <span style={{color:'grey', textTransform:'uppercase', fontWeight:'bold'}}> {data.category} </span><br/>
                        <span style={{color:'black',fontSize:'20px',fontWeight:'bold'}}> {data.title} </span><br/>
                        <span> By Disha Thakuriya </span><br/>
                        <span style={{color:'grey'}}> {data.date} </span>
                        </div>
                        </>
                    );
                    })
                }
                </div>

                <div className='readMoreBox'>
                {
                    readMoreList.filter((item) => item.id === Location?.state?.content?.id+1).map((data) => {
                    return(
                        <>
                        <div id={data.id} onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                        <img src={data.url} alt='pic' style={{width:'250px',height:'220px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                        <span style={{color:'grey', textTransform:'uppercase', fontWeight:'bold'}}> {data.category} </span><br/>
                        <span style={{color:'black',fontSize:'20px',fontWeight:'bold'}}> {data.title} </span><br/>
                        <span> By Disha Thakuriya </span><br/>
                        <span style={{color:'grey'}}> {data.date} </span>
                        </div>
                        </>
                    );
                    })
                }
                </div>

                <div className='readMoreBox'>
                {
                    readMoreList.filter((item) => item.id === Location?.state?.content?.id+2).map((data) => {
                    return(
                        <>
                        <div id={data.id} onClick = {() => toNavigate(data.category, data.id, data)} style={{cursor:'pointer'}}>
                        <img src={data.url} alt='pic' style={{width:'250px',height:'220px',border:'1px solid lightgrey',borderRadius:'15px 15px 0px 0px'}}></img><br/>
                        <span style={{color:'grey', textTransform:'uppercase', fontWeight:'bold'}}> {data.category} </span><br/>
                        <span style={{color:'black',fontSize:'20px',fontWeight:'bold'}}> {data.title} </span><br/>
                        <span> By Disha Thakuriya </span><br/>
                        <span style={{color:'grey'}}> {data.date} </span>
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