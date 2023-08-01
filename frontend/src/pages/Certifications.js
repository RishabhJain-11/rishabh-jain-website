/* eslint-disable jsx-a11y/img-redundant-alt */
/*

import React from 'react'
import img from '../images/vector2.jpg'

const Certifications = () => {
  return (
    <>
      <div class="bg-gray-50 dark:bg-gray-900">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl underline underline-offset-4">
              ALL OF MY CERTIFICATIONS
            </h2>
          </div>

          <div class="mx-auto mt-8 max-w-xl">
            <form action="#" class="sm:flex sm:gap-4">
              <div class="sm:flex-1">
                <label for="email" class="sr-only">SEARCH</label>

                <input
                  type="email"
                  placeholder="SEARCH HERE FOR CERTIFICATES"
                  class="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span class="text-sm font-medium"> SEARCH </span>

                <svg
                  class="h-5 w-5 rtl:rotate-180"
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
          <div className="dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4 py-8">
            <article
              class="flex transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25 border bg-[#f1f5f9]"
            >
              <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  datetime="2022-10-10"
                  class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
                >
                  <span>2022</span>
                  <span class="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
                  <span>Oct 10</span>
                </time>
              </div>

              <div class="hidden sm:block sm:basis-56">
                <img
                  alt="Guitar"
                  src={img}
                  class="aspect-square h-full w-full object-cover"
                />
              </div>

              <div class="flex flex-1 flex-col justify-between">
                <div
                  class="border-s border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
                >
                  <a href="/">
                    <h3 class="font-bold uppercase text-gray-900 dark:text-white">
                      Finding the right guitar for your style - 5 tips
                    </h3>
                  </a>

                  <p
                    class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>

                <div class="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="/"
                    class="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
                  >
                    GO TO LINK
                  </a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>
    </>
  )
}

export default Certifications

*/

import React, { useState, useEffect } from 'react';

const Certifications = () => {
  const [certifications, setCertifications] = useState(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await fetch("/api/certifications"); // Replace "/api/certifications" with the actual API endpoint for fetching certifications

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          setCertifications([]); // Set certifications to an empty array if the response is not in JSON format
          return;
        }

        const json = await response.json();
        setCertifications(json);
      } catch (error) {
        console.error("Error fetching certifications:", error);
        setCertifications([]); // Set certifications to an empty array on error
      }
    };

    fetchCertifications();
  }, []);

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
            <form action="#" class="sm:flex sm:gap-4">
              <div class="sm:flex-1">
                <label for="email" class="sr-only">SEARCH</label>

                <input
                  type="email"
                  placeholder="SEARCH HERE FOR CERTIFICATES"
                  class="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span class="text-sm font-medium"> SEARCH </span>

                <svg
                  class="h-5 w-5 rtl:rotate-180"
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
          <div className="dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4 py-8">
            {certifications &&
              certifications.map((certification, index) => (
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
