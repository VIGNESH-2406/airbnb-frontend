import React from "react";
import { Router, useRouter } from "next/dist/client/router";
import OnlyPhotosCard from "../components/OnlyPhotosCard";
import image from "next/image";
import Header from "../components/Header";

function onlyPhotos({ cardsData }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <h1 className="ml-10 text-red-400 font-bold text-2xl">Photo Gallery</h1>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {cardsData.map(({ _id, name, data }) => (
          <OnlyPhotosCard
            className=" ml-10"
            img={`${process.env.NEXT_PUBLIC_API_URL}/hotel/images/${id}/${_id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default onlyPhotos;

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(id, process.env.API);
  const cardsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/images/${id}/`
  ).then((res) => res.json());
  return {
    props: {
      cardsData,
    },
  };
}
