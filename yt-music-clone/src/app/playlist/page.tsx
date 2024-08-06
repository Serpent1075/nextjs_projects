import React from 'react'
import { permanentRedirect } from "next/navigation";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from '@/lib/utils';
import HeaderBgChanger from '@/components/HeaderBgChanger';
import PagePadding from '@/components/PagePadding';
import PlayListHead from '@/components/PlayListHead';
import SongCardRowExpand from '@/components/SongCardRowExpand'

interface PlaylistPageProps {
  searchParams:{
    list: string;
  };
}

const page = async (props: PlaylistPageProps) => {
  const playlist = await getPlaylistById(Number(props.searchParams.list));
  console.log(playlist);
  if(!playlist) permanentRedirect("/");
  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;
  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc}/>
      <div className="mt-12"></div>
      <PlayListHead playlist={playlist}/>
      <div className="mt-12"></div>
      <section className="flex flex-col gap-2">
      {playlist.songList.map((song, index)=>{
          return <SongCardRowExpand song={song} key={index} />;
        })}
      </section>
    </PagePadding>
  )
}

export default page