{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'

import { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'

import '../../_css/global.scss'

export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <nav className="z-[999] relative">
        <div className="fixed left-1/1 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-opacity-75">
          <HeaderComponent header={header} />
        </div>
      </nav>
    </>
  )
}
