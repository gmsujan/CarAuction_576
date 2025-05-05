'use client'

import { useParamsStore } from '@/hooks/useParamsStore';
import { usePathname} from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaCar } from 'react-icons/fa';

export default function Logo() {
    const router = useRouter();
    const pathname = usePathname();

    function doReset() {
        if (pathname !== '/') router.push('/');
        reset();
    }
    
    const reset = useParamsStore(state => state.reset)

    return (
        <div onClick={doReset} className='cursor-pointer flex items-center gap-2 text-3xl font-semibold text-red-500'>
            <FaCar size={34}/>
            <div>Auctions</div>
        </div>
    )
}
