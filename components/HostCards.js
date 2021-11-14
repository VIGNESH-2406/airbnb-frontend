import React from "react";
import Image from "next/image";

export default function hostCards() {
  return (
    <div>
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-black rounded-t-2xl ">
        <div class="text-center pb-12">
          <h2 class="text-base font-bold text-red-400">
            We have the best equipment
          </h2>
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-red-400">
            Check our awesome team members
          </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                class="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
              <p class="text-base text-red-400 font-normal">Host in Venice</p>
            </div>
          </div>
          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                class="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
              <p class="text-base text-red-400 font-normal">
                Host in Johannesburg
              </p>
            </div>
          </div>
          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                class="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
              <p class="text-base text-red-400 font-normal">
                Host in Philadelphia
              </p>
            </div>
          </div>
          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                class="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
              <p class="text-base text-red-400 font-normal">
                Host in Mexico City
              </p>
            </div>
          </div>
          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                class="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
              <p class="text-base text-red-400 font-normal">Host in Italy</p>
            </div>
          </div>
          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img
                class="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="photo"
              />
            </div>
            <div class="text-center">
              <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
              <p class="text-base text-red-400 font-normal">Host in Mumbai</p>
            </div>
          </div>
        </div>
      </section>
  
    </div>
  );
}
