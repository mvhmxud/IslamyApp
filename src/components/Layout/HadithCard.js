import { useSelector } from "react-redux";
import { TranslationSLice } from "../../store/TranslationSLice";

function HadithCard(props) {
  const isArabic = useSelector((state)=> state.TranslationSLice.isArabic)
    return (<div className="md:w-[49%] w-4/5 mx-auto flex p-5 gap-3 flex-col bg-white rounded-2xl shadow-sm dark:bg-darkmodeLight ">
        <div className="rounded-2xl flex h-10 ">
            {isArabic &&<div className="bg-maingreen text-white rounded-lg p-2 arabic">{props.typeAr}</div>}
            {!isArabic &&<div className="bg-maingreen text-white rounded-lg p-2 arabic">{props.type}</div>}
        </div>
        {isArabic && <div className="rounded-2xl text-darkgrey arabic dark:text-white">{props.text}</div>}
        {!isArabic && <div className="rounded-2xl text-darkgrey  dark:text-white">{props.textEn}</div>}
    </div>);
}

export default HadithCard;