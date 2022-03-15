import Footer from "../components/Layout/Footer";
import Home from "../components/Layout/Home";
import NavBar from "../components/Layout/navbar";
import QuickLink from "../components/QuickLink";

function HomePage(props) {
  return (
    <main className=" bg-background dark:bg-darkmodeDark  overflow-hidden"> 
      <NavBar darkModeHandler={props.darkModeHandler} isDarkMode={props.isDarkMode} changeLanguageHandler={props.changeLanguageHandler} />
      <Home/>
      <QuickLink/>
      <Footer/>
    </main>
  );
}

export default HomePage;
