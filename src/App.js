import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AudioPlayer from "./components/Layout/audioPlayer";
import Error from "./components/Layout/error";
import LoadingBar from "./components/Layout/Loading";
import Admin from "./Pages/admin";
import Hadith from "./Pages/HadithAndDua";
import HomePage from "./Pages/HomePage";
import Imsakyah from "./Pages/Imsakyah";
import PageNotFound from "./Pages/PageNotFound";
import PrayerTimes from "./Pages/PrayetTimes";
import QuranPage from "./Pages/QuranPage";
import Ramadan from "./Pages/Ramadan";
import ReciterPage from "./Pages/ReciterPage";
import { LoadingSliceActions } from "./store/LoadingSlice";
import { TranslationSliceActions } from "./store/TranslationSLice";
import ContactUs from "./Pages/ContactUs";

function App() {
  const dispatch =useDispatch()
  const isLoading = useSelector((state)=>state.LoadingSlice.Isloading)
  const isError = useSelector((state)=>state.LoadingSlice.isError)
  const isArabic = useSelector((state)=> state.TranslationSLice.isArabic)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPlayerOpened, setisPlayerOpened] = useState(false);

 

  const changeLanguageHandler=async()=>{
    dispatch(TranslationSliceActions.changeLanguage())
  }
  const DarkModeHandler = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  
  const PlayerHandler=(value)=>{
    setisPlayerOpened(value)
  }
  
  const loading =()=>{
    dispatch(LoadingSliceActions.setIsLoadingToTrue())
  }
  
  

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className={`${isDarkMode ? "dark " : ""} `}>
      {isLoading ? <LoadingBar/>:''}
      {isError && !isLoading && <Error/>}
      {isPlayerOpened ? <AudioPlayer isDarkMode isPlayerOpened PlayerHandler={PlayerHandler}  /> : ''}
      <Switch>
        <Route path="/" exact>
          <HomePage darkModeHandler={DarkModeHandler} changeLanguageHandler={changeLanguageHandler} isDarkMode={isDarkMode} />
        </Route>
        <Route path='/contact-us'>
          <ContactUs  darkModeHandler={DarkModeHandler} changeLanguageHandler={changeLanguageHandler} isDarkMode={isDarkMode}/>
        </Route>
        {/* <Route path="/admin" exact>
            <Admin/>
        </Route> */}
        <Route path="/Quran" exact >
          <QuranPage
            darkModeHandler={DarkModeHandler}
            isDarkMode={isDarkMode}
            changeLanguageHandler={changeLanguageHandler}
          />
        </Route>
        <Route path="/Quran/:id">
          <ReciterPage darkModeHandler={DarkModeHandler} changeLanguageHandler={changeLanguageHandler} isDarkMode={isDarkMode} PlayerHandler={PlayerHandler} />
        </Route>
        <Route path="/PrayerTimes">
          <PrayerTimes
            darkModeHandler={DarkModeHandler}
            isDarkMode={isDarkMode}
            changeLanguageHandler={changeLanguageHandler}
          />
        </Route>
        <Route path="/Ramadan" exact>
          <Ramadan darkModeHandler={DarkModeHandler}
          changeLanguageHandler={changeLanguageHandler}
          isDarkMode={isDarkMode} />
        </Route>
        <Route path="/Ramadan/Hadith-dua" exact>
         <Hadith  darkModeHandler={DarkModeHandler}
           isDarkMode={isDarkMode}
           changeLanguageHandler={changeLanguageHandler} /> 
        </Route>
        <Route path="/Ramadan/imsakyah" exact>
         <Imsakyah
           darkModeHandler={DarkModeHandler}
           isDarkMode={isDarkMode}
           changeLanguageHandler={changeLanguageHandler}
         />
          
         </Route>
        <Route path="*">
          <PageNotFound
            darkModeHandler={DarkModeHandler}
            isDarkMode={isDarkMode}
            changeLanguageHandler={changeLanguageHandler}
          />
        </Route>
       
      </Switch>
    </div>
  );
}

export default App;
