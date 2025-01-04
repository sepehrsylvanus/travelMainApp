import Link from 'next/link'
import React from 'react'

function PlansYouJoined({trans , locale}) {
  return (
    <section className="w-full bg-main-background-lite flex flex-wrap">
    <div className="w-full flex  font-medium items-center justify-between ps-6 p-2">
      <strong className="truncate">{trans("Plans you joined")}</strong>
      <Link scroll={false} className="text-blue-500 text-sm" href={`/${locale}/trending-plans`}>
          {trans("more")}
      </Link>
    </div>
    <section className="w-full flex flex-wrap  items-center justify-center">
      <div className="w-[327px] bg-main-background-white h-[108px] flex items-center justify-center p-2 rounded-xl my-5">
          <div className="w-1/2 flex flex-wrap p-2">
              <h4 className="font-bold capitalize">{trans("Nothing is here")}</h4>
              <span className="text-gray-400 text-[12px] pt-1">{trans("Your Plans appear here")}</span>
          </div>
          <div className="w-1/2 flex items-center justify-end p-2">
              <Link href={`/${locale}/plan/create`} className="text-blue-400 border flex items-center justify-center font-bold w-[88px] h-[48px] rounded-2xl border-blue-400">
                  {trans("Create")}
              </Link>
          </div>
      </div>
    </section>
  </section>
  )
}

export default PlansYouJoined
