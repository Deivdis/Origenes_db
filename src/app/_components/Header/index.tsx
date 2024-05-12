{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

import { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'

import '../../_css/global.css'

export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <HeaderComponent header={header} />
      <nav
        className="origenes-navbar text-lex backdrop-filter backdrop-blur-lg lg:justify-center z-30
            sticky top-0 width-[100vw] w-full py-1 sm:px-12 px-5 flex justify-between items-center"
      >
        <div className="nav-content ">
          <div className="nav-logo">
            Origenes <span>(Home)</span>
          </div>
          <ul className="nav-items">
            <li className="max-sm:hidden">
              <button disabled className="disabled:text-gray-400">
                Overview
              </button>
            </li>
            <li className="max-sm:hidden">
              <button>Tech Specs</button>
            </li>
            <li className="max-sm:hidden">
              <button>Compare</button>
            </li>
            <li>
              <button className="buy-btn px-3 py-0 rounded-xl">Buy</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
