import Image from "next/image";

function ImageCard({ price, img, title, location, searchHotel, id }) {
  return (
    <div
      className="mt-10  py-7 px-2 pr-4 border-b  cursor-pointer hover:opacity-80 
    hover:shadow-lg transition duration-200 ease-out first:border-t "
      onClick={() => {
        searchHotel(id, price);
      }}
    >
      <div className=" ">
        <div className="   p-3 relative    md:h-52 md:w-90  ">
          <Image
            className="rounded-2xl  "
            src={img}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h4 className="text-3xl text-red-400 font-serif">{title}</h4>
          <h4 className="text-1xl text-gray-600 ">{location}</h4>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
