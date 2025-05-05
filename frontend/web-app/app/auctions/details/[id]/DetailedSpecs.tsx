'use client';

import { Auction } from "@/types";

type Props = {
    auction: Auction;
};

export default function DetailedSpecs({ auction }: Props) {
    return (
        <div className="overflow-x-auto mt-6 rounded-md shadow-md">
            <table className="min-w-full text-sm text-left text-gray-700 bg-white border border-gray-100 rounded-md">
                <tbody>
                    <tr className="hover:bg-red-50 transition">
                        <th className="px-6 py-4 font-medium text-gray-900 w-1/3">Seller</th>
                        <td className="px-6 py-4">{auction.seller}</td>
                    </tr>
                    <tr className="hover:bg-red-50 transition">
                        <th className="px-6 py-4 font-medium text-gray-900">Make</th>
                        <td className="px-6 py-4">{auction.make}</td>
                    </tr>
                    <tr className="hover:bg-red-50 transition">
                        <th className="px-6 py-4 font-medium text-gray-900">Model</th>
                        <td className="px-6 py-4">{auction.model}</td>
                    </tr>
                    <tr className="hover:bg-red-50 transition">
                        <th className="px-6 py-4 font-medium text-gray-900">Year manufactured</th>
                        <td className="px-6 py-4">{auction.year}</td>
                    </tr>
                    <tr className="hover:bg-red-50 transition">
                        <th className="px-6 py-4 font-medium text-gray-900">Mileage</th>
                        <td className="px-6 py-4">{auction.mileage}</td>
                    </tr>
                    <tr className="hover:bg-red-50 transition">
                        <th className="px-6 py-4 font-medium text-gray-900">Has reserve price?</th>
                        <td className="px-6 py-4">{auction.reservePrice > 0 ? 'Yes' : 'No'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
