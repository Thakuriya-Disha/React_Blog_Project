import React from "react";
import { useLocation } from "react-router-dom";
import './style_article.css';

const ArticlePage = () => {
    
    const Location = useLocation();

    return(
        <>
            <div className='titlebox'>
                <h2>La Luna</h2>
            </div>
            <br/><br/>
            
            <div className='articleBox'>
                
                <div className='articleBox1'>
                    <h1> {Location?.state?.content?.title} </h1>
                    <span><strong>Disha Thakuriya</strong></span><br/>
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
                <h3>More from La Luna</h3>
                <hr/>
                <div></div>
            </div>
        </>
    );
};

export default ArticlePage;