/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';

const Certifications = () => {
  const [certifications, setCertifications] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCertifications, setFilteredCertifications] = useState(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await fetch("/api/certifications");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          setCertifications([]);
          return;
        }

        const json = await response.json();
        setCertifications(json);
      } catch (error) {
        console.error("Error fetching certifications:", error);
        setCertifications([]);
      }
    };

    fetchCertifications();
  }, []);

  useEffect(() => {
    if (!certifications) return;

    // Filter certifications based on searchQuery
    const filtered = certifications.filter((certification) => {
      const { title, content } = certification;
      const searchRegex = new RegExp(searchQuery, 'i');
      return searchRegex.test(title) || searchRegex.test(content);
    });

    setFilteredCertifications(filtered);
  }, [searchQuery, certifications]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl underline underline-offset-4">
              ALL OF MY CERTIFICATIONS
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
                  placeholder="SEARCH HERE FOR CERTIFICATES"
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
                  {/* ... (svg path) ... */}
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-900 min-h-screen">
        <div className="flex-1 overflow-y-auto">
          <div className="dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4 py-8">
            {filteredCertifications &&
              filteredCertifications.map((certification, index) => (
                <article
                  key={index}
                  className="flex transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25 border bg-[#f1f5f9]"
                >
                  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                      dateTime="2022-10-10"
                      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
                    >
                      <span>{certification.year}</span>
                      <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
                      <span>{certification.date}</span>
                    </time>
                  </div>

                  <div className="hidden sm:block sm:basis-56">
                    <img
                      alt="Image of Certificate"
                      src={certification.img}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6">
                      <a href={certification.link}
                        target='_blank'
                        rel='noreferrer'>
                        <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                          {certification.title}
                        </h3>
                      </a>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white dark:text-gray-200">
                        {certification.content}
                      </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                      <a
                        href={certification.link}
                        target='_blank'
                        rel='noreferrer'
                        className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
                      >
                        GO TO LINK
                      </a>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
