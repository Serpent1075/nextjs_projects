import React from 'react'
import HeaderBgChanger from '@/components/HeaderBgChanger';
import PagePadding from '@/components/PagePadding';
import { getChannelById } from '@/lib/dummyData';
import { permanentRedirect } from 'next/navigation';
import { getRandomElementFromArray } from '@/lib/utils';
import SongCardRowExpand from '@/components/SongCardRowExpand'
import PlayListCarousel from '@/components/PlayListCarousel';
import ChannelHead from '../components/ChannelHead';



interface ChannelPageProps {
  params:{
    id: string;
  };
}

const page = async (props: ChannelPageProps) => {
  const channel = await getChannelById(Number(props.params.id));
  console.log("channel", channel);
  if(!channel) permanentRedirect("/");
  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc}/>
      channel/[{props.params.id}]
      <div className="mt-[150px]"></div>
      <ChannelHead channel={channel}/>
      <section className="mt-[80px]">
        <div className=" text-[28px] font-bold">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song) =>{
              return <SongCardRowExpand song={song} key={song.name}/>
            })}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className=" text-[28px] font-bold">
          <PlayListCarousel 
            playlistArray={[channel.playlistArray]}
          />
        </div>
      </section>
      <section className="mt-[80px]">
      </section>
    </PagePadding>
  )
}

export default page