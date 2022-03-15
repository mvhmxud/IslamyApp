import { Link } from "react-router-dom";
import NavBar from "../components/Layout/navbar";
import {BiHomeSmile} from 'react-icons/bi'

function PageNotFound(props) {
    return (<div className=" min-h-screen bg-background dark:bg-darkmodeDark">
        <NavBar darkModeHandler={props.darkModeHandler} changeLanguageHandler={props.changeLanguageHandler} isDarkMode={props.isDarkMode}/>
            <div className="w-4/5 flex justify-center items-center gap-1 mx-auto mt-20 flex-col">

                <div className=" text-9xl text-maingreen ">404</div>
                <div className="text-darkgrey text-2xl font-bold">Ooops! Page Not Found</div>
                <Link to='/' className=" hover:text-maingreen flex flex-row-reverse gap-1 items-center transition-all"> <BiHomeSmile className="mb-1"/> Get back to home </Link>
            </div>
    </div>);
}

export default PageNotFound;