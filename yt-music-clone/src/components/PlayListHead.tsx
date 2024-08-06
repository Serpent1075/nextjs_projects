"use client";
import React from 'react'
import IconButton from './elements/IconButton';
import Image from "next/image";
import { FiMoreVertical, FiPlay, FiFolderPlus } from 'react-icons/fi';
import { getRandomElementFromArray } from '@/lib/utils';
import WhiteButton from '@/components/elements/WhiteButton';
import DarkButton from '@/components/elements/DarkButton';
import usePlayerState from "@/hooks/usePlayerState";

const PlayListHead = ({playlist = {}}:{playlist:any}) => {
    const { playlistName, owner, songList } = playlist;
    const randomSong = getRandomElementFromArray(songList);
    const { addSongList } = usePlayerState();

    const onClickPlayList = () => {
        addSongList(songList);
    };

  return (
    <section>
        <div className="flex gap-[50px] flex-row">
            <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
                <Image alt="songImg" fill src={randomSong?.imageSrc} />
            </div>
            <article className="flex flex-col justify-center">
                <div className="font-bold text-[28px]">{playlistName}</div>
                <div className="text-neutral-400 mt-4 text-[14px]">
                    <div>{`EP - ${owner} - 2019`}</div>
                    <div>{`${songList.length}곡 - 15분`}</div>
                </div>
                <ul className="hidden lg:flex flex-row gap-4 mt-6">
                    <WhiteButton onClick={onClickPlayList}
                    className={"w-[85px] text-[14px]"} icon={<FiPlay />} label="재생" />
                    <DarkButton className={"w-[145px] text-[14px]"} icon={<FiFolderPlus />} label={"보관함에 저장"} />
                    <IconButton icon={<FiMoreVertical size={24}/>} />
                </ul>
            </article>
        </div>
        <ul className="flex flex-row gap-4 mt-6 lg:hidden">
            <WhiteButton onClick={onClickPlayList} className={"w-[85px] text-[14px]"} icon={<FiPlay />} label="재생" />
            <DarkButton className={"w-[145px] text-[14px]"} icon={<FiFolderPlus />} label={"보관함에 저장"} />
            <IconButton icon={<FiMoreVertical size={24}/>} />
        </ul>
    </section>
  )
}

export default PlayListHead