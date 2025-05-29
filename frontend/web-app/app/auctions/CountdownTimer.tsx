'use client'

import { useBidStore } from '@/hooks/useBidStore';
import { usePathname } from 'next/navigation';
import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';

type Props = {
  auctionEnd: string;
};

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  return (
    <div
      className={`
        border-2 border-white text-white
        px-2 py-1 rounded-lg flex justify-center items-center
        text-xs sm:text-sm md:text-base
        ${completed
          ? 'bg-red-600'
          : days === 0 && hours < 10
          ? 'bg-amber-600'
          : 'bg-green-600'}
      `}
      aria-label="Countdown Timer"
    >
      {completed ? (
        <span>Auction Finished</span>
      ) : (
        <span suppressHydrationWarning={true}>
          {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      )}
    </div>
  );
};

export default function CountdownTimer({ auctionEnd }: Props) {
  const setOpen = useBidStore((state) => state.setOpen);
  const pathname = usePathname();

  function auctionFinished() {
    if (pathname.startsWith('/auctions/details')) {
      setOpen(false);
    }
  }

  return (
    <div className='w-fit'>
      <Countdown date={auctionEnd} renderer={renderer} onComplete={auctionFinished} />
    </div>
  );
}
