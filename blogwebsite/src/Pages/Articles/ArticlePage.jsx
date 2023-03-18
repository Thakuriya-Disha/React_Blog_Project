import React, {useContext,useState} from "react";
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
    const [clap,setClaps] = useState(0);
    const handleClaps = () => {
        setClaps(clap+1);
    }

    return(
        <div>
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
                        <span style={{color:'orchid'}}> {Location?.state?.content?.date} </span><br/>
                        <img
                        src='https://static.vecteezy.com/system/resources/previews/003/775/685/original/social-media-icons-set-facebook-instagram-twitter-logos-free-vector.jpg'
                        alt='social media' style={{width:'100px',height:'50px',cursor:'pointer'}}/>
                        <br/>
                    </div>
                    <div className='articleBox2'>
                        <img src= {Location?.state?.content?.url} alt='cover art'></img>
                        <p style={{backgroundColor:'plum',padding:'8px'}}> {Location?.state?.content?.description} </p>
                        <h3 style={{color:'purple',display:'inline',fontSize:'1.5rem'}}> {clap} </h3> <br/>
                        <img src='https://static.thenounproject.com/png/2345410-200.png' alt='clap'
                        style={{width:'40px',height:'40px',cursor:'pointer'}} onClick={handleClaps}/> &nbsp; &nbsp; &nbsp;
                        <img src='https://img.freepik.com/free-icon/share_318-507736.jpg' alt='share' style={{width:'30px',height:'30px',cursor:'pointer'}} />
                    </div>
                    <div className='articleBox4'>
                        <br/><hr/>
                        <img alt='writer' style={{width:'65px',height:'65px'}}
                        src='data:image/png;base64,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'/>
                        <br/><span style={{color:'purple'}}><strong> Disha Thakuriya </strong></span><br/><br/>
                        <span style={{color:'orchid'}}> {Location?.state?.content?.date} </span>
                        <hr/><br/><br/>
                    </div>
                </div>
                <div className='articleBoxCol2'>
                    <div className='articleBox3'>
                        <pre> {Location?.state?.content?.article} </pre> <br/><br/>
                    </div>
                </div>
            </div>

            <div className='moreArticles'>
                <br/>
                <h2>More from La Luna</h2>
                <hr/><br/><br/>

                <div className='readMoreBox'>
                {
                    readMoreList.filter((item) => item.id === 7 || item.id === 21 || item.id === 28 || item.id === 35).map((data) => {
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
    );
};

export default ArticlePage;