import Image from "next/image";

function ImageCard({ img, title, location, searchHotel, id }) {
  return (
    <div
      className="mt-10  py-7 px-2 pr-4 border-b  cursor-pointer hover:opacity-80 
    hover:shadow-lg transition duration-200 ease-out first:border-t "
      onClick={() => {
        searchHotel(id);
      }}
    >
      <div className=" ">
        <div className="ml-12  p-3 relative   h-36 w-36">
          <Image
            className="  rounded-2xl "
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
