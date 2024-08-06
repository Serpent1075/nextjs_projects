"use client";
import Reac, { useCallback, useEffect } from 'react'
import Image from 'next/image';
import {useAudio} from 'react-use';
import { Slider as PlayerSlider } from '@/components/ui/playerSlider'
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoShuffle, IoVolumeHighOutline } from 'react-icons/io5';
import { AiOutlinePause, AiFillCaretUp } from 'react-icons/ai';
import { RxLoop } from 'react-icons/rx';
import usePlayerState from '@/hooks/usePlayerState';
import { ClipLoader } from 'react-spinners';
import { RiPlayFill } from "react-icons/ri";





const PlayerContent = () => {
  const { activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext } = usePlayerState()
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src as string,
    autoPlay: true,
  });

  //console.log(activeSong?.src)
  //console.log(state.buffered?.length)

  const isLoading = activeSong?.src && state.buffered?.length === 0;
  
  const onClickPrevBtn = () => {
    if(state.playing && state.time > 10) {
      controls.seek([0]);
      return;
    }
    if(prevPlayerQueue.length === 0) return;
    playBack();
  }
  const onClickStartBtn = () => {
    if(activeSong){
      controls.play();
    } else {
      playNext();
    }
  };
  const onClickPausetBtn = () => {
    controls.pause();
  };
  const onClickNextBtn = useCallback(() => {
    if(nextPlayerQueue.length === 0){
      controls.pause();
    } else {
      playNext();
    }
  },[controls, playNext, nextPlayerQueue]);

  useEffect(() => {

    ref?.current?.addEventListener('ended', onClickNextBtn);
    return () => {
      ref?.current?.removeEventListener('ended', onClickNextBtn);
    }
  }, [onClickNextBtn, ref])

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider className="w-full" defaultValue={[0]} 
        value={[state.time]}
        onValueChange={(value) => {
          console.log("value", value);
          controls.seek(value);
        }}
        max={state.duration}
        />
      </div>
      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
      <div className = "h-full flex flex-row justify-center items-center gap-1 lg:gap-8">
        <IoPlaySkipBackSharp size={24} className="cursor-pointer" onClick={onClickPrevBtn}/>
        {
          isLoading ? (
            <ClipLoader color="#FFF" />
          ) : state.playing ? (
                <AiOutlinePause size={40} className="cursor-pointer" onClick={onClickPausetBtn}/> 
              )
              : ( 
                <RiPlayFill size={40} className="cursor-pointer" onClick={onClickStartBtn}/>
              )
        }
        
        <IoPlaySkipForwardSharp size={24} className="cursor-pointer" onClick={onClickNextBtn}/>
        </div>
        <article>
          <div className=" flex flex-row gap-4 items-center">
            <div className=" relative w-[40px] h-[40px]">
              <Image fill className="object-cover" src={activeSong?.imageSrc as string} alt="img"></Image>
            </div>
            <div className="flex flex-col">
              <div>{activeSong?.name}</div>
              <div className="text-neutral-500 text-[14px]">{activeSong?.channel} - 조회수 7.8만회 - 좋아요 1.7천개</div>
            </div>
          </div>
        </article>
        <div className="flex flex-row gap-2">
          <div className="hidden lg:flex flex-row gap-2">
            <IoVolumeHighOutline size={24} className="cursor-pointer"/>
            <IoShuffle size={24} className="cursor-pointer"/>
            <RxLoop size={24} className="cursor-pointer"/>
            <AiFillCaretUp size={24} className="cursor-pointer"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlayerContent