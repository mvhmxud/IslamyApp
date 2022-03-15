import { GoLocation } from "react-icons/go";
import {WiSunrise ,WiDaySunnyOvercast ,WiSunset ,WiNightAltPartlyCloudy} from 'react-icons/wi'
import {MdOutlineWbSunny } from 'react-icons/md';
import { useEffect } from "react";
import { useSelector } from "react-redux";

function PrayerTimesCard({day}) {
  const isArabic = useSelector((state)=> state.TranslationSLice.isArabic)
    return (<div className=" bg-background  text-darkgrey  dark:bg-darkmodeDark">    
    <div className=" w-11/12 md:h-[100%] md:w-2/3 mx-auto">
      <div className="w-full text-center dark:bg-darkmodeLight bg-white rounded-2xl drop-shadow-sm mt-16  p-5 grid place-items-center">
        <div className="md:text-2xl dark:text-white text-sm  font-light md:mb-1">
           <span className="md:text-3xl mt-1  text-xl rtl:hidden block text-maingreen font-normal">{day.date.gregorian.weekday.en}</span>
          <span className="md:text-3xl mt-1  text-xl ltr:hidden block arabic text-maingreen font-normal">{day.date.hijri.weekday.ar}</span>
          <div dir='ltr' className='mt-1' >{day.date.readable} / {day.date.hijri.day+' ' +day.date.hijri.month.en + ' '+day.date.hijri.year}</div>
        </div>
        <div className="text-xs mt-2 dark:text-white md:text-base flex gap-1 justify-center font-normal items-center">
          <GoLocation  className="mb-1 font-bold text-maingreen"/>
          <span>{day.meta.timezone}</span>
        </div>
      </div>
      <div className="flex gap-2   wrap mt-8">
          <div className="md:w-[33.33%] w-full bg-white flex flex-col gap-3  dark:bg-darkmodeLight drop-shadow-sm h-24 rounded-2xl p-2 md:px-4">  <span className="  text-maingreen text-left md:text-lg text-sm flex items-center"><WiSunrise className="md:mx-2"/>{isArabic ? <span className="arabic">صلاة الفجر</span> : 'Al-fajr'}</span>
          <div className="text-center dark:text-white font-medium md:text-2xl">{day.timings.Fajr}</div> </div>
          <div className="md:w-[33.33%] w-full bg-white flex flex-col gap-3  dark:bg-darkmodeLight drop-shadow-sm h-24 rounded-2xl p-2 md:px-4">  <span className="  text-maingreen text-left md:text-lg text-sm flex items-center"><MdOutlineWbSunny className="md:mx-2"/>{isArabic ? <span className="arabic">صلاة الظهر</span> : 'Al-Zuhr'}</span>
          <div className="text-center dark:text-white font-medium md:text-2xl">{day.timings.Dhuhr}</div> </div>
          <div className="md:w-[33.33%] w-full bg-white flex flex-col gap-3  dark:bg-darkmodeLight drop-shadow-sm h-24 rounded-2xl p-2 md:px-4">  <span className="  text-maingreen text-left md:text-lg text-sm flex items-center"><WiDaySunnyOvercast className="md:mx-2"/>{isArabic ? <span className="arabic">صلاة العصر</span> : 'Al-Asr'}</span>
          <div className="text-center dark:text-white font-medium md:text-2xl">{day.timings.Asr}</div> </div>
          
      </div>
      <div className="flex gap-4 mb-16 flex-row md:flex-row  mt-8">
          <div className="w-1/2 bg-white p-2 md:p-5 flex justify-between items-center  dark:bg-darkmodeLight drop-shadow-sm rounded-2xl h-24"> <span className="flex  md:text-2xl text-maingreen items-center md:mx-2"><WiSunset className="md:mx-2 "/>{isArabic ? <span className="arabic">صلاة المغرب</span> :'Maghrib'}</span>
          <div className="font-semibold text-sm dark:text-white md:text-2xl">{day.timings.Maghrib}</div></div>
          <div className="w-1/2 bg-white md:p-5 p-2 flex justify-between items-center  dark:bg-darkmodeLight drop-shadow-sm rounded-2xl h-24"> <span className="flex  md:text-2xl text-maingreen items-center md:mx-2"><WiNightAltPartlyCloudy className="md:mx-2 "/>{isArabic ? <span className="arabic">صلاة العشاء</span> : 'Al-Isha'}</span>
          <div className="font-semibold text-sm dark:text-white md:text-2xl">{day.timings.Isha}</div></div>
          

      </div>
    </div>
  </div>);
}

export default PrayerTimesCard;