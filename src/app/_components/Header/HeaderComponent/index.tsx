'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import '../../../_css/global.css'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    <nav
      className="text-lex backdrop-filter backdrop-blur-lg lg:justify-center z-30
      sticky top-0 width-[100vw] w-full py-1 sm:px-12 px-5 flex justify-between items-center"
    >
      <nav
        className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
          .filter(Boolean)
          .join(' ')}
      >
        <Gutter className={classes.wrap}>
          <HeaderNav header={header} />
        </Gutter>
      </nav>
    </nav>
  )
}

export default HeaderComponent
