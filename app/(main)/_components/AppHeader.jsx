import { UserBotton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

function AppHeader(props) {
    return (
        <div className='p-3 shadow-sm flex justify-bnetween items-center'>
            <Image src={'/logo.svg'} alt='logo' width={160} height={200} />
            <UserBotton />
        </div>
    )
}

export default AppHeader

