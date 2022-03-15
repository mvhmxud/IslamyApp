import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Layout/Footer";
import ListOfItems from "../components/Layout/ListOfItems";
import NavBar from "../components/Layout/navbar";
import { useDispatch ,useSelector } from "react-redux";
import { LoadingSliceActions } from "../store/LoadingSlice";
function QuranPage(props) {
  const isArabic = useSelector((state)=> state.TranslationSLice.isArabic)
  const isLoading = useSelector((state)=>state.LoadingSlice.Isloading)
  const dispatch = useDispatch();
  const [list, setlist] = useState([]);
  useEffect(() => {
    dispatch(LoadingSliceActions.setIsLoadingToTrue());
    axios
      .get("https://api.quran.com/api/v4/resources/recitations?language=ar")
      .then((res) => {
        setlist(
          res.data.recitations.filter(
            (reciter) => reciter.id != 8 && reciter.id != 2
          )
        );
      })
      .catch((err) => {
        dispatch(LoadingSliceActions.setIsErrorTotrue())
        setTimeout(() => {
          dispatch(LoadingSliceActions.setIsErrorToFalse())
        }, 3000);
      })
      .finally(() => {
        dispatch(LoadingSliceActions.setIsLoadingToFalse());
      });
  }, []);
  const searchHandler = (value) => {
      console.log(value)
      
  };

  return (
    <div className="bg-background min-h-screen dark:bg-darkmodeDark">
      <NavBar
        darkModeHandler={props.darkModeHandler}
        isDarkMode={props.isDarkMode}
        changeLanguageHandler={props.changeLanguageHandler}
      />
     {isLoading && <div className="w-4/5 mt-10 mx-auto md:flex gap-5 md:justify-center flex-wrap ">
      <div className=" flex-col h-20 md:w-1/3 mb-5 flex justify-center items-center dark:bg-darkmodeLight bg-loadinglight rounded-xl  animate-pulse"></div>      
      <div className=" flex-col h-20 md:w-1/3 mb-5 flex justify-center items-center dark:bg-darkmodeLight bg-loadinglight rounded-xl  animate-pulse"></div>      
      <div className=" flex-col h-20 md:w-1/3 mb-5 flex justify-center items-center dark:bg-darkmodeLight bg-loadinglight rounded-xl  animate-pulse"></div>      
      <div className=" flex-col h-20 md:w-1/3 mb-5 flex justify-center items-center dark:bg-darkmodeLight bg-loadinglight rounded-xl  animate-pulse"></div>      
      <div className=" flex-col h-20 md:w-1/3 mb-5 flex justify-center items-center dark:bg-darkmodeLight bg-loadinglight rounded-xl  animate-pulse"></div>      
      <div className=" flex-col h-20 md:w-1/3 mb-5 flex justify-center items-center dark:bg-darkmodeLight bg-loadinglight rounded-xl  animate-pulse"></div>      
     </div>}
     {!isLoading && <ListOfItems header={isArabic ? 'كل القراء' :"All Reciters"} list={list} />}
      
      <Footer />
    </div>
  );
}

export default QuranPage;
