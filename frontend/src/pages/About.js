import React from 'react'
import img from '../images/IMG2.jpg'
import { API_URL } from '../constants/config';

const About = () => {
  return (
    <>
      <section
        class="overflow-hidden bg-gray-50 dark:bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center"
      >
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
          >
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              Software Developer, Machine Learning & Artificial Intelligence practitioner.
            </h2>

            <p class="hidden text-gray-500 dark:text-gray-400 md:mt-4 md:block">
              🌟 Welcome to the extraordinary world of technology where innovation knows no bounds! I am a seasoned software practitioner with a major in Information Technology, specializing in Frontend Development, Backend Development, and the captivating realms of Machine Learning and Artificial Intelligence. My passion for constant improvement drives me to excel in hackathons and contribute to open-source projects, constantly pushing the boundaries of what's possible. With an insatiable thirst for success, I orchestrate symphonies of code, crafting seamless user experiences on the frontend and engineering robust backend systems. Step into the future with me as I unravel the mysteries of AI and Machine Learning, always striving to reach higher peaks of achievement. Join my captivating journey of relentless ambition and cutting-edge technology! 🔥🚀
            </p>

            <div class="mt-4 md:mt-8">
              <a
                href="/"
                class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Coding Links
              </a>
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src={img}
          class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>

      <div class="space-y-4 dark:bg-gray-900 p-10">
        <details
          class="group border-s-4 border-green-500 bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
              Tell me about your education details.
            </h2>

            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
            I have completed my under graduation in DYPCOE, Akurdi which affiliated to Pune University, in which I have majored in Information Technology.
          </p>
        </details>

        <details
          class="group border-s-4 border-green-500 bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
              Describe a time when you had to learn a new programming language or technology quickly. How did you approach the learning process, and what was the outcome?
            </h2>

            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
            I have learnt multiple skills quite quickly using online sources and with the invent of AI tools, it made my learning as fast as I can, as I can search the most insight full prompts quickly.
          </p>
        </details>
        <details
          class="group border-s-4 border-green-500 bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
              How do you stay updated on the latest trends and technologies in software development?
            </h2>

            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
            I usually stay updated via blogs on various tech blog platforms such as Dev.to, Medium, Hashnode etc, and also via Twitter feed which helps me to get info about new things in tech.
          </p>
        </details>
        <details
          class="group border-s-4 border-green-500 bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
              How do you handle constructive criticism and feedback on your code?
            </h2>

            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
            I try to take note of every constructive criticism and advice as it helps me to solve issues related to my code development and also taking the notes of each makes me remember the advice for a longer period time.
          </p>
        </details>
        <details
          class="group border-s-4 border-green-500 bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
              What do you consider your greatest achievement as a software developer?
            </h2>

            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
            Making real world projects and deploying or working as Open Source contributor helps me understand problems that people are facing and working on that. Hackathons also help me to work on industry level project, these all can be considered as my achievements.
          </p>
        </details>
      </div>
    </>
  )
}

export default About