import { useRef } from "react";
import { FiSearch } from "react-icons/fi";

function Search(props) {
  const searchInputRef = useRef()
  return (

    <>
      <h1 className=" mt-12 text-2xl text-center text-darkgreen arabic ">
        إنا أنزلناه قرآنا عربيا لعلكم تعقلون{" "}
      </h1>
      <div className="w-2/3  drop-shadow-sm md:w-1/4 md:p-1 rounded-lg dark:bg-darkmodeLight bg-white mx-auto mt-5 flex ">
        <label htmlFor="search" className="w-1/6 grid place-items-center">
          <FiSearch className="text-md text-maingreen" />
        </label>
        <input
        ref={searchInputRef}
          onChange={()=>props.handler(searchInputRef.current.value)}
          id="search"
          autoComplete="off"
          className="w-full h-10 border-0   placeholder:font-['Tajawal'] dark:bg-darkmodeLight outline-none text-maingreen"
          placeholder={props.Placeholder}
          type={""}
        />
      </div>
    </>
  );
}

export default Search;
