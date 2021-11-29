import Image from "next/image";
import { useRouter } from "next/dist/client/router";

function Banner() {
  const router = useRouter();
  let { id, price, startDate, endDate, location, noOfGuests } = router.query;

  const allPicsDisplay = () => {
    router.push({
      pathname: "/allPhotos",
      query: {
        id: id,
        location: location,
        price: price,
        startDate: startDate,
        endDate: endDate,
        noOfGuests,
      },
    });
  };

  return (
    <div className="relative h-[300px] sm:h-[400] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="fit"
      />
      <div className="absolute top-1/2 w-full text-center">
        <h1 className=" text-2xl sm:text-lg font-semibold text-purple-900 ">
          Not sure where to go? perfect.
        </h1>

        <button
          onClick={allPicsDisplay}
          className="text-purple-900
         bg-white px-10 py-4 shadow-md rounded-full 
         font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;

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
