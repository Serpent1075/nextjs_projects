'use client'
import React from 'react'
import { redirect, usePathname } from 'next/navigation'

const AuthComponent = () => {
  let authstate = false;
  const pathname = usePathname();
  
  if(!authstate) redirect(pathname+"/auth");
  return (
    <div>AuthComponent</div>
  )
}

export default AuthComponent