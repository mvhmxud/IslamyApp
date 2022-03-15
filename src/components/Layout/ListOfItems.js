import { Link } from "react-router-dom";

function ListOfItems({ header, list }) {
  
  return (
    <>
      <h1 className="md:w-4/5 rtl:text-right arabic md:text-left text-center mx-auto mt-12 text-2xl text-darkgreen ">
        {header}
      </h1>
      <div className="w-4/5 mt-10 mx-auto md:flex md:gap-9 md:justify-center flex-wrap transition-all delay-75">
        {list.map((item) => (
          <Link
            to={`/Quran/${item.id}`}
            key={item.id}
            className=" flex-col  md:w-1/3 p-7 mb-5 flex justify-center items-center dark:bg-darkmodeLight dark:text-white bg-white rounded-xl drop-shadow-sm"
          >
            <div className=" rtl:order-2">{item.reciter_name}</div>
            <div className="arabic text-maingreen">
              {item.translated_name.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ListOfItems;
