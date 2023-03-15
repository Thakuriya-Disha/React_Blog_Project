import React from "react";
import { useLocation } from "react-router-dom";
import './style_article.css';

const ArticlePage = () => {
    
    const Location = useLocation();
    let count=0;
    const clapCount = () => {
        count++;
    }

    return(
        <>
            <div className='titlebox'>
                <h2>La Luna</h2>
            </div>
            <br/><br/>
            
            <div className='articleBox'>
                
                <div className='articleBox1'>
                    <h1> {Location?.state?.content?.title} </h1>
                    <img src='../../Utility/media/beauty.png'></img>
                    <span><strong>Disha Thakuriya</strong></span><br/>
                    <span style={{color:'grey'}}> {Location?.state?.content?.date} </span> <br/>

                </div>
                <div className='articleBox2'>
                    <img src= {Location?.state?.content?.url}></img>
                </div>
                <br/>
                <div className='articleBox3'>
                    <pre> {Location?.state?.content?.poem} </pre>
                </div>
                <div className='articleBox4'>
                    Theme: <span style={{color:'slategrey',backgroundColor:'lightgrey'}}> {Location?.state?.content?.theme} </span>
                    <br/> <img src='../../Utility/media/rythm.svg' onClick={clapCount}></img> <span> {count} </span>
                </div>
                <div className='articleBox5'>
                    <hr/>
                    <img src='../../Utility/media/beauty.png'></img>
                    <span style={{color:'grey'}}> WRITTEN BY</span> <br/>
                    <span> Disha Thakuriya </span> <br/>
                    <span style={{color:'grey'}}> {Location?.state?.content?.date} </span>
                    <hr/>
                </div>
               
            </div>
        </>
    );
};

export default ArticlePage;