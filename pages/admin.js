import React, { useState, useEffect } from "react";
import { createHotel } from "../actions/hotel";
import Login from "./login";
import AlgoliaPlaces from "algolia-places-react";

const config = {
  appId: process.env.REACT_APP_ALGOLIA_APP_ID,
  apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
  language: "en",
  // countries: ["au"],
};

function admin() {
  const [values, setValues] = useState({
    title: "",
    content: "",
    image: [],
    location: "",
    price: "",
    from: "",
    to: "",
    bed: "",
    type: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(sessionStorage.getItem("auth") ? true : false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(values);
    // console.log(location);
    // const hotelImages = e.target.files;
    // console.log(image);
    let hotelData = new FormData();
    hotelData.append("title", values.title);
    hotelData.append("content", values.content);
    hotelData.append("location", values.location);
    hotelData.append("price", values.price);
    values.image &&
      [...values.image].forEach((img) => hotelData.append("image", img));
    // image && hotelData.append("image", image);
    hotelData.append("from", values.from);
    hotelData.append("to", values.to);
    hotelData.append("bed", values.bed);
    hotelData.append("type", values.type);

    console.log([...hotelData]);

    try {
      let res = await createHotel(sessionStorage.getItem("auth"), hotelData);
      console.log("HOTEL CREATE RES", res);
      // toast.success("New hotel is posted");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log(err);
      // toast.error(err.response.data);
    }
  };

  const handleImageChange = (e) => {
    // console.log(e.target.files[0]);
    // setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {loggedIn ? (
        <div
          className="bg-gradient-to-r from-red-300 via-yellow-50 to-red-400 block
        h-screen items-center justify-center p-4 md:flex"
        >
          <div className="bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-500 w-full md:flex-row">
            {/* logo */}
            <div className="backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2"></div>
            <h1 className="font-medium text-3xl">Welcome to AirBnb</h1>
          </div>
          {/* form */}
          <div className="bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2 rounded-2xl ">
            {/* welcome */}
            <div className="flex flex-col items-center">
              <h1 className="font-medium text-3xl">Welcome back</h1>
              <p className="italic text-lg">Add hotels</p>
            </div>
            {/* inputs */}
            <form className="flex flex-col items-center space-y-4">
              <div className="relative ">
                <label className="button mr-2 bg-gray-200">
                  Image
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    hidden
                    multiple
                  />
                </label>

                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  {/* <FaUser /> */}
                </span>
                <input
                  name="name"
                  onChange={handleChange}
                  className="border border-gray-300 outline placeholder-gray-400 pl-9 py-1 rounded-md transition focus:ring-2 focus:ring-green-300"
                  placeholder="hotels name..."
                  type="text"
                />
              </div>
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  {/* <FaUser /> */}
                </span>
                <input
                  name="title"
                  onChange={handleChange}
                  className="border border-gray-300 outline placeholder-gray-400 pl-9 py-1 rounded-md transition focus:ring-2 text-red-400"
                  placeholder="Title..."
                  type="text"
                />
              </div>
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  {/* <FaUser /> */}
                </span>
                <AlgoliaPlaces
                  className="border border-gray-300 outline placeholder-gray-400 pl-9 py-1 rounded-md transition focus:ring-2 text-red-400"
                  placeholder="location..."
                  defaultValue={location}
                  options={config}
                  onChange={({ suggestion }) =>
                    setValues({ ...values, location: suggestion.value })
                  }
                  style={{ height: "50px" }}
                />
              </div>
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  {/* <FaUser /> */}
                </span>
                <input
                  name="beds"
                  onChange={handleChange}
                  className="border border-gray-300 outline placeholder-gray-400 pl-9 py-1 rounded-md transition focus:ring-2 text-red-400"
                  placeholder="No of beds..."
                  type="number"
                />
              </div>
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  {/* <FaUser /> */}
                </span>
                <input
                  name="type"
                  onChange={handleChange}
                  className="border border-gray-300 outline placeholder-gray-400 pl-9 py-1 rounded-md transition focus:ring-2 text-red-400"
                  placeholder="type of hotel..."
                  type="text"
                />
              </div>
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  {/* <FaUser /> */}
                </span>
                <input
                  name="price"
                  onChange={handleChange}
                  className="border border-gray-300 outline placeholder-gray-400 pl-9 py-1 rounded-md transition focus:ring-2 text-red-400"
                  placeholder="Price..."
                  type="number"
                />
              </div>
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  {/* <FaUser /> */}
                </span>
                <input
                  name="content"
                  onChange={handleChange}
                  className="border border-gray-300 outline placeholder-gray-400 pl-9 py-1 rounded-md transition focus:ring-2 text-red-400"
                  placeholder="content..."
                  type=""
                />
              </div>

              <button
                className="bg-red-400  font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-gray-200 transition hover:bg-green-500"
                type="submit"
                onClick={handleSubmit}
              >
                add hotel
              </button>
            </form>
            {/* links */}
            <div className="flex flex-col items-center"></div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default admin;
