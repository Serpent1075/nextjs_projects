"use client";
import React from 'react'
import useUIState from "@/hooks/useUIState";
import { homeCategoryList } from '@/lib/dummyData';
import { cn } from '@/lib/utils';


interface UIState {
    homeCategory: string;
    headerImageSrc: string;
    setHomeCategory: (category: string) => void;
    setHeaderImageSrc: (src: string) => void;
}

const Category = () => {
    const { homeCategory, headerImageSrc, setHomeCategory, setHeaderImageSrc } = useUIState() as UIState;

    const onClickCategory = (item: any) => {
        if(homeCategory === item.label){
            setHeaderImageSrc("");
            setHomeCategory("");
        } else {
            setHeaderImageSrc(item.src);
            setHomeCategory(item.label);
        }
    }

  return (
    <ul className="max-x-full overflow-x-auto flex flex-row gap-4 ">{
        homeCategoryList.map((item)=>{
            return <li 
            onClick={() => onClickCategory(item)}
            key={item.label} 
            className={
                cn(
                    "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer",
                    item.label === homeCategory && "bg-white text-black hover:bg-white"
                )
            }>
                {item.label}
            </li>
        })}
    </ul>
  )
}

export default Category