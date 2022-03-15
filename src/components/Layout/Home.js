import { useSelector } from 'react-redux';
import img1 from '../../images/main1.png'
function Home() {
  const isArabic = useSelector((state)=> state.TranslationSLice.isArabic)
    
    return (<>
    <header className=' dark:bg-darkmodeLight  bg-white flex md:w-4/5 md:h-70   w-4/5 mx-auto mt-10 md:mt-6 justify-between transition-all pb-3 md:pb-0 md:flex-row flex-col  items-center h-30 rounded-3xl drop-shadow-sm '>
        {!isArabic && <div className=' dark:text-darkmodeLighttext md:order-first md:w-1/3 text-sm text-center order-2  md:ml-10 md:text-2xl'><span className='text-maingreen font-semibold'>Prayer Times</span>, Listen to <span className='text-maingreen font-semibold'>Quran</span> by your <span className='text-maingreen font-semibold'>favourite reciters</span> and more!</div>}
        {isArabic && <div className=' arabic mr-3 dark:text-darkmodeLighttext md:order-first md:w-1/3 text-sm text-center order-2  md:ml-10 md:text-2xl'><span className='text-maingreen font-semibold'>مواقيت الصلاة</span> , استمع الي <span className='text-maingreen font-semibold '>القرآن الكريم </span> بصوت <span className='text-maingreen font-semibold'>قرائك المفضلين</span> والمزيد</div>}
        <div className='lg:w-1/3 '><img className=' md:-order-last w-1/2 md:w-3/4 rtl:scale-100 -scale-x-100 text-center rounded-full md:rounded-none   mx-auto -translate-y-10  md:translate-y-0' src={img1} alt='muslim man'/></div>
    </header>
    </>);
}

export default Home;