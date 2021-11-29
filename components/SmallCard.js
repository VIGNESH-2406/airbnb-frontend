import Image from "next/image";
import { useRouter } from "next/dist/client/router";

function SmallCard({ img, location, distance }) {
  const router = useRouter();

  const allPicsDisplay = () => {
    router.push("/allPhotos");
  };

  return (
    <div
      onClick={allPicsDisplay}
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl
    cursor-pointer hover:bg-gray-100 
    hover:scale-105 transition transform
     duration-200 ease-out"
    >
      {/* left side(image) */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right side (location and distance) */}
      <div className="">
        <h2>{location}</h2>
        {/* <h3 className="text-gray-500">{distance}</h3> */}
      </div>
    </div>
  );
}

export default SmallCard;
