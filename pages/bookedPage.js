import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import HostCards from "../components/HostCards";
import { useRouter } from "next/dist/client/router";

function BookedPage() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-red-300 via-yellow-50 to-red-400 block h-screen items-center justify-center p-4 md:flex">
        {/* login card */}
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
            <p className="italic text-lg">login to your account</p>
          </div>
          {/* inputs */}
          <form className="flex flex-col items-center space-y-4">
            <button
              className="bg-red-400  font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-gray-200 transition hover:bg-green-500"
              onClick={goHome}
            >
              Back Home
            </button>
          </form>
          {/* links */}
          <div className="flex flex-col items-center">
            <p clasName="italic">
              Join us now.
              <NextLink href="/register">
                <a className="ml-1 text-red-400 hover:underline">
                  Register Here
                </a>
              </NextLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookedPage;
