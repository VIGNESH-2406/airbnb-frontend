import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Header from "../components/Header";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";
// import Search from "./search";

function HotelDescription({ startDate, endDate, location, cardsData }) {
  const router = useRouter();

  console.log(cardsData);
  // const { location, startDate, endDate } = router.query;

  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  return (
    <div>
      <Header />

      <h1 className="  pt-10 mt-4 ml-3 font-extralight text-4xl font-serif">
        Ivy Little Door Cottage (3 BHK) Pool - London
      </h1>

      <div className="">
        <div className="flex flex-wrap gap-10 rounded-lg ">
          {cardsData.map(({ img, title }) => (
            <ImageCard className="rounded-full" img={img} title={title} />
          ))}
        </div>

        <div class="relative">
          <input type="checkbox" id="sortbox" class="hidden absolute" />
          <label
            for="sortbox"
            class="flex items-center space-x-1 cursor-pointer"
          >
            <span class="text-lg">Sort By</span>
            <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </label>

          <div
            id="sortboxmenu"
            class="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10"
          >
            <ul class="block text-right text-gray-900">
              <li>
                <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                  Newest
                </a>
              </li>
              <li>
                <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                  Price: Low to High
                </a>
              </li>
              <li>
                <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                  Price: High to Low
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="font-serif ml-6 mt-20 ">
          <h1 className="text-4xl gap-y-5">Farm stay hosted by Charles</h1>
          <p className="ml-7  gap-y-20"></p>
        </div>

        <div className="font-serif grid gap-y-4  ">
          <h1 className="  ml-4  font-bold "></h1>
          <p className="  ml-7 text-1xl ">
            You’ll have the accommodation on the farm to yourself
          </p>
          <h1 className="  ml-4  font-bold ">Great location</h1>
          <p className="  ml-7 text-1xl ">
            95% of recent guests gave the check-in process a 5-star rating.
          </p>
          <h1 className="  ml-4  font-bold">Great check-in experience</h1>
          <p className="  ml-7  text-1xl ">
            90% of recent guests gave the location a 5-star rating.
          </p>
          <h1 className="  ml-4  font-bold ">Pool</h1>
          <p className="  ml-7 text-1xl ">
            Guests often search for this popular amenity
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HotelDescription;

export async function getServerSideProps() {
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      cardsData,
    },
  };
}
