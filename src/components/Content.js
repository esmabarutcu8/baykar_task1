import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Content() {
  return (
    <div className="w-[1440px] overflow-hidden">
      <div className="w-[1440px] h-[902px] absolute top-[120px]  bg-gradient-to-b from-[#4CC9F000] to-[#4361EE4D] rounded-b-full rounded-br-[800px] rounded-bl-[800px] flex">
        <div>
          <div className="text-[19.4px] tracking-[0.15em]  w-[207px] h-[14px] text-[#4361EE]  flex items-center mt-[89px] font-poppins ml-[161px]">
            <p>REAL ESTATE</p>
          </div>
          <div className="w-[580px] h-[105px] text-[57.3px]  ml-[160px] mt-[30px] font-poppins  line-[65px]  font-semibold">
            <p className="mt-0  leading-tight">
              Find a perfect home you love..!
            </p>
          </div>
          <div className="w-[580px] h-[37px] text-[16px] mt-[40px] flex justify-center font-poppins line-[26px] text-[#808080]  ml-[160px] ">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div className="w-[580px] h-[340px] mt-[30px] absolute left-[160px]">
            <div className="w-[60px] h-[60px] bg-gradient-to-b from-[#4361EE] to-[#4361EE00] rounded-full transform rotate-[30deg] absolute top-[-30px] right-[10px] z-10 "></div>

            <Swiper
            // Swiper özellikleri
            // modules={[Navigation, Pagination, A11y]} // Kullanılacak modüller
            // spaceBetween={10} // Slide'lar arasındaki boşluk
            // slidesPerView={1} // Aynı anda gösterilecek slide sayısı
            // loop={true} // Sonsuz döngü
            // pagination={{ clickable: true }} // Sayfalama
            // navigation // Navigasyon okları
            >
              {/* Her bir SwiperSlide bir kaydırıcı öğesini temsil eder */}
              <SwiperSlide>
                <div className="w-[540px] h-[340px]  z-10">
                  <img
                    className="rounded-[20px] "
                    src="https://s3-alpha-sig.figma.com/img/8e3e/78b2/c0db865f789961bb3e28500f19c35c4e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KUvNjByo5z6NWtxM4HAikjPDYJwr~WscmOscS6160N-5OUAhzgNfZ~NUdsTRSwtcMKR60sH0othwwDNR768fOhh4qialAp4RVtZ~tQUXg49C8K3JfkiwDKTH85Jn3jXWYovr~PL2e0JQh5GOzjENfn7EUMAte1jsWC0kG1NfwROQgOZ-R1ChLVp0Uocz2mu~dt3N3qcgD-VyjdSgW-0pktKcRlss0~hFkWP8aXPSk8wwa0c7~WKriwl42AMaYOVtEzgHdiA6cILScslu2kyntLYhTNhtgBhurXqL-KsmVIgQY5qRfoF4eu6agTCn6-RySQA88S4-DIf13wR31eZLfg__"
                    alt="Slide 1"
                  />
                  <div className="absolute top-[50%] left-[-20px] flex justify-center items-center  transform -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full">
                    <i class="fa-solid fa-angle-left"></i>
                  </div>
                  <div className="absolute top-[50%] flex justify-center items-center right-[20px] transform -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-[420px] h-[582px] rounded-lg bg-white absolute top-[244px] left-[860px]">
        <div className="flex">
          <button className="w-[64px] h-[11px] mr-[125px] ml-[83px] mt-[40px] text-[#3A0CA3] font-bold font-poppins line-[24px]">
            For Sale
          </button>
          <button className="w-[66px] h-[11px] mt-[40px] font-poppins  text-[#808080] ">
            For Rent
          </button>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 h-1 bg-[#3A0CA3] w-[150px] ml-[40px]"></div>
          <div className="border-t-2 mt-[27.5px] text-[#808080]"></div>
        </div>
        <input
          className="w-[340px] h-[59px] mt[130px] ml-[40px] mt-[51.5px] rounded-[20px] font-poppins  text-[#AAAAAA] bg-[#D4D4D4] bg-opacity-20 pl-[20px]"
          type="text"
          id="name"
          name="name"
          placeholder="New York, San Francisco, etc"
        />
        <select className="w-[340px] h-[59px] ml-[40px] rounded-[20px] mt-[30px]  font-poppins  text-[#AAAAAA] bg-[#D4D4D4] bg-opacity-20 pl-[20px]">
          <option value="" disabled hidden>
            Select Property Type
          </option>
          <option value="a"></option>
          <option value="b"></option>
          <option value="c"></option>
        </select>
        <select className="w-[340px] h-[59px] ml-[40px] rounded-[20px]  mt-[30px] text-[#AAAAAA] bg-[#D4D4D4] bg-opacity-20 pl-[20px] ">
          <option value="" disabled hidden>
            Select Rooms
          </option>
          <option value="a"></option>
          <option value="b"></option>
          <option value="c"></option>
        </select>
        <div className="text-[#3A0CA3] mt-[20px] ml-[40px] display flex items-center font-poppins">
          <div className="w-[14px] h-[14px] bg-yellow-400"></div>
          <p className="ml-[10px]">Advance Search</p>
        </div>
        <button className="w-[340px] h-[60px] ml-[40px] mt-[61px] rounded-[50px] bg-[#3A0CA3] text-white border-2 border-[#BFBDC1] display flex justify-center items-center">
          <div className="w-[20px] h-[20px] bg-white">
            <i className="fa-light fa-magnifying-glass"></i>
          </div>
          <div className="w-[57px] h-[20px] font-poppins line-[24px] ml-[10px]">
            <p>Search</p>
          </div>
        </button>
      </div>
      <div className="w-[710px] h-[100px] flex absolute top-[886px] left-[365px]">
        <div className="w-[360px] h-[100px]  bg-white rounded-[50px] flex items-center justify-center">
          <div className="w[287px] h-[45px]  bg-slate-5 flex justify-center items-center">
            <div className="w-[155px] h-[36px]    bg-gray-400 float-left"></div>
            <div className="w-[122px]  font-poppins text-[19.4px]  ml-[10px] font-semibold   ">
              <p>72k+ Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="w-[320px] h-[100px] flex bg-white rounded-[50px] ml-[35px] items-center justify-center ">
          <div className="w-[244px] h-[60px] flex items-center ">
            <div className=" w-[60px] h-[60px]  float-left ">
              <img
                className="rounded-full w-full h-full"
                src="https://s3-alpha-sig.figma.com/img/40e6/e971/6f10e2ba54bd37775334c989afaf4fbd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GNFV~ehP1D29trkd8fePvxCyJXwIe~J~hhPCUPJ1aDV7bQ4BYjA0Zo~AJr7EOmSKfRHN3jXvpnrCQdx5-yq-3LzUWlNxmpvcbQU13A83AGraZ4pItZVwBEvVeH8lLr6Ulnrlu8VIsvC6LQeO292oSGfsLEF4e5dnLu~GwyLc1pxUpcMm3phscAAmflQgAblQZ7UFPhFVhdwVBdzvuwGWGhbZoeBp9GaXUD1m4lPmDfAkwDo3gsy5UX3qfWghK29BbDRKFOY4-XljjLJ2JMLz4Aye2RYZehfywAUeQlMRSQgCjwe0d3lRZxcbsiHFRM96auJOfIqYwcoexQK34QIWng__"
              ></img>
            </div>
            <div className=" text-[19.4px] font-poppins font-semibold  line-[29.1px] ml-[10px] ">
              <p>200+ New Listings Everyday!</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-[207px] h-[14px] absolute top-[1065px] left-[161px] text-[#4361EE] font-poppins 
      font-medium text-[19.4px] line-[29.1px] tracking-[0.15em]"
      >
        <p>WHO ARE WE</p>
      </div>
      <div className="flex">
        <div>
          <div>
            <div className="w-[500px] h-[122px] absolute top-[1119px] left-[160px] font-poppins font-semibold text-[39.8px] leading-tight tracking-tight flex items-center justify-center ">
              <p>
                Assisting individuals in locating the appropriate real estate.
              </p>
            </div>
          </div>
          <div className=" font-poppins font-normal w-[500px] h-[63px] line-[26px] absolute top-[1271px] left-[160px] text-[#808080]">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it{" "}
            </p>
          </div>
          <div className="w-[400px] h-[131px] absolute top-[1374px] left-[161px] flex  bg-white shadow-lg pl-[30px]  rounded-[30px]">
            <div className="w-[40px] h-[39.68px] bg-slate-400 absolute mt-[46px]"></div>
            <div className="ml-[50px]">
              <div className="mt-[30px]">
                <p className="text-[#4361EE] w-[274px] h-[14px] font-poppins text-[19.4px] line-[29.1px] mt-[30px]">
                  Lorem ipsum has been the
                </p>
              </div>
              <div>
                <p className="w-[274px] h-[37px] text-[#808080] font-poppins line-[26px] mt-[20px]">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>
          </div>

          <div className="w-[400px] h-[131px] absolute top-[1535px] left-[161px] bg-white shadow-lg rounded-[30px] pl-[30px]">
            <div className="w-[40px] h-[39.68px] bg-slate-400 absolute mt-[46px]"></div>
            <div className="ml-[50px]">
              <div className="mt-[30px]">
                <p className="text-[#4361EE] w-[274px] h-[14px] font-poppins text-[19.4px] line-[29.1px] mt-[30px]">
                  Lorem ipsum has been the
                </p>
              </div>
              <div>
                <p className="w-[274px] h-[37px] text-[#808080] font-poppins line-[26px] mt-[20px]">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[280px] h-[500px] rounded-[30px] absolute top-[1166px] left-[703px] bg-slate-500">
          <img
            src="https://s3-alpha-sig.figma.com/img/66d6/e888/3c1780f6158b1d62f2036152ec7a594f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F5L3ZB9PfK7gQAlPx1~8qMl-kZ53GPYhBNsggsfK1ht2IV5aXWARMWSLoIlPhUqD0Yf2D5J2muNcWRJVTxRWPXJmFabW19OLToLerhyOBiCy5JIiLGt6kyZZmFqqtnsOoS~CaI-R-9Z~IFApkI7dhPE9Pbr5VagpMXqjnJkxBWLbFjMkl9NPsDar2VXrxzUQ8E0~eThz9gUWIjMrx9CnWSUeDbOm-cf2z-Cj8NWRiS2pKSi5L5UvBse7CNNOMQvLWZsSUSNf9izcPvHhGOnbH76Uw8auu3RzTq1RTTjG69Wr6dvE5atLbWDmlKKiuua9wgEFZSf1giMOGEtyq2LmtA__  object-cover "
            alt="home1"
          ></img>
        </div>
        <div className="w-[280px] h-[500px]  absolute top-[1166px] left-[703px] ">
          <img
            alt="home2"
            className="h-full rounded-[30px]"
            src="https://s3-alpha-sig.figma.com/img/66d6/e888/3c1780f6158b1d62f2036152ec7a594f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F5L3ZB9PfK7gQAlPx1~8qMl-kZ53GPYhBNsggsfK1ht2IV5aXWARMWSLoIlPhUqD0Yf2D5J2muNcWRJVTxRWPXJmFabW19OLToLerhyOBiCy5JIiLGt6kyZZmFqqtnsOoS~CaI-R-9Z~IFApkI7dhPE9Pbr5VagpMXqjnJkxBWLbFjMkl9NPsDar2VXrxzUQ8E0~eThz9gUWIjMrx9CnWSUeDbOm-cf2z-Cj8NWRiS2pKSi5L5UvBse7CNNOMQvLWZsSUSNf9izcPvHhGOnbH76Uw8auu3RzTq1RTTjG69Wr6dvE5atLbWDmlKKiuua9wgEFZSf1giMOGEtyq2LmtA__"
          ></img>
        </div>
        <div className="w-[277px] h-[280px]  absolute top-[1119px] left-[1003px]">
          <img
            className="rounded-[30px]"
            src="https://s3-alpha-sig.figma.com/img/ac6b/f43e/8363fc4f62fd9a46cc28eb202059adff?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRExwsI9c7oYAbkZTWKB7jiynrkEHXFNsEJf9o3OC5jijUXQs2KH6p6LHgbbgiX1YZxd1utNguET72-m4FJZl7XYtBpDrjoQsHdXO-Esc6t6Ra4XtSNuyhCBnXhXnPwFHxckFOcWCXU2AbK8ee8TjB6LpDdEPebc1wHom3NB3sac3XTddyeywykU6mPoBcrf0Of5OJP3DG-jNygYc22eKCAHU2VXc4eVZdX~6h3bbEZPrXg6g5VE2lfAfjd4-QDf-VUB~K8EXdMEQpVTtSao2XZe1gITxWiQVWWUghgh8KsKLRze~I7DTYSr-cKdNvfJzLHr8nKYGlnTAY-fXqCanA__"
            alt="home3"
          ></img>
        </div>
        <div className="w-[277px] h-[180px]  absolute top-[1419px] left-[1003px]">
          <img
            className="rounded-[30px]"
            src="https://s3-alpha-sig.figma.com/img/1498/b246/8d9d904d15616c6b35ab1d67adea9e75?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDl9QqF6mvQSj4CJCLTsnLHfrB931gnHuvsD1-ZO6wuBXhMjylkpivbP0cd6QBG9s-ZNX3Jg7soNRwLiH2TnmbWYrFK1uZDtsuMINoFofeyH~y9WJeoSS26mZzA96NICK6rzeEAo7udaZTpD4Olt2Ghsaj3UG0TmUqXyoaU5N1I0A8VGhdUgrTl0GXtC6BxVvtWLD1NYE8JqsnywkH~2868vGwuZZAW~K4zdsdccIxe4Mr9sYGbBW7Ug35hSNM4uk1NypmM6fKAQj6m7At24aDrUzerllIsOTSSbJ8ByDX3up9XgiLT63ba1wqyyzgqJebclzhQxN93RcI0XHcED1g__"
            alt="home4"
          ></img>
        </div>
      </div>
      <div>
        <div className="w-[244px]  h-[14px] absolute top-[1890.99px] left-[160px] bg-white tracking-[0.15em] font-poppins  text-[#4361EE] text-[19.4px] leading-[24px] ">
          <p>CHECKOUT OUR NEW</p>
        </div>

        <div className="w-[466px] h-[28px] bg-white absolute top-[1909.99px] left-[160px]  text-[#212529] text-[39.8px]">
          <p>Latest Listed Properties</p>
        </div>
        <div className="w-[500px] h-[37px] bg-white   absolute top-[1967.99px] left-[160px]  text-[#444444] text-[16px]">
          <p>
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.{" "}
          </p>
        </div>

        <div className="w-[80px] h-[49px] flex justify-center items-center rounded-[30px] absolute top-[1898.99px] left-[975px] border-[#3A0CA3] text-[#3A0CA3]  border-[1px]">
          <p>All</p>
        </div>
        <div className="w-[80px] h-[49px] flex justify-center items-center  rounded-[30px] absolute top-[1898.99px] left-[1075px] bg-[#3A0CA3] text-white ">
          <p>Sent</p>
        </div>
        <div className="w-[80px] h-[49px] flex justify-center items-center  rounded-[30px] absolute top-[1898.99px] left-[1183px] border-[#3A0CA3] text-[#3A0CA3]  border-[1px]">
          <p>Rent</p>
        </div>
        <div className="w-[1280px] h-[499px] absolute top-[2054.99px] left-[160px] flex overflow-hidden">
          <div className="w-[340px] h-[499.06px]  top-[2054.99px] left-[160px]">
            <div className="w-[340px] h-[340px] relative">
              <img
                className="rounded-[30px] h-full w-full"
                src="https://s3-alpha-sig.figma.com/img/bc36/25fe/c29a6fdfc56f1281691b64cd6d326273?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yb13zsovBg~Qr4em2JiF83FwuHGC9i2s5Wy1glmUeXogPhTkCwYx9CJxex4KId83s3MneC7pSNr4DDUofnIgZQTQnZjgKOEMVmonofXzNMtO-bsdtcZDfnrOtUJOXAy~RgqcmYCnrPV71-1QGYCIz3u1bARy~ee5Ib4oxDS5N7CwtcHewdBIe20-m10n~5uuh4uPe-vzobLRCD7JsSG3PXS~Ppn3Gzc8n425hSMA9VwBT7s8rlY1IGeyt644dsaS9NeD~vEmSXfemxhKYdM5NrEoz6i1vk62NSqM~UQ4cyQXIMcMwCUbQHan9gLvbDEFGTmyORclEZmeo5p2Ff3gmg__"
              />
              <div className="bg-[#FFE1E1] rounded-[20px] w-[141px] h-[42.51px] absolute left-[30px] top-[269px] flex justify-center items-center">
                <div className="w-[20px] h-[20px] bg-gray-500"></div>
                <div className="w-[63px] h-[11px]  text-[#FF1111] ml-[10px] font-poppins text-[16px] line-[24px] font-bold">
                  Popular
                </div>
              </div>
            </div>
            <div>
              <p className="w-[100px] h-[19px] font-semibold line-[41.4px] text-[#1E1E1E] top-[2426.99px] text-[27.6px] left-[160px] mt-[10px] ">
                $ 5,970
              </p>
            </div>
            <div>
              <p className="w-[280px] font-semibold h-[14px] mt-[20px] text-[#1E1E1E] top-[2426.99px] left-[160px] text-[19.4px] ">
                Tranquil Haven in the Woods
              </p>
            </div>
            <div>
              <p className="w-[264px] h-[11px]  text-[16px] line[26px] font-normal text-[#808080] mt-[20px] ">
                103 Wright CourtBurien, WA 98168
              </p>
            </div>
            <div className="flex">
              <div className="w-[94px] h-[21.3px]  flex justify-center items-center mt-[20px]">
                <div className="w-[30px] h-[21.3px] bg-slate-500"></div>
                <div className="w-[54px] h-[21.3px] ml-[10px] flex items-center justify-center">
                  <p className="text-center">4 Beds</p>
                </div>
              </div>

              <div className="w-[94px] h-[21.3px] flex justify-center items-center mt-[20px]">
                <div className="w-[30px] h-[21.3px] bg-slate-500"></div>
                <div className="w-[54px] h-[21.3px] ml-[10px] flex items-center justify-center">
                  <p className="text-center">4 Beds</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[499.06px] absolute left-[390px]">
            <div className="w-[340px] h-[340px] ">
              <img
                className="rounded-[30px] h-full w-full "
                src="https://s3-alpha-sig.figma.com/img/f922/bb62/7048af1a1292dbac7c45b5c9014a1e82?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BKQjg-D5Bw6Op3TxpnsRij7N3qkFrmAsXJEe7xlMHbnXKg5augUDmtfYHk9hVexV79oGzRK0m9TE8KHAfVABwqCT0KJ6tR~vk70ZuuhCcsM8dug249yabvMVz8QDyy3q1PMRPgLcrZ53MsxTMbfft3ARj0h4euhCGK7IaCk-sWDCy2EAGR3frFFTpr7Kbw0v2-myzZ62Zicsmpx5XDD-J546sfbTGpxkVk7BscNnBqSloEWQPaWCkIMUU9r0jZWbEXq-6SDlXdzZ2UbISjtY2nehNrP2Xbr6CfA3Czyd30qPaAcCY5okGwcUyXdvPajjLQM54meeK7ioL8zH8zLItA__"
              ></img>

              <div className="bg-[#D7EEFF] rounded-[20px] w-[141px] h-[42.51px] absolute left-[30px] top-[269px] flex justify-center items-center">
                <div className="w-[20px] h-[20px] bg-gray-500"></div>
                <div className="w-[91px] h-[11px]  text-[#119BFF] ml-[10px] font-poppins text-[16px] line-[24px] font-normal">
                  New Listing
                </div>
              </div>
            </div>
            <div>
              <p className="w-[100px] h-[19px] font-semibold line-[41.4px] text-[#1E1E1E] top-[2426.99px] text-[27.6px] left-[160px] mt-[10px] ">
                $ 1,970
              </p>
            </div>
            <div>
              <p className="w-[260px] font-semibold h-[14px] mt-[20px] text-[#1E1E1E] top-[2426.99px] left-[160px] text-[19.4px] ">
                Serene Retreat by the Lake
              </p>
            </div>
            <div>
              <p className="w-[235px] h-[11px]  text-[16px] line[26px] font-normal text-[#808080] mt-[20px] ">
                1964 Jehovah Drive, VA 22408
              </p>
            </div>
            <div className="flex">
              <div className="w-[94px] h-[21.3px]  flex justify-center items-center mt-[20px]">
                <div className="w-[30px] h-[21.3px] bg-slate-500"></div>
                <div className="w-[54px] h-[21.3px] ml-[10px] flex items-center justify-center">
                  <p className="text-center">4 Beds</p>
                </div>
              </div>
              <div className="w-[94px] h-[21.3px]  flex justify-center items-center mt-[20px]">
                <div className="w-[30px] h-[21.3px] bg-slate-500"></div>
                <div className="w-[54px] h-[21.3px] ml-[10px] flex items-center justify-center">
                  <p className="text-center">3 Bath</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[499.06px] absolute left-[780px]">
            <div className="w-[340px] h-[340px] ">
              <img
                className="rounded-[30px] h-full w-full "
                src="https://s3-alpha-sig.figma.com/img/5e62/9abe/0b400da94167cf8762b5195d14d33edf?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HArya4RSLKg1ug6W7y8prPUIrHqBH9KU3hNIUDZnjxKZEBCZKREN51jM5wpU-GMJaJBccMpJZJWpn7oNOOL2OwnlPUrxTb-rsL2AuJerJkI7~WEdFDhbU2wSgSBYwDjEmWPo8JV4gj7uE9qzH6Ja9CRHcwEDxl0B8vW-xemDxTS-ZfffzP2ea0O-fNOjo9QRQ~pTXggAr6XjkN1QSTXqZyG4Y2kJKI3FDTg8hT-QwEaTySjg9Ca9jN18jaTCsmAwCUEg0iv82Si0dkz9Z7csNgEYOrINGEAdc2H7AChdmnlFUkPJjaAy~Z7CBvuT-GspC9iTKR4C~qXMqDDYiUrqeg__"
              ></img>

              <div className="bg-[#F1FFF1] rounded-[20px] w-[205px] h-[40.3px] absolute left-[30px] top-[269px] flex justify-center items-center">
                <div className="w-[20px] h-[20px] bg-gray-500"></div>
                <div className="w-[135px] h-[11px]  text-[#00CE3A] ml-[10px] font-poppins font-normal text-[16px] line-[24px] ">
                  <p>Discounted Price</p>
                </div>
              </div>
            </div>
            <div>
              <p className="w-[100px] h-[19px] font-semibold line-[41.4px] text-[#1E1E1E] top-[2426.99px] text-[27.6px] left-[160px] mt-[10px] ">
                $ 3,450
              </p>
            </div>
            <div>
              <p className="w-[333px] font-semibold h-[14px] mt-[20px] text-[#1E1E1E] top-[2426.99px] left-[160px] text-[19.4px] ">
                Charming Cottage in the Meadow
              </p>
            </div>
            <div>
              <p className="w-[264px] h-[11px]  text-[16px] line[26px] font-normal text-[#808080] mt-[20px] ">
                1964 Jehovah Drive, VA 22408
              </p>
            </div>
            <div className="flex">
              <div className="w-[94px] h-[21.3px]  flex justify-center items-center mt-[20px]">
                <div className="w-[30px] h-[21.3px] bg-slate-500"></div>
                <div className="w-[54px] h-[21.3px] ml-[10px] flex items-center justify-center">
                  <p className="text-center">4Beds</p>
                </div>
              </div>
              <div className="w-[94px] h-[21.3px]  flex justify-center items-center mt-[20px]">
                <div className="w-[30px] h-[21.3px] bg-slate-500"></div>
                <div className="w-[54px] h-[21.3px] ml-[10px] flex items-center justify-center">
                  <p className="text-center">2 Bath</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[499.06px]  absolute left-[1170px]">
            <div className="w-[340px] h-[340px] ">
              <img
                className="rounded-[30px] h-full w-full "
                src="https://s3-alpha-sig.figma.com/img/c518/d245/ee559e82e9cffdd11e1005362ee567b1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Unbzz7YDyVa1yxCcuh0PW-7Nyn9Nm~C0x~7ZboKJw7Wz-1RBK~cpU4-atSV7Gf~fq8N1wwr1Umbb5bpLkzZCWaqPr7Kt6xdnI3L0-1DKL0812KRscAITZH7dOaIEfDEVzcJ5VpoINaQf3YrJ5L2vo7dAHwlhigfG4GDLCoAgY7KoRufE5Eovt4BLdPdbH3PKBL3GUBvFdGBwcvjJdaf2pe~~PbGYGfBod1J9rRmKvwT~nhpd7yF1-ql-aEVfiZC9azeEW03xKmgICRbpw2yZyPYHYZujQ0uXu4DsJskUS3pIN1Sc6-3D5JVlZ7w3PXMXJKYyt293dN~6guZcLGhD9A__"
              ></img>

              <div className="bg-[#FFE1E1] rounded-[20px] w-[141px] h-[42.51px] absolute left-[30px] top-[269px] flex justify-center items-center">
                <div className="w-[20px] h-[20px] bg-gray-500"></div>
                <div className="w-[91px] h-[11px]  text-[#FF1111] ml-[10px] font-poppins text-[16px] line-[24px] font-normal">
                  Popular
                </div>
              </div>
            </div>
            <div>
              <p className="w-[100px] h-[19px] font-semibold line-[41.4px] text-[#1E1E1E] top-[2426.99px] text-[27.6px] left-[160px] mt-[10px] ">
                $ 2,389
              </p>
            </div>
            <div>
              <p className="w-[280px] font-semibold h-[14px] mt-[20px] text-[#1E1E1E] top-[2426.99px] left-[160px] text-[19.4px] ">
                Grand Estate on the Hilltop
              </p>
            </div>
            <div>
              <p className="w-[264px] h-[11px]  text-[16px] line[26px] font-normal text-[#808080] mt-[20px] ">
                103 Wright CourtBurien, WA 98168
              </p>
            </div>
            <div className="flex">
              <div className="w-[94px] h-[21.3px]  flex justify-center items-center mt-[20px]">
                <div className="w-[30px] h-[21.3px] bg-slate-500"></div>
                <div className="w-[54px] h-[21.3px] ml-[10px] flex items-center justify-center">
                  <p className="text-center">4 Beds</p>
                </div>
              </div>
              <div className="w-[94px] h-[21.3px]  flex justify-center items-center mt-[20px]">
                <div className="w-[30px] h-[21.3px] bg-slate-500"></div>
                <div className="w-[54px] h-[11px] ml-[10px]">
                  <p> 4 Bath</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100px] h-[100px]  bg-gradient-to-r from-[#4361EE] to-[#4361EE00] rounded-full absolute left-[1097px] top-[2664.99px] transform rotate-[30deg]"></div>
        <div className="bg-[#3A0CA3] w-[1440px] h-[899px] absolute top-[2647.99px]">
          <div className="text-white text-[19.4px] w-[386px] flex justify-center font-poppins h-[14px] absolute left-[527px] mt-[93px] tracking-[0.15em]">
            <p>WHAT’S TRENDING</p>
          </div>
          <div className="text-white  line-[47px] font-poppins w-[626px] h-[28px]  absolute left-[407px] mt-[123px] text-[39.8px] flex justify-center">
            <p>Latest Blogs & Posts</p>
          </div>
          {/* resimli kısımlar */}
          <div className="w-[340px] h-[240px] mt-[261px] absolute  left-[160px] ">
            <img
              className="rounded-[30px]"
              src="https://s3-alpha-sig.figma.com/img/0b1d/91c3/88b09098fae7b1711c657e00f895ec56?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cEE7j13JTRLLwLPC3ie7AJi4envZ3xWnYhyD24sxlkTwYgQH61qMTx3MdtTV2Rk6WDaAh8ZaUF0bo29NUceTY1rnAFR5xG9n03XKUnRhbREFz5DMz6lyNvdv6NW9lu0-vXsj2Vb1GGIdNy5H74GebcBymqu9WEv9Ken9oFtPoWVxm4XKxaqbekzp9EV6alWRuBFxmDctnQDN1Uft7p8LUhiooJO0SoCxRIYsmUMdVhh2ZZP29LrYlObSH9ImnTGF-GQZycDeCV7Hc-j7ruVJkyL2iAxYdLRuIy8FNBlZI8jqiaXnXZfSGBwVn5GMskrCsgEcwXCbfxP8PREGIZNR8g__"
            ></img>
            <div className="w-[340px] h-[60px] text-[27.6px] mt-[20px] font-poppins line-[41.4px] font-medium text-white ">
              <p>Top 10 Home Buying Mistakes to Avoid</p>
            </div>
            <div className="w-[340px] h-[37px] text-[16px] absolute mt-[15px] text-[#D4D4D4] font-poppins  ">
              <p>
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulumd
              </p>
            </div>
          </div>
          <div className="w-[340px] h-[240px] mt-[261px] absolute  left-[550px] ">
            <img
              className="rounded-[30px]"
              src="https://s3-alpha-sig.figma.com/img/b48a/7f70/a278c5cff285826af223565c48925cb1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVv5-X~XO9f43ph2hASt0iQOrBw0F~KtcwqIbCPtcbMs~g7gJwKEqg3ruWI0AfTHAPqL8O-f4H4x5kQvklIPywe8Cbu0Uhiu7YnkUaGU1vSJ02HZIPst-x8LSJvl~HEvaubdd5cdiEhiebggB8lqCeAaOGDSm04BScMF759FnciAxag49eiHd-d1K5JD9vgvH68YalYZe-zMAxrlwnNF4sTkORuCfu3fBlHSQI5NxWTUxrGqZtS8vo8HFamQ7iree5qegTvAvjykNK7PKKyuPaJYG1ziOIOI6qoiuxzBoRAxvPZq4zO~71HbAAhRG13nr1jpUY2loR7r3YhxlDSEPA__"
            ></img>
            <div className="w-[340px] h-[60px] text-[27.6px] mt-[20px] font-poppins line-[41.4px] font-medium  text-white ">
              <p>How to Stage Your Home for a Quick Sale</p>
            </div>
            <div className="w-[340px] h-[37px] text-[16px] absolute mt-[15px] text-[#D4D4D4] font-poppins ">
              <p>
                Nullam odio lacus, dictum quis pretium congue, vehicula
                venenatis nunc.
              </p>
            </div>
          </div>
          <div className="w-[340px] h-[240px] mt-[261px] absolute  left-[940px] ">
            <img
              className="rounded-[30px]"
              src="https://s3-alpha-sig.figma.com/img/6d70/2d4f/c34df2b6b43d58c90d2ad3d95a5e1b4e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nRsUzjYB3Mi0lgh82JGjfC~YzLskcWha9M0xDlDRNLM6wHhrPTGkSCVmwxLIRC9uYCjYvYvLy-qm5kfRV67dezh8itObquCeBsX4nCbdtDPpFL9~dWC18JByQx7eTL3BGePQ6p1X~WGf4yaE4CRS74DjFmemMJGJMLnofI7md~qbmcy2zvCxMFuV1HtDQsYwJukRHCLMIWcURuItheCEVKc3BBaQOSVni7FiDzWcxQj8QAOUpmBbco~oJ~X6tEP-iXIwW9Z0C6-3aFB-VyD8ef~DTYDb7g1-v2TvqSG8RwjmqEGHffo8in0RabVbGrYLXU4ojleSJXMEVxSvkriatQ__"
            ></img>
            <div className="w-[340px] h-[60px] text-[27.6px] mt-[20px] font-poppins line-[41.4px] font-medium text-white">
              <p>5 Tips for First-Time Home Sellers</p>
            </div>
            <div className="w-[340px] text-[#D4D4D4] font-poppins  h-[37px] text-[16px] absolute mt-[15px] ">
              <p>
                In hac habitasse platea dictumst. Phasellus vel velit vel augue
                maximus.
              </p>
            </div>
          </div>

          <div className="w-[440px] h-[50px]  mt-[700px] absolute left-[500px]">
            <button className="rounded-full bg-white w-[50px] h-[50px] float-left ">
              <i className="fa-solid fa-arrow-left "></i>
            </button>
            <button className="rounded-full bg-white w-[50px] h-[50px] float-right ">
              <i className="fa-solid fa-arrow-right "></i>
            </button>
          </div>
        </div>

        <div className="w-[209px] h-[14px] tracking-[0.15em] line-[29.1px] font-poppins text-[19.4px] text-[#4361EE] absolute left-[160px] top-[3706.99px]">
          <p>TESTIMONIALS</p>
        </div>

        <div className="w-[415px] h-[75px] text-[39.8px] line-[20px]  font-semibold font-poppins absolute left-[160px] top-[3750.99px] flex items-start">
          <p className="">Look What Our Customers Say!</p>
        </div>
        <div className="w-[415px] h-[37px] text-[16.4px]  absolute left-[160px] top-[3855.99px] mt-[25px] line-[26px] text-[#2B2B2B]">
          <p>
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.{" "}
          </p>
        </div>

        <div className="rounded-full w-[50px] h-[50px] absolute left-[160px] flex items-center justify-center top-[4002.99px] border-2 border-[#4361EE] text-[#4361EE]">
          <i className="fa-solid fa-arrow-left "></i>
        </div>
        <div className="rounded-full w-[50px] h-[50px] absolute left-[240px] flex items-center justify-center top-[4002.99px] border-2 border-[#4361EE] ">
          <i className="fa-solid fa-arrow-right text-[#4361EE] "></i>
        </div>

        <div className="w-[500px] h-[358px] absolute left-[750px] top-[3706.99px] bg-white shadow-lg rounded-[30px]">
          <div className="w-[60px] h-[37.26px]  ml-[60px] bg-yellow-200 mt-[34px]"></div>
          <div className="w-[380px] h-[130px] font-poppins line-[29.1px] font-medium  text-[19.4px] ml-[60px]">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make 
            </p>
          </div>
          <div className="bg-[#D4D4D4]  w-[400px] h-[1px] mt-[70px] ml-[60px]"></div>
          <div className="  h-[50px]  mt-[20px] ml-[60px] flex  ">
            <img
              className="w-[50px] h-[50px] rounded-full "
              src="https://s3-alpha-sig.figma.com/img/738e/6e77/a92971e6075b85d18be0de93205d90cb?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewjNspTxNSpO7yBAPPj4bZ4ulDI3BA6~pnfzR5exERJBcEz6Gxfifu8yZjczJF2rGnjZ9I74js7wMHFxBj2-CsyiHg-0tRHhR4-k0yeqfKGXBvv7P5c4OmSoou5P5-7XwD4aurGEL0snqPgJ2KxNoGr6V1NdbCDB0JNMkQu62KvA1qWVIsSG2IPq-kbG68MTSDr1HRS5uLU6F8k1jP4bO6xUF57EjXqKx8xw9ZoImXr7Y6~vbNTcwx6crOSzZfjm8APcDGQmeB8-apRPVpirdUh8EhOQL1UriWvymKVn8pc5DxH~KTlLDLWG7p9Z4LIMxNNik-w6MoqC46Cb~YaUeQ__"
            ></img>

            <div className="w-[180px] h-[14px] mt-[10px] Barbara D. Smith  text-[19.4px] ml-[10px] font-poppins font-semibold ">
              <p>Barbara D. Smith</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
