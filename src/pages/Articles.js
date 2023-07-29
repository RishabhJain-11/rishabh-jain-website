import React from 'react'

const Articles = () => {
  return (
    <>
      <div class="bg-gray-50 dark:bg-gray-900">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl underline underline-offset-4">
              ALL OF MY ARTICLES
            </h2>
          </div>

          <div class="mx-auto mt-8 max-w-xl">
            <form action="#" class="sm:flex sm:gap-4">
              <div class="sm:flex-1">
                <label for="email" class="sr-only">Email</label>

                <input
                  type="email"
                  placeholder="SEARCH HERE FOR ARTICLE"
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
          <div className="dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
            <a href="/" class="group relative block h-64 sm:h-80 lg:h-96">
              <span class="absolute inset-0 border-2 border-dashed border-white"></span>

              <div
                class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <div
                  class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
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

                  <h2 class="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
                </div>

                <div
                  class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 "
                >
                  <h3 class="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

                  <p class="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                    praesentium voluptatem omnis atque culpa repellendus.
                  </p>

                  <p class="mt-8 font-bold">READ THE BLOG</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Articles