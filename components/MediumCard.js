import Image from "next/image";
import { useRouter } from "next/dist/client/router";

function MediumCard({ img, title }) {
  const router = useRouter();

  const allPicsDisplay = () => {
    router.push({
      pathname: "/allPhotos",
      query: {
        // id: id,
        title: title === "Pet allowed" ? undefined : title,
      },
    });
  };

  return (
    <div
      onClick={allPicsDisplay}
      className="cursor-pointer hover:scale-105 
    transform transition duration-300 ease-out"
    >
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
