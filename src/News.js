import blockimage from './blockchain.jpg';
import axios from "axios";
import { useState, useEffect } from "react";

const News = () => {


    const [news, setNews] = useState([])


    useEffect(()=>{

        axios({
            url: 'https://newsdata.io/api/1/news',
            params: {
                apiKey: 'pub_8559f7ceb8f94c116e8b0f0795bc5ccc458d',
                language: 'en',
                q: 'crypto',
            }
        }).then((res)=> {
            setNews(res.data.results);
        })


    }, [])


    return (
        <div className="news">
            <h2>Latest Articles</h2>
            {news.map((article)=>{
                return (
                    <article key={article.pubDate}>
                        <div className="news-image-container">
                            <img src={article.image_url 
                                ? article.image_url 
                                : blockimage 
                                } alt="" />
                        </div>
                        <div className="content">
                            <h3>{article.title 
                                ? article.title.length > 75 
                                    ? article.title.substring(0,75) + '...'
                                    : article.title
                                : null}
                            </h3>
                            <a href={article.link ? article.link : null} target="_blank" rel="noreferrer">Read More</a>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default News;