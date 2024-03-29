"use client";

import AichatBot from "@/components/AichatBot";
import { motion } from "framer-motion";
import Link from "next/link";
import { FcDonate } from "react-icons/fc";

export default function Home() {
  return (
    <main className=" min-h-screen md:h-100vh md:pb-40 pt-32 max-md:pt-20 pb-32  ">
      <div className="flex relative justify-between max-md:flex-col max-md:gap-6 max-md:px-5 px-20">
        <div className="w-[57%] max-md:w-full">
          <div className="px-10 max-md:px-5 bg-[#34CCFF] hover:scale-95 transition-all duration-200 hover:ease-in-out rounded-xl flex flex-col pb-12 max-md:pb-5  gap-10 py-10">
            <motion.p
              className="text-6xl max-md:text-5xl  tracking-tight font-semibold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Transforming Food Waste into Rewards: Donate, Earn, and Redeem!
            </motion.p>
            <motion.h3
              className="font-semibold tracking-tighter text-3xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Resourcia
            </motion.h3>

            <motion.p
              className="text-2xl  tracking-tight font-semibold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Join 140+ million helping each other get there.
            </motion.p>
            <motion.div
              className="flex gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={"/register"}
                className="text-black w-[30%] text-center max-md:w-2/3 hover:text-white hover:bg-black duration-200 transition-all hover:ease-in-out text-lg font-bold py-3 px-7 rounded-full bg-yellow-500"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="w-[40%] max-md:w-full">
          <div
            style={{
              backgroundImage: `url("https://i.pinimg.com/474x/df/02/7d/df027df685bfdaba19756551209389c6.jpg")`,
              backgroundSize: "cover",
            }}
            className="px-10 max-md:px-5 bg-transparent h-full text-white  hover:scale-95 transition-all duration-200 hover:ease-in-out  relative rounded-xl  flex flex-col gap-4 py-10"
          >
            <h3 className="font-semibold tracking-tight text-2xl">Resourcia</h3>
            <p className="text-6xl font-semibold tracking-tight">
              Donate, Earn, and Shop for a Better World!
            </p>
            <div>
              <button className="text-white mt-8 text-xl hover:underline w-auto px-12 h-14 bg-black rounded-full">
                Learn more
              </button>
            </div>
            <div className="text-8xl -bottom-10 absolute max-[440px]:hidden">
              😄 😆
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-12 gap-5 px-24 max-md:px-6 max-md:grid-cols-1 ">
        <div className="px-10 bg-[#1DE592] h-full  hover:scale-95 transition-all duration-200 hover:ease-in-out  relative rounded-xl  flex flex-col gap-4 py-10">
          <h3 className="font-semibold tracking-tight text-2xl">
            Waste Donation
          </h3>
          <p className="text-5xl font-semibold tracking-tight max-[440px]:text-4xl">
            Resourcia accepts various types of food waste to donate.
          </p>
          <div>
            <button className="text-black pt-8 text-2xl hover:underline ">
              Learn more
            </button>
          </div>
          {/* <div className="text-8xl -bottom-10  absolute">😄 😆</div> */}
        </div>
        <div className="px-10 bg-[#91D1FC] h-full  hover:scale-95 transition-all duration-200 hover:ease-in-out  relative rounded-xl  flex flex-col gap-4 py-10">
          <h3 className="font-semibold tracking-tight text-2xl">
            Points System
          </h3>
          <p className="text-5xl font-semibold tracking-tight max-[440px]:text-4xl">
            You earn points based on weight of the donated items.
          </p>
          <div>
            <button className="text-black pt-8 text-2xl hover:underline ">
              Learn more
            </button>
          </div>
        </div>
        {/* <div className="px-10 bg-[#FCE354] h-full  hover:scale-95 transition-all duration-200 hover:ease-in-out  relative rounded-xl  flex flex-col gap-4 py-10">
          <h3 className="font-semibold tracking-tight text-2xl">Resourcia</h3>
          <p className="text-6xl font-semibold tracking-tight">
            Shop for a Better World!
          </p>
          <div>
            <button className="text-black pt-8 text-2xl hover:underline ">
              Learn more
            </button>
          </div>
        </div> */}
      </div>
      <div className="w-full pt-10 px-24 max-md:px-5">
        <div className="px-10 bg-[#FEDEA3] h-full  hover:scale-95 transition-all duration-200 hover:ease-in-out  relative rounded-xl  flex flex-col gap-4 py-10">
          <h3 className="font-semibold tracking-tight text-2xl">
            Rewards Catalog
          </h3>
          <p className="text-5xl font-semibold tracking-tight mt-4 max-[440px]:text-4xl">
            Redeem your rewards based on your points.
          </p>
          <div>
            <button className="text-black pt-8 text-2xl hover:underline ">
              Learn more
            </button>
          </div>
          {/* <div className="text-8xl -bottom-10  absolute">😄 😆</div> */}
        </div>
      </div>
      {/* <AichatBot open={true}  onClose={()=> true} /> */}
    </main>
  );
}
