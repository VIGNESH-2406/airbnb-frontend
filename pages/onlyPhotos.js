import React from "react";
import { Router, useRouter } from "next/dist/client/router";
import OnlyPhotosCard from "../components/OnlyPhotosCard";
import image from "next/image";

function onlyPhotos({ cardsData }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>only photos CARD</h1>

      <div className="h-50 w-52 ">
        {cardsData.map(({ _id, name, data }) => (
          <OnlyPhotosCard
            className=""
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
