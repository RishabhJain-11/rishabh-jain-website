import React, { useState, useEffect } from 'react';
import { API_URL } from '../constants/config';

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${API_URL}/articles`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          setArticles([]);
          return;
        }

        const json = await response.json();
        setArticles(json);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (!articles) return;

    // Filter articles based on searchQuery
    const filtered = articles.filter((article) => {
      const { title, content } = article;
      const searchRegex = new RegExp(searchQuery, 'i');
      return searchRegex.test(title) || searchRegex.test(content);
    });

    setFilteredArticles(filtered);
  }, [searchQuery, articles]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl underline underline-offset-4">
              ALL OF MY ARTICLES
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="sm:flex sm:gap-4"
            >
              <div className="sm:flex-1">
                <label htmlFor="search" className="sr-only">
                  SEARCH
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="SEARCH HERE FOR ARTICLE"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> SEARCH </span>

                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-900 min-h-screen">
        <div className="flex-1 overflow-y-auto">
          <div className="dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
            {filteredArticles &&
              filteredArticles.map((article, index) => (
                <a
                  key={index} href={article.link} target='_blank' rel='noreferrer'
                  className="group relative block h-64 sm:h-80 lg:h-96"
                >
                  <span className="absolute inset-0 border-2 border-dashed border-white"></span>

                  <div
                    className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                  >
                    <div
                      className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 sm:h-12 sm:w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">{article.title}</h2>
                    </div>

                    <div
                      className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                    >
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">{article.title}</h3>

                      <p className="mt-4 text-sm sm:text-base">{article.content}</p>

                      <a href={article.link} target='_blank' rel='noreferrer' className="mt-8 font-bold">
                        READ THE BLOG
                      </a>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
