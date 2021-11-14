import React from "react";
import Image from "next/image";
import ImageCard from "../components/ImageCard";
import { useRouter } from "next/dist/client/router";

function allPhotos({ cardsData }) {
  const router = useRouter();

  const back = () => {
    router.push("/xtraInfo");
  };

  return (
    <div>
      <div
        className="sticky top-50 z-50 bg-white shadow-md p-5 md:px-10"
        onClick={() => router.push("/")}
        className="relative mt-4 ml-5 flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="ml-6 py-10">
        <button
          onClick={back}
          className=" mt-15 border-3  bg-gray-200 mr-5 gap-x-3.5 button text-red-400 "
        >
          Back
        </button>
      </div>

      <div className="flex flex-wrap gap-10 ml-5 px-10 py-20 rounded-2xl">
        {cardsData.map(({ image, _id, title, location }) => (
          <ImageCard
            img={`${process.env.NEXT_PUBLIC_API_URL}/hotel/image/${_id}`}
            title={title}
            location={location}
          />
        ))}
      </div>
    </div>
  );
}

export default allPhotos;

export async function getServerSideProps() {
  const cardsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotels`
  ).then((res) => res.json());

  return {
    props: {
      cardsData,
    },
  };
}
