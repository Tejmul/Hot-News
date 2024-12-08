import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./pages/Read";
import NewsDetail from "./components/NewsDetailPage";

const App = () => {
  const [catogery,setCatogery] = useState('general')
  const [lang,setLang] = useState('en')
  const [loading,setLoading] = useState(false)
  const [news,setNews] = useState([])



     const fetchnews = async () =>{
   
    setLoading(true);
    const apiKey = 'f5da248aceadf77e8a751eb4aeb0b82f';
    const encodedCategory = encodeURIComponent(catogery);
    const url = `https://gnews.io/api/v4/search?q=${encodedCategory}&lang=${lang}&country=in&max=10&token=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      console.log("API Response:", data);
      setNews(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error); 
    } finally {
      setLoading(false);
    }
  };
      

  useEffect(()=>{
  fetchnews()
  },[catogery,lang])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read loading={loading} setCatogery={setCatogery} news={news} setLang={setLang} setNews={setNews} setLoading={setLoading} lang={lang} />} />
          <Route path="/read" element={<Read loading={loading} setCatogery={setCatogery} news={news} setLang={setLang} setNews={setNews} setLoading={setLoading} lang={lang}   />} />
          <Route
          path="/news/:id"
          element={
            <NewsDetail
              news={news}
              setCatogery={setCatogery}
              setLang={setLang}
              setNews={setNews}
              setLoading={setLoading}
              lang={lang}
            />
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
