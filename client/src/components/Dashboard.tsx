"use client";

import { useState } from "react";
import Link from "next/link";

import { MdSpaceDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";
import { IoMdExit } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";

import DashboardMobile from "./DashboardMobile";
import { handleAdminLogout } from "./actionLogout";

export default function Dashboard() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <nav className="fixed lg:w-64 lg:min-h-screen lg:bg-rose-700 lg:flex lg:flex-col lg:items-center min-[320px]:w-full min-[320px]:h-24 min-[320px]:bg-rose-700 min-[320px]:flex min-[320px]:flex-row min-[320px]:items-center">
        <div className="flex flex-row sm:items-center">
          {/* Put Logo beside h1 */}
          <h1 className="dm-sans lg:mt-16 text-white font-bold text-3xl min-[320px]:mt-0 max-[440px]:ml-4">
            Resourcia^
          </h1>
        </div>

        <section className="lg:mt-8 lg:flex lg:flex-col lg:gap-4 min-[320px]:hidden">
          <Link
            href={"/admin"}
            className="flex flex-row text-white items-center w-52 hover:bg-rose-900 hover:transition rounded-xl p-2 tracking-wide"
          >
            <MdSpaceDashboard size={36} />
            <span className="dm-sans font-semibold text-lg ml-4">
              Dashboard
            </span>
          </Link>
          <Link
            href={"/admin/scan"}
            className="flex flex-row text-white items-center w-52 hover:bg-rose-900 hover:transition rounded-xl p-2 tracking-wide"
          >
            <BsQrCodeScan size={36} />
            <span className="dm-sans font-semibold text-lg ml-4">QR Scan</span>
          </Link>
        </section>

        <section className="lg:mt-auto lg:flex lg:flex-col lg:gap-2 min-[320px]:hidden">
          <div
            className="flex flex-row text-white items-center w-52 hover:bg-rose-900 hover:transition rounded-xl p-2 tracking-wide cursor-pointer"
            onClick={() => handleAdminLogout()}
          >
            <IoMdExit size={36} />
            <p className="dm-sans font-semibold text-lg ml-4">Logout</p>
          </div>
          <div className="border-t border-gray-200 mb-2 mt-2" />
          {login ? (
            <>
              <div className="flex flex-row text-white items-center w-52 mb-4 gap-2 hover:bg-rose-900 hover:transition rounded-xl">
                <div className="w-12 h-12 flex justify-center items-center bg-rose-900 rounded-[50%]">
                  <FaUserAlt size={26} />
                </div>
                <div className="flex flex-col justify-center h-auto">
                  <h4 className="font-semibold">Admin</h4>
                  <p className="text-sm">admin@mail.com</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-row text-white items-center w-52 mb-4 gap-2 hover:bg-rose-900 hover:transition rounded-xl pl-1">
                <Link href={"/login"} className="flex flex-row">
                  <BiLogIn size={26} />
                  <h4 className="ml-2 text-xl">Log in</h4>
                </Link>
              </div>
            </>
          )}
        </section>
        <section className="ml-auto mr-8 text-white lg:hidden">
          <DashboardMobile />
        </section>
      </nav>
    </>
  );
}
