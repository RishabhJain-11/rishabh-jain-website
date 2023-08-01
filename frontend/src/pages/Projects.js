import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          setProjects([]);
          return;
        }

        const json = await response.json();
        setProjects(json);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (!projects) return;

    // Filter projects based on searchQuery
    const filtered = projects.filter((project) => {
      const { title } = project;
      const searchRegex = new RegExp(searchQuery, 'i');
      return searchRegex.test(title)
    });

    setFilteredProjects(filtered);
  }, [searchQuery, projects]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl underline underline-offset-4">
              ALL OF MY PROJECTS
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
                  placeholder="SEARCH HERE FOR PROJECTS"
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
          <div className="dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 py-8">
            {filteredProjects &&
              filteredProjects.map((project, index) => (
                <article
                  key={index}
                  className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
                >
                  <div className="rounded-[10px] bg-white p-4 !pt-20 dark:bg-gray-900 sm:p-6">
                    <time
                      datetime="2022-10-10"
                      className="block text-xs text-gray-500 dark:text-gray-400"
                    >
                      {project.date}
                    </time>

                    <a href={project.link}>
                      <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </a>

                    <div className="mt-4 flex flex-wrap gap-1">
                      <span
                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                      >
                        {project.tags}
                      </span>
                      <div>
                        <a href={project.glink} target='_blank' rel='noreferrer' className="underline underline-offset-8 offset-8 mt-8 ml-10 mr-10 text-white  font-bold">
                          Github Code Link
                        </a>
                        <a href={project.llink} target='_blank' rel='noreferrer' className="underline underline-offset-8 mt-8 mr-10 font-bold  text-white">
                          Website Link
                        </a>
                      </div>
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

export default Projects;
