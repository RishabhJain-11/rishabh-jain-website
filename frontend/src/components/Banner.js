import React from 'react'

const Banner = () => {
    return (
        <>
            <section class="bg-gray-900 text-white">
                <div
                    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
                >
                    <div class="mx-auto max-w-3xl text-center">
                        <h1
                            class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Rishabh Jain

                            <span class="sm:block"> Software Developer. </span>
                        </h1>

                        <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            Crafting digital dreams, one line of code at a time - Unleashing the full potential of technology as a passionate coder, learner, and a software DEVELOPER.
                        </p>

                        <div class="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/about"
                            >
                                About Me
                            </a>

                            <a
                                class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="/links"
                            >
                                Social Links
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner