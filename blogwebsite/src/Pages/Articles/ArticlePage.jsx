import './style_article.css';
import {useParams} from "react-router-dom";
import {blogData} from '../../Utility/ContextAPI';
import {useContext} from 'react';

const ArticlePage = () => {

    const params = useParams();
    const [article] = useContext(blogData);
    
    return(
        <>
            <div className='titlebox'>
                <h2>La Luna</h2>
            </div>
            <br/>
            <div className='contentbox'>
                {
                    article.filter((item) => item.category === params.category && item.id === params.id).map((data) => {
                        <h1>{data.title}</h1>
                    })
                }
            </div>
        </>
    );
}

export default ArticlePage;