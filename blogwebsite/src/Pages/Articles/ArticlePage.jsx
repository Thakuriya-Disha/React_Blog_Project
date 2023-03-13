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
            
            <div style={{textAlign:'center'}}>
                <h1> {Location?.state?.content?.title} </h1>
                <h2> {Location?.state?.content?.category} </h2>
                <h3> {Location?.state?.content?.description} </h3>
            </div>
        </>
    );
};

export default ArticlePage;