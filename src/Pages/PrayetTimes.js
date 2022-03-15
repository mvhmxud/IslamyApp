import { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import NavBar from "../components/Layout/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { LoadingSliceActions } from "../store/LoadingSlice";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import axios from "axios";
import {AiOutlineArrowRight , AiOutlineArrowLeft} from 'react-icons/ai'
import img from "../../src/images/location.png";
import PrayerTimesCard from "../components/Layout/PrayerTimesCard";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useDispatch, useSelector } from "react-redux";

SwiperCore.use([Pagination, Navigation]);
function PrayerTimes(props) {
  const disatch = useDispatch();
  const isLoading = useSelector((state) => state.LoadingSlice.Isloading);

  const [times, setTimes] = useState([]);
  const isArabic = useSelector((state)=> state.TranslationSLice.isArabic)

  const date = new Date().getDate();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissions) => {
          disatch(LoadingSliceActions.setIsLoadingToTrue());
          axios
            .get(
              `https://api.aladhan.com/v1/calendar?latitude=${location?.coords.latitude}&longitude=${location?.coords.longitude}`
            )
            .then((res) => {
              setTimes(res.data.data);
            })
            .catch((err) => {
              disatch(LoadingSliceActions.setIsErrorTotrue);
              setTimeout(() => {
                disatch(LoadingSliceActions.setIsErrorToFalse);
              }, 5000);
            })
            .finally(() => {
              disatch(LoadingSliceActions.setIsLoadingToFalse());
            });
        });
    });
  }, [isArabic]);
  return (
    <div className=" dark:bg-darkmodeDark bg-background">
      <NavBar
        darkModeHandler={props.darkModeHandler}
        isDarkMode={props.isDarkMode}
        changeLanguageHandler={props.changeLanguageHandler}
      />

      {!isLoading && times.length > 0 && (
        <div>
        <Swiper
          pagination
          initialSlide={date - 1}
          spaceBetween={50}
          slidesPerView={1}
        >
          {times.map((day, index) => (
            <SwiperSlide key={index}>
              <PrayerTimesCard day={day} />
            </SwiperSlide>
          ))}
        </Swiper>
        {isArabic ?<div className='text-center text-xs md:text-base arabic flex items-center justify-center text-maingreen animate-pulse'> <AiOutlineArrowRight className="ml-2"/>   اسحب لليمين لمعرفة مواقيت اليوم التالي   </div > : <div className='text-center text-xs md:text-base arabic flex items-center justify-center text-maingreen animate-pulse'><AiOutlineArrowLeft className="mr-2"/> Swipe Left to get the PrayerTimes of the next day </div>}
        </div>
      )}
      {times.length <= 0 && !isLoading && (
        <div className="h-[500px]">
          {" "}
          <div className="  w-11/12 md:w-1/2 flex drop-shadow-sm mt-20  flex-col justify-center items-center mx-auto rounded-2xl dark:bg-darkmodeLight p-5   md:mt-16 bg-white">
            <img src={img} className="w-96  -mt-24" />
            <div className="md:text-2xl text-center  text-darkgrey dark:text-white ">
              {isArabic ?  <span className="arabic"> يرجي اعطاء اذن الوصول للموقع لمعرفة تواقيت الصلاة</span> : 'Please Allow Location access to get Prayer Times !'}
              <div className="text-center text-maingreen text-xs md:text-sm">
                {isArabic ? <span className="arabic">يرجي اعادة تحميل الصفحه بعد اعطاء الاذن</span> : ' Reload required'}
              </div>
            </div>
          </div>{" "}
        </div>
      )}

      {isLoading && (
        <div className="w-4/5 flex flex-col justify-center items-center mx-auto pt-10">
          <div className="w-3/4 rounded-2xl animate-pulse h-52 bg-loadinglight dark:bg-darkmodeLight"></div>
          <div className="w-3/4 gap-2 flex animate-pulse mt-8">
            <div className="w-1/3 h-24 rounded-2xl bg-loadinglight dark:bg-darkmodeLight "></div>
            <div className="w-1/3 h-24 rounded-2xl bg-loadinglight dark:bg-darkmodeLight "></div>
            <div className="w-1/3 h-24 rounded-2xl bg-loadinglight dark:bg-darkmodeLight "></div>
          </div>
          <div className="flex w-3/4 gap-2 mt-8 animate-pulse">
            <div className="w-1/2 h-24 rounded-2xl bg-loadinglight dark:bg-darkmodeLight "></div>
            <div className="w-1/2 h-24 rounded-2xl bg-loadinglight dark:bg-darkmodeLight "></div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default PrayerTimes;
