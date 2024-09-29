"use client"
import React, { useMemo } from 'react'
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
            label:"UrMy List",isActive: pathname ==="/service/urmylist", href:"/service/urmylist"
        },
        {
            icon: <FiMusic size={20}/>,
            label:"Candidates",isActive: pathname ==="/service/candidatelist", href:"/service/candidatelist"
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
    </div>
  )
}

export default Navigator