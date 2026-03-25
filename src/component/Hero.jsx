import React from "react";
import Img1 from "@/assets/image.png";
function Hero() {
  return (
    <div>
      <div className="  h-83 w-203 flex flex-col  mx-auto text-center gap-10 justify-center items-center">
        <div>
          <div className="text-[68px] font-semibold mt-25">
            {" "}
            Crafted by Nature, Expertly{" "}
            <span className="text-blue-700">Curated for You.</span>
          </div>
          <div className="text-[24px]">
            From the Heart of Nepal, Our Commitment to Bringing
            <br /> Natural Beauty and Balance into Your Home
          </div>
        </div>
        <button className="text-white bg-black w-40 p-2 rounded-xl hover:bg-gray-500 hover:cursor-pointer">
          Explore Now
        </button>
      </div>
      {/* product section */}
      <div className="flex justify-evenly    mt-30  h-100 ">
        {/* indivisual products */}
        <div className="max-w-89.25 h-50">
          <img src={Img1} className="h-51 w-89.25" />
          <div>100+</div>
          <div>
            From the Heart of Nepal, Our Commitment to Bringing Natural Beauty
            and Balance into Your Home
          </div>
        </div>

        <div className="max-w-89.25">
          <div>100+</div>
          <div>
            From the Heart of Nepal, Our Commitment to Bringing Natural Beauty
            and Balance into Your Home
          </div>
          <img src={Img1} className="h-51 w-89.25" />
        </div>

        <div className="max-w-89.25">
          <img src={Img1} className="h-51 w-89.25" />
          <div className="">100+</div>
          <div>
            From the Heart of Nepal, Our Commitment to Bringing Natural Beauty
            and Balance into Your Home
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
