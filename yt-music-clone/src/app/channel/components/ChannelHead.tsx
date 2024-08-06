"use client";
import React from 'react'
import DarkButton from '@/components/elements/DarkButton';
import WhiteButton from '@/components/elements/WhiteButton';
import { FiShuffle } from 'react-icons/fi';
import usePlayerState from "@/hooks/usePlayerState";

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array]; // 원본 배열 복사
  
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // 0 ~ i 사이의 랜덤 인덱스
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // swap
    }
  
    return newArray;
}

const ChannelHead = ({channel}:{channel:any}) => {
    const { addSongList } = usePlayerState();
    const onClickShuffle = () => {
        addSongList(shuffleArray(channel?.songList));
    };
  return (
    <section>
        <div className="text-[28px] font-bold">{channel.name}</div>
        <article className="mt-4 lg:hidden">
          <div>
            <DarkButton icon={<></>} className={"w-[230px] flex justify-center"} label={"구독중 4.18만"} />
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <WhiteButton onClick={onClickShuffle} className={""} label={"셔플"} icon={<FiShuffle size={16}/>} />
            <WhiteButton onClick={onClickShuffle} className={""} label={"뮤직 스테이션"} icon={<FiShuffle size={16}/>} />
          </div>
        </article>
        <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
          <WhiteButton onClick={onClickShuffle} className={""} label={"셔플"} icon={<FiShuffle size={16}/>} />
          <WhiteButton onClick={onClickShuffle} className={""} label={"뮤직 스테이션"} icon={<FiShuffle size={16}/>} />
          <DarkButton icon={<></>} className={"w-[230px] flex justify-center"} label={"구독중 4.18만"} />
        </div>
      </section>
  )
}

export default ChannelHead