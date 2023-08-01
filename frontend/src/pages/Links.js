// import React from 'react'
// import { useState, useEffect } from 'react';

// const Links = () => {
//   const [links, setLinks] = useState(null);

//   useEffect(() => {
//     const fetchResources = async () => {
//       const response = await fetch("/api/links");
//       const json = await response.json();

//       if (response.ok) {
//         setLinks(json);
//       }
//     }
//     fetchResources();
//   }, []);

//   return (
//     <>
//       <div class="bg-gray-50 dark:bg-gray-900">
//         <div class="p-8 md:p-12 lg:px-16 lg:py-24">
//           <div class="mx-auto max-w-lg text-center">
//             <h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl underline underline-offset-4">
//               LINKS AND CODING PROFILES
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col bg-gray-900 min-h-screen">
//         <div className="flex-1 overflow-y-auto">
//           <div className="dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 py-8">
//             <article
//               className="hover:animate-background rounded-xl bg-gradient-to-r from-violet-200 to-pink-200 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
//             >
//               <div class="rounded-[10px] bg-white p-4 dark:bg-gray-900 sm:p-6">
//                 <a href={links.link}>
//                   <h3 class=" text-lg font-medium underline text-gray-900 dark:text-white">
//                     {links.name}
//                   </h3>
//                 </a>
//               </div>
//             </article>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default Links


import React, { useState, useEffect } from 'react';

const Links = () => {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      const response = await fetch("/api/links");
      const json = await response.json();

      if (response.ok) {
        setLinks(json);
      }
    }
    fetchResources();
  }, []);

  return (
    <>
      <div class="bg-gray-50 dark:bg-gray-900">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl underline underline-offset-4">
              LINKS AND CODING PROFILES
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-gray-900 min-h-screen">
        <div className="flex-1 overflow-y-auto">
          <div className="dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 py-8">
            {links && links.map((link, index) => (
              <article
                key={index}
                className="hover:animate-background rounded-xl bg-gradient-to-r from-violet-200 to-pink-200 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
              >
                <div class="rounded-[10px] bg-white p-4 dark:bg-gray-900 sm:p-6">
                  <a href={link.link}>
                    <h3 class="text-lg font-medium underline text-gray-900 dark:text-white">
                      {link.name}
                    </h3>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Links;
