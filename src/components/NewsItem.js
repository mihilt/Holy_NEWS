import React from 'react';
import '../tailwind/tailwind.css'


const NewsItem = ({article})=>{
    const { title, description, url, urlToImage, publishedAt, source } = article;

    // date formatting
    const published_date = new Date(publishedAt);
    function DateToStr(format){
        var year = format.getFullYear();
        var month = format.getMonth() + 1;
        if(month < 10) month = '0' + month;
        var date = format.getDate();
        if(date < 10) date = '0' + date;
        var hour = format.getHours();
        if(hour < 10) hour = '0' + hour;
        var min = format.getMinutes();
        if(min < 10) min = '0' + min;
        var sec = format.getSeconds();
        if(sec < 10) sec = '0' + sec;

        return year + "/" + month + "/" + date + " " + hour + ":" + min + ":" + sec;
    }

    const formattedDate = DateToStr(published_date);

    return(
        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full">
            <div className="m-4">
                <div className = "">
                    <a href = {url} target = "_blank" rel="noopener noreferrer">
                    {urlToImage ?     
                        <img className="w-full shadow-lg overflow-hidden rounded-lg" src={urlToImage} alt="thumbnail" />
                        :
                        <img className="w-full shadow-lg overflow-hidden rounded-lg" src="images/no-image.png" alt="thumbnail" />
                    }
                    </a>
                </div>

                <div>
                    <h2 className="text-lg font-bold mt-2 hover:underline">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {title}
                        </a>
                    </h2>
                    <div className="text-sm">{description}</div>
                    <br></br>
                    <p className="text-xs font-bold mb-8">{source.name} , {formattedDate}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;