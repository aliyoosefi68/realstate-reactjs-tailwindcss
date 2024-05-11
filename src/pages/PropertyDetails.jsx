import React, { useEffect } from "react";

//import data
import { housesData } from "../data/data";

//import user params
import { useParams, Link } from "react-router-dom";

//icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

//functions
import { e2p, sp } from "../utils/replaceNumber";

function PropertyDetails() {
  //get house
  const { id } = useParams();

  //get house base id
  const myHouse = housesData.find((house) => house.id === +id);

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between ">
          <div>
            <h2 className="text-2xl font-semibold ">{e2p(myHouse.name)}</h2>
            <h3 className="text-lg mb-4">{e2p(myHouse.address)}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full ">
              {myHouse.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full ">
              {myHouse.country}
            </div>
          </div>
          <div className="text-3xl text-violet-500 font-semibold">
            {sp(myHouse.price)} تومان
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={myHouse.imageLg} alt="" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{e2p(myHouse.bedrooms)}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{e2p(myHouse.bathrooms)}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{sp(myHouse.surface)} متر</div>
              </div>
            </div>
            <div>{myHouse.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={myHouse.agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg">{myHouse.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  لیست آگهی ها
                </Link>
              </div>
            </div>
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="نام شما"
              />
              <input
                type="text"
                placeholder="ایمیل شما"
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
              />
              <input
                type="text"
                placeholder="شماره تماس شما"
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
              />
              <textarea
                placeholder="پیام شما..."
                className="border border-gray-300 focus:border-violet-700 resize-none rounded w-full p-4 h-36 text-gray-300"
              ></textarea>
              <div className="flex gap-x-2">
                <button className="w-full bg-violet-700 hover:bg-violet-800 transition text-white p-4 rounded text-sm">
                  ارسال پیغام
                </button>
                <button className="w-full bg-green-500 hover:bg-green-800 transition text-white p-4 rounded text-sm">
                  تماس
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails;
