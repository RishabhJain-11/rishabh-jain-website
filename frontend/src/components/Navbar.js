import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../images/logo.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className="bg-white dark:bg-gray-900 relative">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <Link className="block text-teal-600 dark:text-[#facc15] font-bold flex items-center" to="/">
                                <span className="sr-only">Home</span>
                                <img src={img} alt="" className="mr-2 w-10 h-10 rounded-md" />
                                <span>Rishabh Jain</span>
                            </Link>
                        </div>



                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm font-bold">
                                    <li>
                                        <Link
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            to="/projects"
                                        >
                                            Projects
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            to="/certifications"
                                        >
                                            Certifications
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            to="/articles"
                                        >
                                            Articles
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            to="/about"
                                        >
                                            About
                                        </Link>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="https://drive.google.com/drive/folders/1Yeck578RQl8bctB_NnPNSzmJk3scxdzy?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Resume
                                        </a>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            to="/links"
                                        >
                                            Links
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        class="rounded-md bg-[#1d4ed8] px-5 py-2.5 text-sm font-medium font-bold text-white shadow dark:hover:bg-[#1d4ed8]"
                                        href="https://www.linkedin.com/in/rishabhjaincodes/"
                                        target="_blank" rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>

                                    <div class="hidden sm:flex">
                                        <a
                                            class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                            href="https://github.com/RishabhJain-11"
                                            target="_blank" rel="noreferrer"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>

                                <div className="block md:hidden">
                                    <button
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            {/* ... SVG path code ... */}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {menuOpen && (
                        <nav className="md:hidden bg-white dark:bg-gray-900 absolute top-16 left-0 right-0 py-4 z-10">
                            <ul className="flex flex-col items-center gap-6 text-sm">
                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        to="/projects"
                                    >
                                        Projects
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        to="/certifications"
                                    >
                                        Certifications
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        to="/articles"
                                    >
                                        Articles
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        to="/about"
                                    >
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="https://drive.google.com/file/d/1R-kjPve-GKeUuoWP6v36UpMDPLX2s35n/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Resume
                                    </a>
                                </li>

                                <li>
                                    <Link
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        to="/links"
                                    >
                                        Links
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </header>
        </>
    );
};

export default Navbar;
