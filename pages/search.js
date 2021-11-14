import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import map from "../components/Map";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import { useState } from "react";
// const router = useRouter();

function Search({ searchResults }) {
  // const [price, setPrice] = useState(0);

  const router = useRouter();

  const allPicsDisplay = () => {
    router.push("/allPhotos");
  };

  const { location, startDate, endDate, noOfGuests } = router.query;

  /* here as we know we need create a fn to show the calculated total price by the number of
     days selected in the previous page */
  const totalPrice = (price) => {
    let diff =
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
      (1000 * 3600 * 24);
    // setPrice(diff > 0 ? price * diff : price);
    return diff > 0 ? price * diff : price;
  };

  /* with searchHotel fn we'll be navigated to xtraInfo page with the query id, etc 
and the calculated price which is done by totalPrice fn and also total price is diplayed in this 
place as well the manipulated state is carried to next page  */

  const searchHotel = (id, price) => {
    console.log(id, price, "data");
    router.push({
      pathname: "/xtraInfo",
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

  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  console.log(router.query);

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests `} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays- {range} for {noOfGuests} guests
          </p>

          <h1 className=" font-extralight text-4xl font-serif mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className=" color  hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p Onclick={allPicsDisplay} className="button">
              Types of place
            </p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More filters</p>
          </div>

          {/* here map fn is applied on all the data retrieved from backend with the api route call made with getServerSideProps */}

          <div className="flex flex-col">
            {searchResults.map(
              ({ image, location, title, content, star, price, _id }) => (
                <InfoCard
                  searchHotel={searchHotel}
                  key={_id}
                  id={_id}
                  img={`${process.env.NEXT_PUBLIC_API_URL}/hotel/image/${_id}`}
                  location={location}
                  title={title}
                  description={content}
                  star={star}
                  price={price}
                  total={totalPrice(price)}
                />
              )
            )}
          </div>
        </section>

        {/* <section className="min-w-[600px] ">
          <Map searchResults={searchResults} />
        </section> */}
      </main>

      <Footer />
    </div>
  );
}

export default Search;

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
