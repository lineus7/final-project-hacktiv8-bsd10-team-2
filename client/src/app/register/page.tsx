import Link from "next/link";
import { handleRegister } from "./action";
import Error from "./error";

const page = () => {
  return (
    <>
      <main className="flex pt-20  max-md:pt-0 max-md:flex-col  min-h-screen">
        <div className="w-[45%] max-md:w-full max-md:px-3  bg-[#F1F4F7]">
          <div className="flex flex-col gap-4 max-md:px-3 px-20 pt-[150px] ">
            <p className="text-5xl tracking-tight font-bold">Sign Up</p>
            <p className="font-[300] text-xl">
              Welcome and create account here
            </p>
            <Error />
            <form className="flex pt-5 flex-col gap-6" action={handleRegister}>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="email"
                  required
                  name="email"
                  className="peer h-full w-full border-b border-gray-800 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="fullname"
                  name="fullName"
                  className="peer h-full w-full border-b border-gray-800 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Full Name
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  className="peer h-full w-full border-b border-gray-800 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
              <div className="pt-4 max-md:justify-center">
                <button
                  type="submit"
                  className="text-black w-[30%]   max-md:w-full hover:text-white hover:bg-black duration-200 transition-all hover:ease-in-out text-lg font-bold py-3 px-7 rounded-full bg-[#F1F4F7] border border-black"
                >
                  Sign Up
                </button>
              </div>
              <div className="pb-20 text-lg max-md:text-center pt-2">
                Already have an account?{" "}
                <Link className="underline text-blue-600" href={"/login"}>
                  Login
                </Link>{" "}
                Here
              </div>
            </form>
          </div>
        </div>
        <div className="w-[55%]  max-md:w-full  bg-gray-200 ">
          <img
            className="object-cover h-[750px] w-full relative"
            src="https://i.pinimg.com/564x/8b/d5/22/8bd522c97e8fa5e4ad22a0715fe3ada6.jpg"
          />{" "}
          <div className="px-10 bg-[#FCE354] max-md:hidden absolute h-[250px] z-10 top-[500px] w-[470px] right-20 hover:scale-95 transition-all duration-200 hover:ease-in-out   rounded-xl  flex flex-col gap-4 py-10">
            <h3 className="font-semibold tracking-tight text-2xl">Resourcia</h3>
            <p className="text-5xl font-semibold tracking-tight">
              Shop for a Better World!
            </p>
          </div>
          <div className="px-10 bg-[#34CCFF] max-md:hidden absolute h-[250px] top-[300px] w-[500px] translate-x-7 hover:scale-95 transition-all duration-200 hover:ease-in-out   rounded-xl  flex flex-col gap-4 py-10">
            <h3 className="font-semibold tracking-tight text-2xl">Resourcia</h3>
            <p className="text-5xl font-semibold tracking-tight">
              Shop for a Better World!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
