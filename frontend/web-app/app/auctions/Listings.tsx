'use client'

import React, { useEffect, useState } from 'react'
import AuctionCard from './AuctionCard';
import { useParamsStore } from '@/hooks/useParamsStore';
import { useShallow } from 'zustand/react/shallow';
import { useAuctionStore } from '@/hooks/useAuctionStore';
import { getData } from '../actions/auctionActions';
import Filters from './Filters';
import AppPagination from '../components/AppPagination';
import EmptyFilter from '../components/EmptyFilter';
import qs from 'query-string';

export default function Listings() {
  const [loading, setLoading] = useState(true);

  const params = useParamsStore(useShallow(state => ({
    pageNumber: state.pageNumber,
    pageSize: state.pageSize,
    searchTerm: state.searchTerm,
    orderBy: state.orderBy,
    filterBy: state.filterBy,
    seller: state.seller,
    winner: state.winner
  })));

  const data = useAuctionStore(useShallow(state => ({
    auctions: state.auctions,
    totalCount: state.totalCount,
    pageCount: state.pageCount
  })));

  const setData = useAuctionStore(state => state.setData);
  const setParams = useParamsStore(state => state.setParams);
  const url = qs.stringifyUrl({ url: '', query: params });

  function setPageNumber(pageNumber: number) {
    setParams({ pageNumber });
  }

  useEffect(() => {
    getData(url).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [url]);

  if (loading) return <h3 className='text-center text-lg font-medium'>Loading...</h3>;

  return (
    <div className='px-2 sm:px-4 md:px-6 lg:px-8'>
      <Filters />

      {data.totalCount === 0 ? (
        <EmptyFilter showReset />
      ) : (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {data.auctions.map(auction => (
              <AuctionCard auction={auction} key={auction.id} />
            ))}
          </div>

          <div className='flex justify-center mt-6'>
            <AppPagination
              pageChanged={setPageNumber}
              currentPage={params.pageNumber}
              pageCount={data.pageCount}
            />
          </div>
        </>
      )}
    </div>
  );
}
