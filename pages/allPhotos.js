import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "../components/ImageCard";
import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";

// import Modal from "../components/Modal"
function allPhotos({ searchResults }) {
  const router = useRouter();
  const { title } = router.query;

  let pattern = "";
  if (title != undefined) {
    pattern = new RegExp(`^${title.split(" ")[0]}`, "gi");
  }

  const [hotels, setHotels] = useState(
    title != undefined
      ? searchResults.filter((h) => pattern.test(h.type))
      : searchResults
  );

  console.log(title);
  console.log(hotels);
  // const [type, setType] = useState({ title });

  const searchHotel = (id) => {
    console.log(id, "data");
    router.push({
      pathname: "/xtraInfo",
      query: {
        id: id,
        location: location,
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      },
    });
  };

  const filterHotel = (type) => {
    setHotels(searchResults.filter((hotel) => hotel.type == type));
    // console.log(searchResults);
  };

  return (
    <div>
      <Header />
      <div
        // onClick={<Modal />}
        className=" color  hidden lg:inline-flex ml-5 mt-5 space-x-3 text-gray-800 whitespace-nowrap"
      >
        {/* <p Onclick={allPicsDisplay} className="button">
          Types of place
        </p> */}
        <p
          onClick={() => filterHotel("entire homes")}
          className="button bg-gray-300"
        >
          Entire home
        </p>
        <p
          onClick={() => filterHotel("unique homes")}
          className="button bg-gray-300"
        >
          Unique homes
        </p>
        <p
          onClick={() => filterHotel("Beachfront")}
          className="button bg-gray-300"
        >
          Beach front
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {hotels.map(({ image, location, title, content, star, _id }) => (
          <ImageCard
            searchHotel={searchHotel}
            key={_id}
            id={_id}
            img={`${process.env.NEXT_PUBLIC_API_URL}/hotel/image/${_id}`}
            location={location}
            title={title}
          />
        ))}
      </div>
    </div>
  );
}

export default allPhotos;

export async function getServerSideProps() {
  const searchResults = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotels`
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
