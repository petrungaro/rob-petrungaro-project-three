import blockimage from './blockchain.jpg';
import axios from "axios";
import { useState, useEffect } from "react";

const News = () => {


    const [news, setNews] = useState([])


    useEffect(()=>{

        axios({
            url: 'https://newsdata.io/api/1/news',
            params: {
                apiKey: 'pub_85557eef57d83c4152792ac26fe62eb29368',
                language: 'en',
                q: 'crypto',
            }
        }).then((res)=> {
            console.log(res.data.results);
            setNews(res.data.results);
        })


    }, [])




    return (




        <div className="news">
            <h2>Latest Articles</h2>

            {news.map((article)=>{


                return (
                    <article>
                        <div className="news-image-container">
                            <img src={article.image_url ? article.image_url : blockimage } alt="" />
                        </div>
                        <div className="content">
                            <h3>{article.title ? article.title : null}</h3>
                            <a href={article.link ? article.link : null} target="_blank">Read More</a>
                        </div>
                    </article>
                )
            })}

        </div>
    )
}

export default News;