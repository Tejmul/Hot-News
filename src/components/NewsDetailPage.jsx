import React from "react";
import { useParams } from "react-router-dom";
import CryptoJS from "crypto-js";
import ReadNavbar from "./ReadNavbar";

const NewsDetail = ({ news, setCatogery, setLang, setNews, setLoading, lang }) => {
  const { id } = useParams();

  const newsItem = news.find((item) => {
    const uniqueId = CryptoJS.MD5(item.title + item.source.name).toString();
    return uniqueId === id;
  });

  if (!newsItem) {
    return <div className="flex justify-center items-center h-screen">News not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <ReadNavbar 
        setCatogery={setCatogery} 
        setLang={setLang} 
        setNews={setNews} 
        setLoading={setLoading} 
        lang={lang} 
      />
      <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 mt-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 p-4">{newsItem.title}</h1>
          <img
            className="w-full max-w-full h-auto rounded-lg shadow-md mb-6"
            src={
              newsItem.image
                ? newsItem.image
                : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
            }
            alt={newsItem.title}
          />
          <div className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 p-4">
            <p>{newsItem.content}</p>
          </div>
          <a
            className="inline-block text-indigo-600 hover:text-indigo-900 text-sm sm:text-base lg:text-lg font-medium p-4"
            href={newsItem.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more at {newsItem.source.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
