import React from 'react'
import img from '../images/img1.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer class="bg-white dark:bg-gray-900 lg:grid lg:grid-cols-5">
                <div class="relative block h-32 lg:col-span-2 lg:h-full">
                    <img
                        src={img}
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                            <p>
                                <span
                                    class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
                                >
                                    MAIL ME
                                </span>
                                <a href="mailto:im.rishabhmjain@gmail.com" type='email' class="block text-2xl font-medium text-gray-900 hover:opacity-75 dark:text-white sm:text-3xl">
                                    im.rishabhmjain@gmail.com
                                </a>



                            </p>

                            <ul class="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                                <li>"Code your dreams into reality; with each line, you shape the future."</li>
                                <hr />
                                <li>Why do programmers prefer dark mode?
                                    Because light attracts bugs!</li>
                            </ul>

                            <ul class="mt-8 flex gap-6">
                               

                                <li>
                                    <a
                                        href="https://twitter.com/jainRishabhTwt"
                                        rel="noreferrer"
                                        target="_blank"
                                        class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                    >
                                        <span class="sr-only">Twitter</span>

                                        <svg
                                            class="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://github.com/RishabhJain-11"
                                        rel="noreferrer"
                                        target="_blank"
                                        class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                    >
                                        <span class="sr-only">GitHub</span>

                                        <svg
                                            class="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://drive.google.com/drive/folders/1SdGnqsxUz5dRgOu3VNwqTKKQThPg_9jm?usp=sharing"
                                        rel="noreferrer"
                                        target="_blank"
                                        class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                    >
                                        <span class="sr-only">All My Repos</span>

                                        <svg
                                            class="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <p class="font-medium text-gray-900 dark:text-white">Quick Links</p>

                                <ul class="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a
                                            href="https://drive.google.com/drive/folders/1Yeck578RQl8bctB_NnPNSzmJk3scxdzy?usp=sharing"
                                            class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                            target='_blank'
                                            rel="noreferrer"
                                        >
                                            Resume
                                        </a>
                                    </li>

                                    <li>
                                        <Link
                                            to="/projects"
                                            class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                        >
                                            Projects
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/links"
                                            class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                        >
                                            Coding Profiles
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/articles"
                                            class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                        >
                                            Articles
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/certifications"
                                            class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                        >
                                            Certifications
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p class="font-medium text-gray-900 dark:text-white">Rishabh Jain</p>

                                <ul class="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link
                                            to="/about"
                                            class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                        >
                                            About Me
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/links"
                                            class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                        >
                                            Contact Me
                                        </Link>
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.showwcase.com/rishabhcodes"
                                            target='_blank'
                                            rel="noreferrer"
                                            class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                        >
                                            Showwcase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
                        <div class="sm:flex sm:items-center sm:justify-between">
                            <ul class="flex flex-wrap gap-4 text-xs">
                                <li>
                                    <Link
                                        to="/"
                                        class="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/"
                                        class="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/"
                                        class="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                                    >
                                        Cookies
                                    </Link>
                                </li>
                            </ul>
                            <p class="mt-8 text-xs text-gray-500 dark:text-gray-400 sm:mt-0">
                                &copy; 2023. The Rishabh Jain Company. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

