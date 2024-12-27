import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import "swiper/swiper-bundle.min.css";

function Navbar() {
  return (
    // ilk div deki h ı kaldır
    <div className="">
      <div className="bg-[#3A0CA3]  w-[1440px] h-[40px] ">
        <div className="w-[388px] h-[16px]   absolute top-[16px] left-[100px] flex items-center">
          <div className="w-[12px] h-[16px] flex justify-center items-center">
            <i className="fas fa-map-marker-alt text-white"></i>
          </div>

          <p className="text-white text-sm pl-1">
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="w-[108px] h-[16px] absolute top-[16px] flex items-center ml-[1012px] ">
          <div className="w-[16px] h-[16px] flex justify-center items-center">
            <i className="fa-solid fa-phone text-white "></i>{" "}
          </div>
          <div className="flex items-center">
            <p className=" text-white text-[13.3px] pl-2">+90123 45 67</p>
          </div>
        </div>
        {/* maail */}
        <div className="w-[129px] h-[11.2px] absolute top-[14px] flex items-center ml-[1177px] ">
          <div className="w-[16px] h-[11.2px]  flex justify-center items-center">
            <i className="fa-regular fa-envelope text-white"></i>
          </div>
          <div className="flex items-center">
            <p className=" text-white text-[13.3px] pl-2">mail@mail.com</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-[1440px] h-[80px]  flex items-center ">
        <div className="flex ml-[100px] text-[#2B2B2B]">
          <button className=" w-[80px] h-[37px] bg-[#4361EE4D] rounded-[30px] text[16px] font-poppins px-[16px]  bg-opacity-30 ">
            Home
          </button>
          <button className=" w-[81px] h-[37px] font-poppins  ">About</button>
          <button className="w-[92px] h-[37px] font-poppins ">Listings</button>
          <button className=" w-[100px] h-[37px] font-poppins ">
            Services
          </button>
          <button className=" w-[76px] h-[37px] font-poppins">Blogs</button>
        </div>
        <div className="flex w-[107px] h-[50px] ml-[129px]   ">
          <div class="w-[50px] h-[50px] bg-[#3A0CA3] rounded-full flex items-center justify-center text-[#FFFFFF] ">
            <div className="w-[24px] h-[24px]">
              <img
                className=" "
                src="https://www.reshot.com/preview-assets/icons/XJ53QBRVTC/house-XJ53QBRVTC.svg"
                class=" object-contain"
              />
            </div>
          </div>
          <div>
            <p className="w-[49px] h-[14px] absolute top-[73px] left-[716px] flex items-center font-poppins text-[20px] font-semibold">
              Logo
            </p>
          </div>
        </div>
        <div className="w-[145px] h-[18px] flex items-center  absolute left-[1006px] ">
          <div className="w-[18px] h-[18px] flex justify-center items-center">
            <i className="fa-regular fa-circle-user"></i>
          </div>
          <p className="pl-[10px] font-poppins">Login/Register</p>
        </div>
        <button className="w-[169px] h-[50px]  bg-[#3A0CA3] flex items-center justify-center rounded-[50px] absolute left-[1171px] ">
          <img
            className="w-[20px] h-[20px]"
            src="https://www.reshot.com/preview-assets/icons/XJ53QBRVTC/house-XJ53QBRVTC.svg"
          />
          <p className="text-[16px] font-poppins text-white w-[89px] h-[19px] ml-[5px]">
            Add Listing
          </p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
