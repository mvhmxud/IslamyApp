import { IoMdClose } from "react-icons/io";
import { BsThreeDotsVertical, BsMoon, BsSun } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar({ darkModeHandler, isDarkMode , changeLanguageHandler }) {
  const isArabic = useSelector((state)=> state.TranslationSLice.isArabic)
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const menuHandler = () => {
    setIsMenuOpened((prevState) => !prevState);
  };
  const darkModetoggle = () => {
    darkModeHandler();
  };

  return (
    <>
      <nav className=" dark:bg-darkmodeLight flex bg-white h-15 py-3 drop-shadow-sm transition-all  ">
        <div className=" flex container justify-between">
          <Link
            to="/"
            className='text-maingreen  cursor-pointer font-bold'
          >
            ISLAMY
            <span className="text-darkgrey dark:text-darkmodeLighttext">
              .Live
            </span>
          </Link>

          <div
            onClick={menuHandler}
            className="cursor-pointer md:hidden text-xl text-maingreen"
          >
            {isMenuOpened ? (
              <IoMdClose className=" animate-pulse text-2xl" />
            ) : (
              <BsThreeDotsVertical className="animate-pulse" />
            )}
          </div>
          <div className={"hidden md:block"}>
            <ul className="list-none rtl:font-medium dark:text-darkmodeLighttext flex ">
              <li className="inline mx-4 rtl:order-1 cursor-pointer hover:text-maingreen transition-all ease-in-out delay-50">
                <Link to="/" className={isArabic ? 'arabic' : ''}>{isArabic ? 'الرئيسية' : "Home"}</Link>
              </li>
              <li className="inline mx-4  rtl:order-2 cursor-pointer hover:text-maingreen transition-all ease-in-out delay-50">
                <Link to="/contact-us"  className={isArabic ? 'arabic' : ''}>{isArabic ? 'تواصل معنا' : 'Contact us'}</Link>
              </li>
              <li className="inline mx-4 rtl:hidden arabic cursor-pointer rtl:order-3 hover:text-maingreen transition-all ease-in-out delay-50">
                <div onClick={changeLanguageHandler} > العربية </div>
              </li>
              <li className=" mx-4 hidden rtl:font-normal rtl:block cursor-pointer rtl:order-3  hover:text-maingreen transition-all ease-in-out delay-50">
                <div onClick={changeLanguageHandler} > English </div>
              </li>
              <li className="inline mx-4 cursor-pointer rtl:order-4 hover:text-maingreen transition-all ease-in-out delay-50">
                {!isDarkMode ? (
                  <BsMoon
                    onClick={darkModetoggle}
                    className="inline text-xl mb-1 font-semibold"
                  />
                ) : (
                  <BsSun
                    onClick={darkModetoggle}
                    className="inline text-xl mb-1 font-semibold"
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section
        className={`text-center animate-fade  p-5 transition-all h-60 dark:bg-darkmodeDark bg-white  ${
          isMenuOpened ? "block" : "hidden"
        }`}
      >
        <ul>
          <Link to='/' className=" text-darkgrey block dark:text-darkmodeLighttext    font-bold  transition-all ease-in-out w-full cursor-pointer p-3 hover:text-white delay-100 hover:bg-maingreen ">
          {!isArabic ? 'Home' : <span className="arabic">الرئيسية</span>}
          </Link>
          <Link to='/contact-us' className=" text-darkgrey block dark:text-darkmodeLighttext   font-bold transition-all ease-in-out w-full cursor-pointer p-3 hover:text-white delay-100 hover:bg-maingreen ">
          {!isArabic ? 'Contact us' : <span className="arabic ">تواصل معنا</span>}
          </Link>
          <li
            className=" text-darkgrey dark:text-darkmodeLighttext   font-bold transition-all ease-in-out w-full cursor-pointer p-3 hover:text-white delay-100 hover:bg-maingreen  "
            onClick={darkModetoggle}
          >
            {isDarkMode ? isArabic  ? <span className="arabic">وضع السطوع</span> : 'Light Mode'  : isArabic ? <span className="arabic" >الوضع المظلم</span> :  'Dark Mode'}
          </li>
          <li onClick={changeLanguageHandler} className=" text-darkgrey dark:text-darkmodeLighttext   font-bold transition-all ease-in-out w-full cursor-pointer p-3 hover:text-white delay-100 hover:bg-maingreen ">
            {isArabic ? 'English' : <span className="arabic">العربية</span>}
          </li>
        </ul>
      </section>
    </>
  );
}

export default NavBar;
