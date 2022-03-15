import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Layout/Footer";
import HadithCard from "../components/Layout/HadithCard";
import NavBar from "../components/Layout/navbar";
import { LoadingSliceActions } from "../store/LoadingSlice";
import { TranslationSLice } from "../store/TranslationSLice";
function Hadith(props) {
  const [filter, SetFilter] = useState("");
  const disatch = useDispatch();
  const isLoading = useSelector((state) => state.LoadingSlice.Isloading);
  const isArabic = useSelector((state) => state.TranslationSLice.isArabic);
  const [list, setList] = useState([]);
  useEffect(() => {
    disatch(LoadingSliceActions.setIsLoadingToTrue());
    axios
      .get("https://islamy-live-default-rtdb.firebaseio.com/Ramadan.json")
      .then((res) => {
        for (const key in res.data) {
          {
            const element = res.data[key];
            setList((prev) => [...prev, {...element , key}]);
          }
        }
      })
      .catch((err) => {
        disatch(LoadingSliceActions.setIsLoadingToFalse());
        disatch(LoadingSliceActions.setIsErrorTotrue());
        setTimeout(() => {
          disatch(LoadingSliceActions.setIsErrorToFalse());
        }, 3000);
      })
      .finally(() => {
        disatch(LoadingSliceActions.setIsLoadingToFalse());
      });
  }, []);

  const filteredList = (list) => {
    if(filter === ''){
      return list
    }else{
      return list.filter((items)=>items.type === filter)
    }
  };
  return (
    <div className=" bg-background dark:bg-darkmodeDark">
      <NavBar
        darkModeHandler={props.darkModeHandler}
        isDarkMode={props.isDarkMode}
        changeLanguageHandler={props.changeLanguageHandler}
      />
      <div className="w-4/5 mx-auto  flex justify-center mt-10">
      <button className=" bg-white dark:bg-darkmodeLight dark:text-white dark:hover:text-maingreen p-2 rounded-xl shadow-sm text-darkgrey hover:text-maingreen transition-all m-5" onClick={() => SetFilter("")}>{isArabic ? <span className='arabic'>الكل</span> : "All"}</button>
      <button className=" bg-white dark:bg-darkmodeLight dark:text-white dark:hover:text-maingreen p-2 rounded-xl shadow-sm text-darkgrey hover:text-maingreen transition-all m-5" onClick={() => SetFilter("dua")}>{isArabic ? <span className='arabic'>دعاء</span> : 'Dua'}</button>
      <button className=" bg-white dark:bg-darkmodeLight dark:text-white dark:hover:text-maingreen p-2 rounded-xl shadow-sm text-darkgrey hover:text-maingreen transition-all m-5" onClick={() => SetFilter("hadith")}>{isArabic ? <span className='arabic'>حديث</span> : 'Hadith'}</button>
      </div>
        {isLoading && <div className="md:w-5/6 items-center flex md:flex-row flex-col justify-center mx-auto flex-wrap md:gap-5 gap-2">
          <div className="rounded-2xl md:w-[49%] w-[90%]  h-52 bg-loadinglight dark:bg-darkmodeLight animate-pulse "></div>
          <div className="rounded-2xl md:w-[49%] w-[90%]  h-52 bg-loadinglight dark:bg-darkmodeLight animate-pulse "></div>
          <div className="rounded-2xl md:w-[49%] w-[90%]  h-52 bg-loadinglight dark:bg-darkmodeLight animate-pulse "></div>
          <div className="rounded-2xl md:w-[49%] w-[90%]  h-52 bg-loadinglight dark:bg-darkmodeLight animate-pulse "></div>
        </div>}
      {!isLoading && <div className="md:w-5/6 flex md:flex-row flex-col justify-center mx-auto flex-wrap md:gap-5 gap-2 ">
      {filteredList(list).map((key) => (
        <HadithCard key={key.key} text={key.text} textEn={key.textEn} type={key.type} typeAr={key.typeAr}  />
      ))}
      </div>}
      {/* instead of div we will return the card*/}
      <Footer/>
    </div>
  );
}

export default Hadith;
