import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {cn} from "@/lib/utils";

const UserIcon = ({size='sm'}) => {
  return (
    <Avatar className={cn(
      size === "lg" ? "w-[56px] h-[56px]" : "w-[26px] h-[26px]"
      )}>
     <AvatarImage src="https://github.com/shadcn.png" />
     <AvatarFallback>CN</AvatarFallback>
    </Avatar>

  )
}

export default UserIcon