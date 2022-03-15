import img2 from "../images/img2.png";
import img4 from "../images/ramadan.png";
import { FaQuran } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function QuickLink() {
  const isArabic = useSelector((state)=> state.TranslationSLice.isArabic)
  return (
    <section className="mt-10">
      <div className="container md:w-4/5 ">
        <h1 className="  md:ml-2 rtl:text-right text-center md:text-left text-2xl font-medium  text-maingreen">
          {isArabic ? <span className="arabic"> الوصول السريع</span> : 'Quick Links'}
        </h1>
      </div>

      <div className="md:flex md:gap-10 md:w-4/5 mx-auto">
        {/* Quran Link */}
        <Link to={'/Quran'} className=" w-5/6 rounded-xl \ overflow-hidden h-48 mx-auto mt-5 px-5 items-center flex  mb-2 justify-between drop-shadow-md dark:bg-darkmodeLight bg-white h-30">
          {!isArabic &&<div className=" text-sm md:text-xl dark:text-darkmodeLighttext text-darkgrey">
            Listen to <span className="text-maingreen">Quran</span> with your{" "}
            <span className="text-maingreen">favourite reciters</span>
          </div>}
          {isArabic && <div className=" arabic text-sm md:text-xl dark:text-darkmodeLighttext text-darkgrey">
            استمع الي <span className="text-maingreen">القرآن الكريم </span> بصوت{" "}
            <span className="text-maingreen">قرائك المفضلين</span>
          </div> }
          <div className="w-11/12 scale-150 ">
            <FaQuran className=" rtl:md:ml-0 rtl:md:mr-20 md:ml-20 ml-5 text-8xl -rotate-12 opacity-10" />
          </div>
        </Link>
      {/* Prayer */}
        <Link to={'/PrayerTimes'} className=" w-5/6 rounded-3xl \ overflow-hidden h-48 mx-auto mt-5 px-5 items-center flex mb-2 justify-between drop-shadow-md bg-maingreen h-30">
          {!isArabic && <div className=" text-sm md:text-xl w-100 text-white">
            Get <span className="text-darkgrey">prayer times</span> (salah
            times) for your current location
          </div>}
          {isArabic && <div className=" arabic  text-sm md:text-xl w-100 text-white">
            معرفة <span className="text-darkgrey"> مواقيت الصلاة </span> حسب موقعك الجغرافي
          </div> }
          <div className="">
            <img className=" rtl:translate-x-0 translate-x-8 w-fit" src={img2} />
          </div>
        </Link>

      </div>
      {/* Ramadan */}
      <Link to={'/ramadan'}  className=" w-5/6 md:w-4/5  rounded-3xl \ overflow-hidden h-48 mx-auto mt-5 px-5 items-center flex  mb-2 justify-between drop-shadow-md dark:bg-darkmodeLight bg-white h-30">
        <div className=" text-xs  md:text-2xl  w-2/3 dark:text-darkmodeLighttext text-darkgrey">
          <span className="text-bold  text-maingreen">{isArabic ? <span className="arabic">رمضان 2022</span> : 'Ramadan 2022'} </span>
          <br />
          {isArabic ? <span className="arabic">امساكية رمضان , ادعية, احاديث والمزيد</span>:'imsakeyah, Dua, Azkar and more'}
        </div>
        <div className="md:w-1/2  md:transform-none scale-150 w-2/4  flex justify-center ">
          <img
            className=" object-cover scale-150 md:transform-none  mx-auto "
            src={img4}
          />
        </div>
      </Link>
      <div className="w-2/3 font-medium md:translate-y-16 md:w-1/2 md:text-xl text-sm  text-center arabic  my-10 mx-auto flex justify-center text-darkgreen ">
        الذين آمنوا لا تلهكم أموالكم ولا أولادكم عن ذكر الله ومن يفعل ذلك فأولئك
        يا أيها هم الخاسرون
      </div>
          
    </section>
  );
}

export default QuickLink;
