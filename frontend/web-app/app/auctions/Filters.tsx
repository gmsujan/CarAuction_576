'use client'

import { useParamsStore } from '@/hooks/useParamsStore';
import { Button, ButtonGroup } from 'flowbite-react';
import React from 'react';
import { AiOutlineClockCircle, AiOutlineSortAscending } from 'react-icons/ai';
import { BsFillStopCircleFill, BsStopwatchFill } from 'react-icons/bs';
import { GiFinishLine, GiFlame } from 'react-icons/gi';

const pageSizeButtons = [4, 8, 12];

const orderButtons = [
  { label: 'Alphabetical', icon: AiOutlineSortAscending, value: 'make' },
  { label: 'End date', icon: AiOutlineClockCircle, value: 'endingSoon' },
  { label: 'Recently added', icon: BsFillStopCircleFill, value: 'new' },
];

const filterButtons = [
  { label: 'Live Auctions', icon: GiFlame, value: 'live' },
  { label: 'Ending < 6 hours', icon: GiFinishLine, value: 'endingSoon' },
  { label: 'Completed', icon: BsStopwatchFill, value: 'finished' },
];

export default function Filters() {
  const pageSize = useParamsStore((state) => state.pageSize);
  const setParams = useParamsStore((state) => state.setParams);
  const orderBy = useParamsStore((state) => state.orderBy);
  const filterBy = useParamsStore((state) => state.filterBy);

  return (
    <div className='flex flex-col gap-4 sm:flex-col md:flex-row md:justify-between md:items-center mb-4'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:gap-2'>
        <span className='uppercase text-sm text-gray-500 mb-1 sm:mb-0'>Filter by</span>
        <ButtonGroup>
          {filterButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ filterBy: value })}
              color={filterBy === value ? 'red' : 'gray'}
              className='text-xs sm:text-sm'
            >
              <Icon className='mr-2 h-4 w-4' />
              {label}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <div className='flex flex-col sm:flex-row sm:items-center sm:gap-2'>
        <span className='uppercase text-sm text-gray-500 mb-1 sm:mb-0'>Order by</span>
        <ButtonGroup>
          {orderButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ orderBy: value })}
              color={orderBy === value ? 'red' : 'gray'}
              className='text-xs sm:text-sm'
            >
              <Icon className='mr-2 h-4 w-4' />
              {label}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <div className='flex flex-col sm:flex-row sm:items-center sm:gap-2'>
        <span className='uppercase text-sm text-gray-500 mb-1 sm:mb-0'>Page size</span>
        <ButtonGroup>
          {pageSizeButtons.map((value, i) => (
            <Button
              key={i}
              onClick={() => setParams({ pageSize: value })}
              color={pageSize === value ? 'red' : 'gray'}
              className='text-xs sm:text-sm focus:ring-0'
            >
              {value}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
