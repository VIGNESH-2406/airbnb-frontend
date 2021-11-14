import Image from "next/image";
import { Router, useRouter } from "next/dist/client/router";

function LargeCard({ img, title, description, buttonText }) {
  const router = useRouter();

  const allPicsDisplay = () => {
    router.push("/host");
  };

  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-65">{title}</h3>
        <p>{description}</p>
        <button
          onClick={allPicsDisplay}
          className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
