import { useEffect, useState } from "react";
import { FaCalendar, FaMosque } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import NavBar from "../components/Layout/navbar";
import { countDownHandler } from "../Hooks & Functions/CountDownHandler";
import { LoadingSliceActions } from "../store/LoadingSlice";

function Ramadan(props) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.LoadingSlice.Isloading);
  const [remainingTime, setRemainingTime] = useState({});
  const isArabic = useSelector((state) => state.TranslationSLice.isArabic);
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(LoadingSliceActions.setIsLoadingToTrue());
    setTimeout(() => {
      dispatch(LoadingSliceActions.setIsLoadingToFalse())
    }, 1000);
    const countDown = setInterval(() => {
      countDownUpdater(1648850400000);
    }, 1000);
    return () => {
      clearInterval(countDown);
    };
  }, []);
  const countDownUpdater = (timestamp) => {
    setRemainingTime(countDownHandler(timestamp));
  };
  return (
    <div className=" bg-background dark:bg-darkmodeDark">
      <NavBar
        darkModeHandler={props.darkModeHandler}
        isDarkMode={props.isDarkMode}
        changeLanguageHandler={props.changeLanguageHandler}
      />
      {!isLoading ? (
        <div className="mt-14">
          {remainingTime.day ? (
            <>
              <div className="w-4/5 mb-6 mx-auto text-center text-2xl text-maingreen font-medium">
                {isArabic ? (
                  <span className="arabic">الوقت المتبقي</span>
                ) : (
                  "Remaining Time"
                )}
              </div>
              <div
                dir="ltr"
                className=" md:w-1/2 w-4/5 gap-3 md:gap-6   mb-10 flex mx-auto drop-shadow-sm rounded-2xl"
              >
                <div className="w-1/4 p-3 md:p-5 md:text-3xl text-lg text-maingreen dark:bg-darkmodeLight   bg-white flex flex-col justify-center items-center rounded-2xl ">
                  {remainingTime.day}{" "}
                  <span className=" text-sm text-darkgrey dark:text-white">
                    {isArabic ? <span className="arabic">يوم</span> : "Days"}
                  </span>{" "}
                </div>
                <div className="w-1/4 p-3 md:p-5 md:text-3xl text-lg text-maingreen dark:bg-darkmodeLight   bg-white flex flex-col justify-center items-center rounded-2xl">
                  {remainingTime.hrs}{" "}
                  <span className=" text-sm text-darkgrey dark:text-white">
                    {isArabic ? <span className="arabic">ساعة</span> : "Hours"}
                  </span>
                </div>
                <div className="w-1/4 p-3 md:p-5 md:text-3xl text-lg text-maingreen dark:bg-darkmodeLight   bg-white flex flex-col justify-center items-center rounded-2xl">
                  {remainingTime.mins}{" "}
                  <span className=" text-sm text-darkgrey dark:text-white">
                    {isArabic ? (
                      <span className="arabic">دقيقة</span>
                    ) : (
                      "Minutes"
                    )}
                  </span>{" "}
                </div>
                <div className="w-1/4 p-3 md:p-5 md:text-3xl text-lg text-maingreen dark:bg-darkmodeLight   bg-white flex flex-col justify-center items-center rounded-2xl">
                  {remainingTime.secs}{" "}
                  <span className=" text-sm text-darkgrey dark:text-white">
                    {isArabic ? (
                      <span className="arabic">ثانية</span>
                    ) : (
                      "Seconds"
                    )}
                  </span>{" "}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="flex flex-col mb-48 items-center md:flex-row md:w-1/2 w-9/10 gap-3 mx-auto">
            <Link
              to="ramadan/imsakyah"
              className="md:w-1/2 w-3/4 flex overflow-hidden justify-between p-3 items-center h-32 drop-shadow-sm rounded-2xl bg-white dark:bg-darkmodeLight "
            >
              <div className="md:text-2xl text-xl text-maingreen ">
                {isArabic ? (
                  <span className="arabic">امساكية رمضان</span>
                ) : (
                  "Ramadan Imsakyah"
                )}
              </div>
              <FaCalendar className="text-9xl opacity-5 -rotate-[20deg] " />
            </Link>
            <Link
              to="ramadan/Hadith-dua"
              className="md:w-1/2 w-3/4 flex overflow-hidden justify-between p-3 items-center h-32 drop-shadow-sm rounded-2xl bg-white dark:bg-darkmodeLight "
            >
              <div className="md:text-2xl text-xl text-maingreen ">
                {isArabic ? (
                  <span className="arabic">احاديث و ادعية </span>
                ) : (
                  "Hadith and Dua "
                )}
              </div>
              <FaMosque className="text-9xl opacity-5 -rotate-[10deg] " />
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-16">
          {" "}
          <div className="md:w-1/2  w-4/5 gap-3 md:gap-6   mb-10 flex mx-auto drop-shadow-sm rounded-2xl">
            <div className="w-1/4 h-24 p-3 md:p-5 md:text-3xl text-lg text-maingreen dark:bg-darkmodeLight bg-loadinglight animate-pulse flex flex-col justify-center items-center rounded-2xl "></div>
            <div className="w-1/4 h-24 p-3 md:p-5 md:text-3xl text-lg text-maingreen dark:bg-darkmodeLight bg-loadinglight animate-pulse flex flex-col justify-center items-center rounded-2xl "></div>
            <div className="w-1/4 h-24 p-3 md:p-5 md:text-3xl text-lg text-maingreen dark:bg-darkmodeLight bg-loadinglight animate-pulse flex flex-col justify-center items-center rounded-2xl "></div>
            <div className="w-1/4 h-24 p-3 md:p-5 md:text-3xl text-lg text-maingreen dark:bg-darkmodeLight bg-loadinglight animate-pulse flex flex-col justify-center items-center rounded-2xl "></div>
          </div>
          <div className="md:w-1/2  w-4/5 mb-48 gap-3 md:gap-6 md:flex-row flex-col  flex mx-auto drop-shadow-sm rounded-2xl" >
            <div className="md:w-1/2  flex overflow-hidden justify-between p-3 items-center h-32 drop-shadow-sm rounded-2xl bg-loadinglight animate-pulse dark:bg-darkmodeLight "></div>
            <div className="md:w-1/2  flex overflow-hidden justify-between p-3 items-center h-32 drop-shadow-sm rounded-2xl bg-loadinglight animate-pulse dark:bg-darkmodeLight "></div>
          </div>
        </div>
      )}
      <Footer/>
      </div>
  );
}

export default Ramadan;
