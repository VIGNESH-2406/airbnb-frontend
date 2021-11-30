import image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/dist/client/router";
import { DateRangePicker } from "react-date-range";
import Header from "../components/Header";
import XtraCard from "../components/XtraCard";
import Footer from "../components/Footer";
import allPhotos from "./allPhotos";
import { useState } from "react";

function test({ cardsData, hotelData, startDate, endDate }) {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const [strtDate, setStrtDate] = useState(
    new Date(router.query.startDate.split("%").join(":"))
  );
  const [ndDate, setNdDate] = useState(
    new Date(router.query.endDate.split("%").join(":"))
  );

  const selectionRange = {
    startDate: strtDate,
    endDate: ndDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStrtDate(ranges.selection.startDate);
    setNdDate(ranges.selection.endDate);
  };

  const noOfDays = (startDate, endDate) => {
    let diff =
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
      (1000 * 3600 * 24);
    // setPrice(diff > 0 ? price * diff : price);

    return diff <= 0 ? 1 : diff;
  };
  let { id } = router.query;

  const bookie = () => {
    let { id, price, startDate, endDate, location, noOfGuests } = router.query;
    let diff = noOfDays(startDate, endDate);
    router.push({
      pathname: "/checkoutPage",
      query: {
        id: id,
        location: location,
        price: price,
        startDate: strtDate.toISOString(),
        endDate: ndDate.toISOString(),
        noOfGuests,
        noOfDays: diff,
      },
    });
  };

  const onlyPics = () => {
    router.push({
      pathname: "/onlyPhotos",
      query: {
        id,
      },
    });
  };

  return (
    <div>
      <Header />

      <div onClick={onlyPics} className="flex flex-wrap gap-10 rounded-lg ml-5">
        {cardsData.map(({ _id, name }) => (
          <XtraCard
            className="rounded-full h-40  "
            img={`${process.env.NEXT_PUBLIC_API_URL}/hotel/images/${id}/${_id}`}
          />
        ))}
      </div>

      <section className="relative pt-12 bg-blueGray-50">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <div className="flex flex-row-reverse  ">
              <div className="flex flex-col-reverse pl-5 mt-10 ">
                <div>
                  <button
                    onClick={bookie}
                    className="text-2xl mt-5 font-semibold  ml-5  bg-gray-200 mr-5 gap-x-3.5 button text-red-400 "
                  >
                    Check Availability and Book
                  </button>
                </div>
                <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={["#FD5b61"]}
                  onChange={handleSelect}
                />
              </div>
            </div>
          </div>

          <div class="w-full md:w-5/12 ml-auto mr-auto px-4 mt-5 ">
            <div class="md:pr-12">
              <h3 class="text-3xl font-semibold">
                Farm stay hosted by Charles
              </h3>
              <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                8 guests · 3 bedrooms · 3 beds · 3 bathrooms
              </p>

              <h1 className="  font-bold ">About Hotel</h1>

              <div className="  mt-5 ">{hotelData.content}</div>

              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i class="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="  font-bold ">Entire home</h4>
                      <p>
                        You’ll have the accommodation on the farm to yourself
                      </p>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i class="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h1 className="  font-bold ">Pool</h1>
                      <h4 class="text-blueGray-500">
                        Guests often look for this popular amenity
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i class="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h1 className="  font-bold ">Great location</h1>
                      <h4 class="text-blueGray-500">
                        {" "}
                        90% of recent guests gave the location a 5-star rating.
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <button
              className=" ml-5 border-3 mt-10   bg-gray-300 mr-5 button text-black-100 text-2xl "
              onClick={() => setShowModal(true)}
            >
              show all amenities
            </button>
            {showModal ? (
              <>
                <div className="mt-10 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}

                      <div className="relative p-6 flex-auto">
                        <h3 className="text-red-700  text-3xl font-semibold my-3">
                          What this place offers
                        </h3>{" "}
                        <div className="border-b w-30 pt-2" />
                        <h3 className="text-2xl font-semibold">
                          Entertainment
                        </h3>
                        <p className="my-4 text-1xl">
                          TV with standard cable/satellite
                        </p>
                        <p className="my-4 text-1xl">Wifi</p>
                        <h3 className="text-3xl font-semibold">
                          Parking facility
                        </h3>
                        <p className="my-4 text-1xl">
                          Free parking on premises
                        </p>
                        <h3 className="text-2xl font-semibold">SERVICES</h3>
                        <p className="my-4 text-1xl">BBQ grill kit</p>
                        <p className="my-4 text-1xl">
                          Luggage drop-off allowed
                        </p>
                        <p className="my-4 text-1xl">Smoking-Toking allowed</p>
                        <p className="my-4 text-1xl">Long-term stays allowed</p>
                        <p className="my-4 text-1xl">First aid kit</p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-purple-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default test;

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(id, process.env.API);
  const cardsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/images/${id}/`
  ).then((res) => res.json());

  const hotelData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hotel/${id}`
  ).then((res) => res.json());
  return {
    props: {
      cardsData,
      hotelData,
    },
  };
}
