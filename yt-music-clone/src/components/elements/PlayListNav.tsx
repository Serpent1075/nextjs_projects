"use client";
import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import usePlayerState from '@/hooks/usePlayerState';


export interface PlayList {
  // Define the properties of the playlist object
  id: number;
  owner: string;
  playlistName: string;
  songList: Array<SongList>;
  // Add more properties if needed
}

interface SongList {
    // Define the properties of the song object
    name: string; 
    channelId: number; 
    channel: string; 
    src: string; 
    imageSrc: string;
    // Add more properties if needed
    
}

const PlayListNav = ({ playlist }: { playlist: PlayList }) => {
    const { addSongList } = usePlayerState();
    const { id, owner, playlistName, songList} = playlist

    const onClickPlay = () => {
        addSongList(songList);
    };

    return (
        <li className='mx-3 px-4 h-[56px] flex flex-row justify-between items-center
            hover:bg-neutral-700 rounded-lg group'>
            <div>
                <div className='text-[14px]'>{playlistName}</div>
                <div className="text-[12px] text-neutral-500">{owner}</div>
            </div>
            <div>
                <div onClick={onClickPlay} className="hidden group-hover:block cursor-pointer">
                <FaRegPlayCircle size={30}/>
                </div>
            </div>
        </li>
    )
}

export default PlayListNav