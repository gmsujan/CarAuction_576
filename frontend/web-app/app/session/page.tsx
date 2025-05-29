import { auth } from '@/auth';
import React from 'react'
import Heading from '../components/Heading';
import AuthTest from './AuthTest';

export const dynamic ='force-dynamic'

export default async function Session() {
    const session = await auth();
    return (
        <div>
            <Heading title='Session dashboard' />

            <div className='bg-blue-200 border-2 border-blue-500'>
                <h3 className='text-lg'>Session data</h3>
                <pre className='whitespace-pre-wrap break-all'>{JSON.stringify(session, null, 2)}</pre>
            </div>
            <div className='mt-4'>
                <AuthTest />
            </div>
            {/* <div className='bg-green-200 border-2 border-blue-500 mt-4'>
                <h3 className='text-lg'>Token data</h3>
                <pre className='overflow-auto'>{JSON.stringify(token, null, 2)}</pre>
            </div> */}
        </div>
    )
}
