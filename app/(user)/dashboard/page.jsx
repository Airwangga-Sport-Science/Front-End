import React from 'react'
import CardTable from '@/components/Cards/CardTable'
import CardStats from '@/components/Cards/CardStats'

export default function page() {
  return (
    <div className='flex flex-col 2xl:w-[1440px] mx-auto mt-20 h-full'>
      <div className="flex flex-row w-full justify-between">
        <div className="w-1/4 px-4">
        <CardStats />
        </div>
        <div className="w-1/4 px-4">
        <CardStats />
        </div>
        <div className="w-1/4 px-4">
        <CardStats />
        </div>
        <div className="w-1/4 px-4">
        <CardStats />
        </div>
      </div>
      <div className="h-2/3 px-4 py-8">
        <CardTable />
      </div>
    </div>

  )
}
