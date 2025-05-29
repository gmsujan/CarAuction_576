import Heading from '@/app/components/Heading'
import React from 'react'
import AuctionForm from '../../AuctionForm'
import { getDetailedViewData } from '@/app/actions/auctionActions'

// Define the Promise-based params type
export type ParamsType = Promise<{ id: string }>;

export default async function Update({ params }: { params: ParamsType }) {
  const { id } = await params;
  const data = await getDetailedViewData(id);

  return (
    <div className='mx-auto max-w-[75%] shadow-lg p-10 bg-white rounded-lg'>
      <Heading title='Update your auction' subtitle='Please update the details of your car' />
      <AuctionForm auction={data}/>
    </div>
  )
}
