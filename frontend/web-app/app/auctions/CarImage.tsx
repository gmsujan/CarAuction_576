'use client';

import React, { useState } from 'react'
import Image from 'next/image';

type Props ={
    imageUrl: string;
}


export default function CarImage({ imageUrl }: Props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={imageUrl}
      alt='Car image'
      fill
      priority
      onLoad={() => setLoading(false)}
      className={`
        object-cover 
        transition duration-700 ease-in-out
        group-hover:opacity-75
        ${isLoading ? 'grayscale blur-md scale-105' : 'grayscale-0 blur-0 scale-100'}
      `}
      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
    />
  );
}

