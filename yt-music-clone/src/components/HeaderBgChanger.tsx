"use client"
import useUIState from '@/hooks/useUIState'
import React, {useEffect} from 'react'

const HeaderBgChanger = ({imageSrc}:{imageSrc:string}) => {
  const { setHeaderImageSrc } = useUIState() as any;

  useEffect(() => {
    if (imageSrc) setHeaderImageSrc(imageSrc);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageSrc]);
  return (
    <></>
  )
}

export default HeaderBgChanger