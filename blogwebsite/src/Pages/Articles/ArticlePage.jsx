import React from "react";
import { useLocation } from "react-router-dom";
import './style_article.css';

const ArticlePage = () => {
    
    const Location = useLocation();
    console.log("location: ", Location);

    return(
        <>
            <div className='titlebox'>
                <h2>La Luna</h2>
            </div>
            <br/><br/>
            
            <div className='articleBox'>
                <h1> {Location?.state?.content?.title} </h1>
                <div>
                    <img src='../../Utility/media/beauty.png' style={{width:'130px',height:'130px'}}></img>
                    <span><strong>Disha Thakuriya</strong></span><br/>
                    <span style={{color:'grey'}}> {Location?.state?.content?.date} </span>
                </div>
                <div>
                    <img src= {Location?.state?.content?.url} style={{width:'677px',height:'370px'}}></img>
                </div>
                <br/>
                <div>
                    <pre> {Location?.state?.content?.poem} </pre>
                </div>
                <div>
                    Theme: <span> {Location?.state?.content?.theme} </span>
                </div>
               
            </div>
        </>
    );
};

export default ArticlePage;