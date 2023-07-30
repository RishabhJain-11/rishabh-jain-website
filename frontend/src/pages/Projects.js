import React from 'react'

const Projects = () => {
  return (
    <>
      <div class="bg-gray-50 dark:bg-gray-900">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl underline underline-offset-4">
              ALL OF MY PROJECTS
            </h2>
          </div>

          <div class="mx-auto mt-8 max-w-xl">
            <form action="#" class="sm:flex sm:gap-4">
              <div class="sm:flex-1">
                <label for="email" class="sr-only">SEARCH</label>

                <input
                  type="email"
                  placeholder="SEARCH HERE FOR PROJECTS"
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
          <div className="dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 py-8">
            <article
              className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
            >
              <div class="rounded-[10px] bg-white p-4 !pt-20 dark:bg-gray-900 sm:p-6">
                <time
                  datetime="2022-10-10"
                  class="block text-xs text-gray-500 dark:text-gray-400"
                >
                  10th Oct 2022
                </time>

                <a href="/">
                  <h3 class="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                    How to center an element using JavaScript and jQuery
                  </h3>
                </a>

                <div class="mt-4 flex flex-wrap gap-1">
                  <span
                    class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                  >
                    Snippet
                  </span>

                  <span
                    class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                  >
                    JavaScript
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects