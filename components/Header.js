import { useState, useEffect } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  SearchCircleIcon,
  SearchIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const logout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("auth");
    router.push("/login");
  };

  const allPicsDisplay = () => {
    router.push("/host");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    /* navigates to next page with fn router.push with a object as pathname:/search 
    and query:{location, etc} and we send query's that we need in the next page thru the url as variables of the current
     page can be sent by both storing in state or carrying a query(via url)*/
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  useEffect(() => {
    setIsAuthenticated(
      sessionStorage.getItem("user") && sessionStorage.getItem("auth")
    );
  });

  return (
    <header className="sticky top-50 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* <h1>I am the Header</h1> */}
      {/* Left side  */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle- searchBar */}
      <div
        className="flex items-center md:border-2 border-opacity-0 rounded-full py-2 focus:outline-white
      md:shadow-sm"
      >
        <input
          className="focus:outline-none focus:ring-0"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="focus:ring-0  custom-outline outline-none  flex-grow pl-5 bg-transparent  text-sm font-semibold  text-gray-900 placeholder-gray-800"
          type="text"
          placeholder={placeholder || "start your search"}
        />
        <SearchIcon
          onClick={search}
          className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>
      {/* Right side */}
      {/* <button
        // onClick={allPicsDisplay}
        className="text-gray-500 w-20 flex flex-grow
         bg-white  shadow-md rounded-full 
         font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
      >
        Become a host
      </button> */}

      <div className="group-hover:text-light-blue-200 flex items-center space-x-4 justify-end text-gray-500">
        <p
          onClick={allPicsDisplay}
          className="hidden md:inline active:bg-gray-50 hover:text-light-blue-800 cursor-pointer  "
        >
          Become a host
        </p>
        <GlobeAltIcon
          onClick={allPicsDisplay}
          className="h-6 cursor-pointer  hover:rounded-t-2xl"
        />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon
            onClick={() => setShowModal(true)}
            className="h-6 mr-5 cursor-pointer "
          />
        </div>
        {showModal ? (
          <>
            <div className=" flex content-end overflow-x-hidden overflow-y-auto fixed mt-96 z-50 outline-none focus:outline-none">
              <div className=" relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="  border-0 rounded-lg shadow-lg relative flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className=" relative p-6 flex-auto">
                    <div className="border-b w-30 pt-2 " />
                    <h3 className="mt-2 text-1xl font-semibold button">
                      Whishlist
                    </h3>
                    <p className="my-4 text-1xl font-semibold  button">
                      Account settings
                    </p>
                    {isAuthenticated ? (
                      <h3
                        onClick={logout}
                        className="text-1xl font-semibold button"
                      >
                        logout
                      </h3>
                    ) : (
                      <h3
                        onClick={() => router.push("/login")}
                        className="text-1xl font-semibold button"
                      >
                        login
                      </h3>
                    )}
                  </div>
                  {/*footer*/}
                  <div className="flex items-end justify-items-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
      {/* If searchInput is true show date range calendar */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow border font-semibold">
              {" "}
              Number of guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl=2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
