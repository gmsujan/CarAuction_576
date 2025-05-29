import EmptyFilter from '@/app/components/EmptyFilter';
import React from 'react'

// Optional: define the Promise-based type if you're using strict inference
export type SearchParamsType = Promise<{ callbackUrl: string }>;

export default async function Page({ searchParams }: { searchParams: SearchParamsType }) {
  const { callbackUrl } = await searchParams;
  
  return (
    <EmptyFilter
        title='You need to be logged in to do that'
        subtitle='Please click below to login'
        showLogin
        callbackUrl={callbackUrl}
    />
  )
}
