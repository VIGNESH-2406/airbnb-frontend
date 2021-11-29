import Image from "next/image";

function OnlyPhotosCard({ img }) {
  return (
    <div className="ml-5  ">
      <div className="flex justify-around ml-5 rounded-full h-60 w-96 relative ">
        <Image
          className="rounded-2xl flex flex-wrap "
          src={img}
          layout="fill"
          objectFit="fit"
        />
      </div>
    </div>
  );
}

export default OnlyPhotosCard;
