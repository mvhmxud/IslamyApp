function ListOfSurah({list, header , handler}) {
   
  return (
    <>
      <h1 className="md:w-4/5 rtl:text-right arabic md:text-left text-center mx-auto mt-12 text-2xl text-darkgreen ">
        {header}
      </h1>
      <div className="w-4/5  mt-10 mx-auto md:flex md:gap-9 md:justify-center flex-wrap transition-all delay-75">
        {list.length > 0 ? list.map((item) => (
          <div 
            onClick={()=>handler(item.id)}
            key={item.id}
            className=" md:w-1/3 cursor-pointer p-7 mb-5 flex flex-col items-center place-items-center dark:bg-darkmodeLight dark:text-white bg-white rounded-xl drop-shadow-sm"
          >
            <div className="rtl:order-2">{item.transliteration}</div>
            <div className="arabic text-maingreen">
              {item.name}
            </div>
          </div>
        )) : <div className=" text-maingreen font-bold arabic text-3xl">Found No surah  </div>}
      </div>
    </>
  );
}

export default ListOfSurah;
