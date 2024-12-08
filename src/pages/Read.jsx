import React, { useState } from "react";
import ReadNavbar from "../components/ReadNavbar";
import Footer from "../components/Footer";
import News from "../components/News";
import Pagination from "../components/Pagination";

const Read = ({
  loading,
  setCatogery,
  news,
  setLang,
  setNews,
  setLoading,
  lang,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  // Calculate total pages based on number of news items
  const totalPages = Math.ceil(news.length / itemsPerPage);

  // Pagination logic
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate current news items to display based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <ReadNavbar
        setCatogery={setCatogery}
        setLang={setLang}
        setNews={setNews}
        setLoading={setLoading}
        lang={lang}
      />
      <News loading={loading} news={currentNews} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}
      />
      <Footer />
    </>
  );
};

export default Read;
