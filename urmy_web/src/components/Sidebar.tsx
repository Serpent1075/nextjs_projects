"use client";

import React, { ReactNode } from 'react';
import Logo from './elements/Logo';
import useCandidateState from '@/hooks/useCandidateState';
import Navigator from './elements/Navigator';

import { cn } from '@/lib/utils';

const Sidebar = ({children}: { children: ReactNode }) => {
  const { isVisibleCandidate } = useCandidateState();
  
  return (
    <div className={cn("flex flex-row h-full", isVisibleCandidate && "h-[calc(100vh-72px)]")}>
      <nav className="hidden lg:block w-[300px] border-r-[1px] border-neutral-600">
        <div className='p-[24px]'>
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="w-full lg:w-[calc(100% - 300px)]">
          {children}
      </div>
        
    </div>
  )
}

export default Sidebar