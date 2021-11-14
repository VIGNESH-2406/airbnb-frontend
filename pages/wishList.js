// import React from "react";

// import Image from "next/image";
// import Header from "../components/Header";
// import router from "next/";

// export default function WishList() {
//   return (
//     <div className="bg-gray-300">
//       <Header />

//       <h1 class="font-bold text-2xl md:text-4xl lg:text-4xl font-heading text-purple-300 flex justify-center">
//         Create Your Whishlist
//       </h1>

//       <section class="max-w-6xl mt-10 mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-purple-200 rounded-t-2xl ">
//         <div class="text-center pb-12">
//           <h2 class="text-base font-bold text-red-400">
//             We have the best Curated destinations for you
//           </h2>
//           <h1 class="font-bold text-2xl md:text-4xl lg:text-2xl font-heading text-red-400">
//             Check our awesome destinations with best ratings in the world
//           </h1>
//         </div>
//         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
//             <div class="mb-8">
//               <img
//                 class="object-center object-cover rounded-3xl h-60 w-80"
//                 src="https://images.unsplash.com/photo-1579033462043-0f11a7862f7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWlyYm5ifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//                 alt="photo"
//               />
//             </div>
//             <div class="text-center">
//               <p class="text-xl text-gray-700 font-bold mb-2">London</p>
//               <p class="text-base text-red-400 font-normal">Host in Venice</p>
//             </div>
//           </div>
//           <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
//             <div class="mb-8">
//               <img
//                 class="object-center object-cover rounded-3xl h-60 w-80"
//                 src="https://images.unsplash.com/photo-1602699905588-a6c9f58bad2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFpcmJuYnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//                 alt="photo"
//               />
//             </div>
//             <div class="text-center">
//               <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
//               <p class="text-base text-red-400 font-normal">
//                 Host in Johannesburg
//               </p>
//             </div>
//           </div>
//           <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
//             <div class="mb-8">
//               <img
//                 class="object-center object-cover rounded-3xl h-60 w-80 "
//                 src="https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcmJuYnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//                 alt="photo"
//               />
//             </div>
//             <div class="text-center">
//               <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
//               <p class="text-base text-red-400 font-normal">
//                 Host in Philadelphia
//               </p>
//             </div>
//           </div>
//           <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
//             <div class="mb-8">
//               <img
//                 class="object-center object-cover rounded-3xl h-60 w-80"
//                 src="https://images.unsplash.com/photo-1585544314038-a0d3769d0193?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
//                 alt="photo"
//               />
//             </div>
//             <div class="text-center">
//               <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
//               <p class="text-base text-red-400 font-normal">
//                 Host in Mexico City
//               </p>
//             </div>
//           </div>
//           <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
//             <div class="mb-8">
//               <img
//                 class="object-center object-cover rounded-3xl h-60 w-80"
//                 src="https://images.unsplash.com/photo-1543926618-a1616b2b8575?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGFpcmJuYnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//                 alt="photo"
//               />
//             </div>
//             <div class="text-center">
//               <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
//               <p class="text-base text-red-400 font-normal">Host in Italy</p>
//             </div>
//           </div>
//           <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
//             <div class="mb-8">
//               <img
//                 class="object-center object-cover rounded-3xl h-60 w-80"
//                 src="https://images.unsplash.com/photo-1570290870545-277c2f5ad465?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGFpcmJuYnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//                 alt="photo"
//               />
//             </div>
//             <div class="text-center">
//               <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
//               <p class="text-base text-red-400 font-normal">Host in Mumbai</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
