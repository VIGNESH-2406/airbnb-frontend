import React from "react";
import Image from "next/image";
// import { format } from "date-fns";
import ImageCard from "../components/ImageCard";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { bookHotel } from "../actions/hotel";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";

function checkoutPage() {
  const [showModal, setShowModal] = React.useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [paid, setPaid] = useState(false);
  // const [showInput, setShowInput] = useState(false);

  // const displayInput = () => {
  //   if (!showInput) {
  //     setShowInput("true");
  //   }
  // };

  const addPayPalScript = async () => {
    if (window.paypal) {
      setSdkReady(true);
      return;
    }
    const { data: clientId } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/config/paypal`
    );
    console.log(clientId);
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };
  useEffect(() => {
    addPayPalScript();
  }, [paid]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    if (paymentResult.status === "COMPLETED") {
      console.log("hey");
      setShowModal(true);
      setPaid((state) => setPaid(!state));
    }
    if (paid) {
      console.log("abey");
      book();
      setShowModal(true);
    }
  };

  const router = useRouter();
  const { id, price, startDate, endDate, location, noOfGuests, noOfDays } =
    router.query;

  console.log(startDate);

  const book = () => {
    bookHotel({
      token: sessionStorage.getItem("auth"),
      hotel: id,
    });
  };

  // const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  // const formattedEndDate = format(new Date(endDate), "dd MMM yy");

  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var sd = new Date(startDate);
  var ed = new Date(endDate);
  const formattedStartDate = sd.toLocaleDateString("en-US", options);
  const formattedEndDate = ed.toLocaleDateString("en-US", options);
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <div
        className="sticky top-50 z-50 bg-white shadow-md p-5 md:px-10"
        onClick={() => router.push("/")}
        className="relative mt-4 ml-5 flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="border-b  w-30 pt-5" />
      <section class="relative pt-12 bg-blueGray-50 ml-10">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <h3 class="text-3xl font-semibold">Request to book</h3>

              <div className="border-b  w-20 pt-5" />

              <h3 class="text-3xl font-semibold pl-3 py-5">
                Your trip to {location}
              </h3>
              <h6 class="text-2xl font-semibold pl-3 py-3"> Dates </h6>
              <p class="mt-1 pl-6 text-lg leading-relaxed text-blueGray-500">
                {range}
              </p>
              <div>
                <h6 class="text-2xl font-semibold pl-3 py-4">Guests</h6>
                <p class="mt-1 pl-6 text-lg leading-relaxed text-blueGray-500">
                  {noOfGuests}
                </p>
              </div>
              <h3 class="text-3xl font-semibold pl-3 py-5">Pay with</h3>
              <li class="py-2">
                <div class="flex items-center">
                  <div class="relative">
                    <h3 class="py-5 text-2xl font-semibold">
                      Your reservation won’t be confirmed until the host accepts
                      your request (within 24 hours).
                    </h3>
                    <div>
                      {sdkReady ? (
                        <PayPalButton
                          className="z-0"
                          amount={price}
                          onSuccess={successPaymentHandler}
                        />
                      ) : (
                        <span>loading...</span>
                      )}

                      {showModal ? (
                        <>
                          <div className=" justify-center mb-96 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-6xl">
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="bg-red-400  flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                  <h3 className="text-3xl font-semibold">
                                    Booking Confirmed
                                  </h3>
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                  >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      ×
                                    </span>
                                  </button>
                                </div>

                                <div className="relative p-6 flex-auto">
                                  <p className="my-4 text-blueGray-500 text-lg font-semibold leading-relaxed">
                                    Thank you for your booking via Airbnb , your
                                    host will be awaiting you on {range}. Hope
                                    you enjoy your vacay with Airbnb.
                                  </p>
                                </div>

                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                  >
                                    Close
                                  </button>
                                  <button
                                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase 
                    text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none 
                    focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                  >
                                    Save Changes
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
                </div>
              </li>
              <h3 class="text-2xl font-semibold mt-14">
                Required for your trip
              </h3>
              <div className="border-b  w-20 pt-5" />
              <h6 class="text-2xl font-semibold pl-3 py-4 px-5 ">
                Message the host
              </h6>
              <p class="mt-1 pl-6 text-lg leading-relaxed text-blueGray-500">
                let the host know why you're traveling and when you'll check-in
              </p>
              <button className=" ml-5   bg-gray-200 mr-5 gap-x-3.5 button text-red-400 ">
                Add
              </button>
              <h6 class="text-2xl font-semibold pl-3 py-4">Phone Number</h6>
              <p class="mt-1 pl-6 text-lg leading-relaxed text-blueGray-500">
                Add and confirm your phone number to get trip updates.
              </p>
              <button
                // onClick={displayInput}
                className=" ml-5 border-3  bg-gray-200 mr-5 gap-x-3.5 button text-red-400 "
              >
                Add
              </button>

              <ul class="list-none mt-6">
                <li class="py-2">
                  <h3 class="text-2xl font-semibold">Cancellation policy</h3>
                </li>
                <div className="border-b  w-20 pt-5" />
                <p class="mt-3 pl-6 text-sm leading-relaxed text-blueGray-500">
                  Non-refundable: Cancel before check-in and get back only the
                  cleaning fee, if you've paid one. Learn more
                </p>
                <p class="mt-1 pl-6 text-sm leading-relaxed text-blueGray-500">
                  Our Extenuating Circumstances policy does not cover travel
                  disruptions caused by COVID-19. Learn more
                </p>
                <li className="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i class="fab fa-html5"></i>
                      </span>
                    </div>
                    <div></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="max-w-lg mx-auto">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="text-gray-900 font-bold text-1xl tracking-tight mb-2">
                    Price details
                  </h5>
                </a>
                <p class="font-normal text-gray-700 mb-3">
                  {price / noOfDays}/night
                </p>
                <p class="font-normal text-gray-700 mb-3">service fee</p>
                <h1 className="font-bold ">Total(INR) {price}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default checkoutPage;
