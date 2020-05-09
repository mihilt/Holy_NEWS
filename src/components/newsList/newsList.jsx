import React from "react";
import axios from "axios";

import NewsItem from "../newsItem/newsItem";
import usePromise from "../lib/usePromise";

import {
    SpinnerContainer,
    SpinnerOverlay,
} from "../withSpinner/withSpinner.component";

import "../../tailwind/tailwind.css";

const NewsList = ({ category, country }) => {
    const [loading, response, error] = usePromise(() => {
        const categoryQuery = category === "all" ? "" : `&category=${category}`;
        const countryQuery = `country=${country}`;

        return axios.get(
            `http://newsapi.org/v2/top-headlines?${countryQuery}${categoryQuery}&pageSize=24&apiKey=1f03b404edf94345935944647d375df6`
        );
    }, [category, country]);

    if (loading) {
        return (
            <SpinnerOverlay className="">
                <SpinnerContainer />
            </SpinnerOverlay>
        );
    }

    if (!response) {
        return null;
    }

    if (error) {
        return <p>에러 발생!</p>;
    }

    const { articles } = response.data;

    return (
        <div className="flex flex-wrap max-w-screen-xl m-auto w-10/12 mt-4">
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </div>
    );
};

export default NewsList;
