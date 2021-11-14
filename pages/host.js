import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import HostCards from "../components/HostCards";
function Host() {
  return (
    <div>
      <Header />
      <div>
        <Image
          className="bg-black"
          src="https://links.papareact.com/0fm"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-1/2 w-full text-center">
        <h1 className=" font-bold text-5xl ">Hosting Makes AirBnb, AirBnb</h1>

        <div>
          <button
            className="text-Black-500
         bg-white px-10 py-4 shadow-md rounded-full 
         font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
          >
            {" "}
            Try Hosting{" "}
          </button>
        </div>
        <HostCards />
      </div>
    </div>
  );
}

export default Host;
