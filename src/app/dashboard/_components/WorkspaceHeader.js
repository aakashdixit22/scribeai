import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader() {
  return (
    <div className='p-3 flex justify-between shadow-md'>
        <Image src={"/logo.svg"} alt="logo" width={140} height={100} />
        <UserButton/>
    </div>
  )
}

export default WorkspaceHeader