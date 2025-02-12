"use client"
import React, { useMemo } from 'react'
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { dummyPlaylistArray } from '@/lib/dummyData';
import PlayListNav from './PlayListNav';

const Navigator = () => {
  const pathname = usePathname();
  console.log(">>pathname",pathname);
  const routes = useMemo(()=>{
    return [
        {
            icon: <GoHome size={24}/>,
            label:"Home",isActive: pathname ==="/", href:"/"
        },
        {
            icon: <FiCompass size={24}/>,
            label:"Explore",isActive: pathname ==="/explore", href:"/explore"
        },
        {
            icon: <FiMusic size={20}/>,
            label:"Library",isActive: pathname ==="/library", href:"/library"
        }
    ];
  },[pathname]);
  return (
    <div>
        <section className="flex flex-col gap-2 p-4">
            {routes.map((route)=>{
                return <Link key={route.label} href={route.href}>
                    <div className={cn("text-[16px] flex flex-row items-center gap-4 hover:bg-neutral-700 rounded-lg p-2",
                        route.isActive && "bg-neutral-800"
                    )}>
                        {route.icon}
                        <span>{route.label}</span>
                    </div>
                </Link>
            })}
        </section>
        <section className="px-6">
            <div className="w-full h-[1px] bg-neutral-700"></div>
        </section>
        <section className="px-6">
            <div className="hover:bg-neutral-700 cursor-pointer flex flex-row items-center bg-neutral-800 my-6 rounded-3xl p-2 font-[200] justify-center gap-2">
                <FiPlus size={24}></FiPlus>
                <span>새 재생목록</span>
            </div>
        </section>
        <section>
            <ul className="flex flex-col">
            {dummyPlaylistArray.map((playlist) => {
                return <PlayListNav key={playlist.id.toString()} playlist={playlist}></PlayListNav>;
            })}
            </ul>
        </section>
    </div>
  )
}

export default Navigator