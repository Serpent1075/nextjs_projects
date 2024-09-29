"use client";

import React, { useState, useEffect, useRef } from 'react';
import Logo from './elements/Logo';
import Navigator from './elements/Navigator';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const HeaderDrawer = ({children}: {children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        {/* 로고 */}
        {/* 네비게이션+재생목록 */}
        <div className="py-3">
          <div className="px-3">
          <Logo isInDrawer onClickClose={() => setIsOpen(false)} />
          </div>
          <Navigator/>
        </div>
      </DrawerContent>
    </Drawer>

  )
}

const Header = ({children}: {children: React.ReactNode}) => {

  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef<HTMLHeadingElement>(null);
  

  return (
   <header ref={headRef} className="relative overflow-y-auto w-full h-full">
    
    <HeaderDrawer>
            <article className="lg:hidden">
              <Logo />
            </article>
          </HeaderDrawer>
     <section className="relative">{children}</section>
   </header>
  )
}

export default Header