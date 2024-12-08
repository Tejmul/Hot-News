import React, { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.png";

const catogeries = [
  "India",
  "Bussiness",
  "Politics",
  "Sports",
  "Technology",
  "Startups",
  "Entertainment",
  "Hatke",
  "International",
  "Automobile",
  "Science",
];

const ReadNavbar = ({ setCatogery, setLang, setNews , setLoading,lang  }) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(true);
  const [searchData, setSearchData] = useState('');
  
  const searchNews = async () =>{
   
    setLoading(true)
    let url = ` https://newsapi.org/v2/everything?q=${searchData}&language=${lang}&latest&apiKey=b87a6c0823fb40b78e1691c3d4820f90` 
  
  
      try {
        const response = await fetch(url)
        const data = await response.json()
        setNews(data.articles)
        setLoading(false)
    

      } catch (error) {
        
           console.log(error)
           setLoading(true)
      }
                
      }   
      


  const handleCLick = (catogery) => {
    setCatogery(catogery);
    setShow(!show);
  };

  const handleEnglish = (lang) => {
    setLang(lang);
    setActive(true);
    setShow(!show)
  };
  const handleHindi = (lang) => {
    setLang(lang);
    setActive(false);
    setShow(!show)
  };


const search = (e) =>{
  e.preventDefault()
  searchNews()
}





  return (
    <>
    {/* ------------------------------------------- Sidebar -------------------------------------------- */}
      <div className=" flex overflow-hidden relative  z-30 bg-blue-200 ">
        <div
          className={` -translate-x-full fixed top-0 left-0 bg-[#303036] text-white w-56 h-full overflow-y-auto transition-transform transform ${
            show ? " translate-x-0" : ""
          }  ease-in-out duration-300`}
          id="sidebar"
        >
          <div className="p-4">
            <div className="flex mt-6 mb-5 justify-center ">
              <button
                onClick={() => handleEnglish("en")}
                className={`${
                  active ? " bg-[#808290]" : ""
                } border px-3 py-1  `}
              >
                English
              </button>
              <button
                onClick={() => handleHindi("hi")}
                className={`${
                  active ? "" : "bg-[#808290]"
                } border px-4 py-1 border-l-0 `}
              >
                hindi
              </button>
              {/* For another Language */}
            </div>

            <hr className=" mb-3" />

            <span className=" text-sm text-[#7d8190]">Categories</span>
            <ul className="mt-3">
              {catogeries.map((catogery) => {
                return (
                  <li className=" font-[200] hover:bg-[#44444D]" key={catogery}>
                    <NavLink
                      onClick={() => handleCLick(catogery)}
                      to="/read"
                      className={({ isActive }) =>
                        `${isActive ? "bg-[#808290" : ""} pl-6 pr-7 py-2 block`
                      }
                    >
                      {catogery}
                    </NavLink>
                  </li>
                );
              })}

              <BiX
                size={30}
                onClick={() => {
                  setShow(!show);
                }}
                className=" cursor-pointer absolute top-1 right-2"
              />
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------------------------------ Navbar ------------------------------------------- */}

      <div className="header sticky top-0 bg-slate-50 shadow-lg ">
        <nav className="shadow-lg md:h-24 h-32 flex md:justify-between justify-around items-center px-6 flex-wrap ">
        
            <div className=" flex items-center gap-2 ">
              <BiMenu
                className=" cursor-pointer"
                size={30}
                onClick={() => {
                  setShow(!show);
                }}
              />
              <span className=" hidden md:block">Menu</span>
            </div>
          

          <div className="flex justify-center items-center">
            <img src={logo} alt="" className=" h-10" />
            <NavLink to="/">
              <h1 className=" text-2xl text-center">"Hot News"</h1>
            </NavLink>
          </div>
          <form action="" onSubmit={search}>
          <div class="relative w-[300px] mb-3 md:mb-0 ">
            
            <input
              class=" flex-1 appearance-none border-2 pl-4 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none  focus:border-[#f44336] focus:shadow-outline text-sm"
              id="username"
              type="text"
              placeholder="Search News..."
              onChange={(e)=>setSearchData(e.target.value)}
           
            
          
            />

            <div class="absolute right-4 cursor-pointer inset-y-0 flex items-center">
              <svg  onClick={search}
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          </form>
        </nav>
      </div>
    </>
  );
};

export default ReadNavbar;
