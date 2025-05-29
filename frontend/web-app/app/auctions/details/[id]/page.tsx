import { getBidsForAuction, getDetailedViewData } from '@/app/actions/auctionActions';
import Heading from '@/app/components/Heading';
import React from 'react';
import CountdownTimer from '../../CountdownTimer';
import CarImage from '../../CarImage';
import DetailedSpecs from './DetailedSpecs';
import { getCurrentUser } from '@/app/actions/authActions';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import BidList from './BidList';

// Define the params type as a Promise-based shape
export type ParamsType = Promise<{ id: string }>;

export default async function Details({ params }: { params: ParamsType }) {
  const { id } = await params;
  const data = await getDetailedViewData(id);
  const user = await getCurrentUser();  

  return (
    <div className='px-2 sm:px-4 md:px-6 lg:px-8 py-4'>
      {/* Header with title and countdown */}
      <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center'>
        {/* Left: Title and edit/delete if seller */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:gap-3'>
          <Heading title={`${data.make} ${data.model}`} />
          {user?.username === data.seller && (
            <div className='flex gap-2 mt-2 sm:mt-0'>
              <EditButton id={data.id} />
              <DeleteButton id={data.id} />
            </div>
          )}
        </div>

        {/* Right: Timer */}
        <div className='flex flex-wrap items-center gap-2'>
          <h3 className='text-lg sm:text-xl md:text-2xl font-semibold'>Time remaining</h3>
          <CountdownTimer auctionEnd={data.auctionEnd} />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
        {/* Car Image */}
        <div className='w-full bg-gray-200 relative aspect-[4/3] rounded-lg overflow-hidden'>
          <CarImage imageUrl={data.imageUrl} />
        </div>

        {/* Bid List */}
        <BidList user={user} auction={data} />
      </div>

      {/* Specs Section */}
      <div className='mt-6'>
        <DetailedSpecs auction={data} />
      </div>
    </div>
  );
}
