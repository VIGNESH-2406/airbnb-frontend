import NextLink from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/dist/client/router";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        {
          email,
          password,
        }
      );

      sessionStorage.setItem("auth", data.token);
      sessionStorage.setItem("user", JSON.stringify(data.user));
      console.log(router.pathname);
      if (router.pathname === "/login") {
        data.user.isAdmin ? router.push("/admin") : router.push("/");
      } else {
        console.log("hey");
        router.push({
          pathname: router.pathname,
          query: router.query,
        });
        location.reload();
      }
      console.log(data);
    } catch (error) {
      window.alert(error.response.data);
    }
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
            <div className="relative">
              <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                {/* <FaUser /> */}
              </span>
              <input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 outline placeholder-gray-400 pl-9 py-1 rounded-md transition focus:ring-2 focus:ring-green-300"
                placeholder="Email..."
                type="text"
              />
            </div>
            <div className="relative">
              <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                {/* <FaUser /> */}
              </span>
              <input
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 outline placeholder-gray-400 pl-9 py-1 rounded-md transition focus:ring-2 text-red-400"
                placeholder="Password..."
                type="password"
              />
            </div>
            <button
              className="bg-red-400  font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-gray-200 transition hover:bg-green-500"
              type="submit"
              onClick={handleSubmit}
            >
              Login now
            </button>
          </form>
          {/* links */}
          <div className="flex flex-col items-center">
            <p className="italic">
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
