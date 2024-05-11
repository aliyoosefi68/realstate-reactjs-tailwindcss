import React from "react";

//import images
import Image from "../assets/img/house-banner.png";

//componnets
import Search from "./Search";

function Banner() {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:mr-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-right justify-center flex-1 px-4 lg:px-0 ">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className=" text-violet-800 ">اجاره </span>خانه رویایی شما
          </h1>
          <p className="max-w-[480px] mb-8">
            با توجه به افزایش روز افزون استفاده از فضای مجازی در ایران، بسیاری
            از خدماتی که قبلا صرفا به صورت حضوری قابل ری کشور را که مدتهاست
            مغفول مانده و تقاضای زیادی برای آن وجود دارد پوشش دهیم. صی با
            مسافرانی که قصد استفاده از این اقامتگاه ها را دارند .
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-center ">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
}

export default Banner;
