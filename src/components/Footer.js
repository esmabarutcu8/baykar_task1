import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-[#d3dafb] w-[1440px] h-[420px] absolute top-[4169px] ">
        <div className="w-[124px] h-[50px] absolute left-[160px] mt-[82px] flex">
          <div className="rounded-full bg-[#3A0CA3] w-[50px] h-[50px]"></div>
          <div className="text-[20px] text-[#2B2B2B] ml-[8px] w-[66px] h-[14px] mt-[13px]">
            <p>Rezilla</p>
          </div>
        </div>
        <div className="w-[285px] h-[35px] font-poppins font-normal text-[16px] absolute left-[160px] mt-[164px]">
          <p>Lorem ipsum has been the industry standard dummy text</p>
        </div>
        <div className="w-[133px] h-[20px] text-[16px] absolute left-[160px] mt-[247px]">
          <p>+90123 45 67</p>
        </div>
        <div className="w-[159px] h-[14px] text-[16px] absolute left-[160px] mt-[297px]">
          <p>mail@mail.com</p>
        </div>
        <div className="text-[19.4px] text-[#2B2B2B]  ml-[478px] w-[108px] h-[14px] mt-[90px]">
          <p>Quick Links</p>
        </div>
        <div className="w-[134px] h-[170px] ml-[478px] p-[4px] mt-[30px] text-[16px] font-poppins line-[26px] ">
          <a href="" className="block mb-[8px]">
            Home
          </a>
          <a href="" className="block mb-[8px]">
            About
          </a>
          <a href="" className="block mb-[8px]">
            Listings
          </a>
          <a href="" className="block mb-[8px]">
            Services
          </a>
          <a href="" className="block mb-[8px]">
            Blogs
          </a>
          <a href="" className="block mb-[8px]">
            Become a Agent
          </a>
        </div>

        <div className="text-[19.4px] text-[#2B2B2B] absolute left-[722x] w-[96px] h-[14px] mt-[100px]">
          <p>Discovery</p>
        </div>
      </div>
      <div className="text-[19.4px] text-[#2B2B2B]  ml-[200px] w-[254px] h-[43px] ">
        <p className="Subscribe to our Newsletter!"></p>
      </div>
      <div className="rounded-[30px] bg-white w-[350px] h-[60px] absolute top-[4333px] left-[930px] flex items-center pl-2">
        <input
          type="text"
          className="w-full h-full bg-white rounded-[20px] px-4 text-gray-700 focus:outline-none focus:border-transparent"
          placeholder="Email Address"
        />
      </div>

      <div className="bg-black w-[1440px] h-[50px] absolute top-[4589px] "></div>
    </>
  );
}

export default Footer;
