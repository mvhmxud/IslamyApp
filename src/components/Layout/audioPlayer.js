import { useEffect, useRef, useState } from "react";
import React from "react";
import { FaPause, FaPlay, FaClose, FaLastfm } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { TimeCalculator } from "../../Hooks & Functions/TimeCalculator";
import { useSelector } from "react-redux";
const AudioPlayer = (props) => {
  const currentSurah = useSelector((state) => state.PlayerSlice.currentSurah)
  const audioRef = useRef();
  const progressBarRef = useRef();
  let intervalId = useRef(null);
  
  const [isPlaying, setIsplaying] = useState(false);
  const [totalTime, setTotalTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(()=>{
    setIsplaying(false)
    setCurrentTime(TimeCalculator(0))
  },[currentSurah.src])

  const playHandler = () => {
  
    setIsplaying(true);
    setTotalTime(TimeCalculator(audioRef.current.duration));
    audioRef.current.play();
    progressBarRef.current.max = Math.floor(audioRef.current.duration);

    intervalId.current = setInterval(() => {
      setCurrentTime(TimeCalculator(audioRef.current?.currentTime));
      progressBarRef.current.style.setProperty("--seek-before-width",`${(progressBarRef.current.value / progressBarRef.current.max) * 100}%`);
      progressBarRef.current.value = Math.floor(audioRef.current.currentTime);
    },10);
    
  };
  useEffect(()=>{
    if(currentTime === totalTime){
      setIsplaying(false)
    }
  },[currentTime , totalTime])
  const pauseHandler = () => {
    audioRef.current.pause();
    clearInterval(intervalId)
    setIsplaying(false);
  };

  const changeRangerHandler = () => {
      audioRef.current.currentTime = progressBarRef.current.value;
      progressBarRef.current.style.setProperty(
        "--seek-before-width",
        `${(progressBarRef.current.value / progressBarRef.current.max) * 100}%`
      );
      setCurrentTime(TimeCalculator(audioRef.current.currentTime));
  };

  
  const stopHandler = () => {
    setIsplaying(false);
    clearInterval(intervalId.current);
    setCurrentTime(TimeCalculator(0))
    setTotalTime(TimeCalculator(0));
    audioRef.current.pause();
    audioRef.current.value = 0;
    props.PlayerHandler(false);
  };

  return (
    <div dir="ltr" className=" flex  gap-3 md:gap-5 py-2 justify-center w-full h-[64px] rounded-t-2xl z-50 dark:bg-darkmodeLight  bg-white shadow-top fixed bottom-0">
      <audio
        hidden
        ref={audioRef}
        src={
          currentSurah.src
        }
      />
      {/*title  */}
      <div className=" shrink text-center dark:text-white  text-xs my-auto md:text-base">
        <div>{currentSurah.name[0].transliteration}</div>
        <div className="arabic text-maingreen ">{ currentSurah.name[0].name}</div>
      </div>
      {/* play and pause button  */}
      <div className=" grid place-items-center w-8 h-8 my-auto shadow-inner  md:w-10 md:h-10 cursor-pointer rounded-full dark:bg-darkmodeDark bg-background">
        {!isPlaying ? (
          <FaPlay
            onClick={playHandler}
            className="w-full  md:text-xl text-sm ml-1 text-maingreen "
          />
        ) : (
          <FaPause
            onClick={pauseHandler}
            className="w-full font-thin text-maingreen md:text-xl text-sm "
          />
        )}
      </div>
      {/*  time */}
      <div className="my-auto text-xs text-maingreen   ">{currentTime ? currentTime : '00:00'}</div>
      {/* Progress bar  */}

      <input
        type="range"
        value={"0"}
        ref={progressBarRef}
        className={"progressBar shrink"}
        onChange={changeRangerHandler}
      />

      {/* <div className="w-1/4 md:w-1/3 h-1 rounded-xl dark:bg-darkmodeDark bg-background my-auto">
        <div className="w-1/3 rounded-xl bg-maingreen h-1"></div>
      </div> */}

      {/* total time */}
      <div className="my-auto text-xs text-maingreen ">{totalTime ? totalTime : '00:00'}</div>
      <div
        onClick={stopHandler}
        className="my-auto text-lg text-maingreen cursor-pointer hover:scale-[1.2]   transition-all"
      >
        <AiOutlineClose />
      </div>
      <div>
      </div>
    </div>
  );
};

export default AudioPlayer;
