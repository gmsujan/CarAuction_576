import Image from 'next/image'
import React from 'react'
import CountdownTimer from './CountdownTimer'
import CarImage from './CarImage'
import { Auction } from '@/types'
import Link from 'next/link'
import CurrentBid from './CurrentBid'

type Props = {
    auction: Auction

}

export default function AuctionCard({ auction }: Props) {
    return (
        <Link href={`/auctions/details/${auction.id}`} className='group block'>
            <div className='relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden'>
                <CarImage imageUrl={auction.imageUrl} />
                <div className='absolute bottom-2 left-2'>
                    <CountdownTimer auctionEnd={auction.auctionEnd} />
                </div>
                <div className='absolute top-2 right-2'>
                    <CurrentBid
                        reservePrice={auction.reservePrice}
                        amount={auction.currentHighBid}
                    />
                </div>
            </div>
            <div className='flex justify-between items-center mt-4 px-1 sm:px-2 md:px-4'>
                <h3 className='text-gray-700 text-sm sm:text-base md:text-lg font-medium'>
                    {auction.make} {auction.model}
                </h3>
                <p className='text-xs sm:text-sm md:text-base font-semibold text-gray-600'>
                    {auction.year}
                </p>
            </div>
        </Link>
    )
}
