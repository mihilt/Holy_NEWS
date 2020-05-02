import React, {useState, useEffect} from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.component';
import '../tailwind/tailwind.css'


const NewsList = ({ category }) =>{
    const [articles,setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=1f03b404edf94345935944647d375df6`
                );
                setArticles(response.data.articles);
            } catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    if(loading){
        return(
        <SpinnerOverlay className = "">
            <SpinnerContainer />
        </SpinnerOverlay>
        );
    }

    if(!articles){
        return null;
    }

    return(
        <div className="flex flex-wrap max-w-screen-xl m-auto w-10/12 mt-4">
            {articles.map(article=>(
                <NewsItem key = {article.url} article = {article}/>
            ))}
        </div>
    );
};

export default NewsList;