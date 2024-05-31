'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { ThemeSelector } from '../../../_providers/Theme/ThemeSelector'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'
import { CMSLink } from '../../Link'

import '../../../_css/global.scss'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={classes.footer}>
        <Gutter>
          <nav>
            <div className="text-2xl text-[#4D8330]">
              <p>Orígenes</p>
            </div>
          </nav>
          <nav className={classes.nav}>
            <ThemeSelector />
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} />
            })}
            <Link href="https://github.com/Deivdis" target="_blank" rel="noopener noreferrer">
              Deivids
            </Link>
            <nav className="space-x-5">
              <p>Antonio </p>
              <p>Jose </p>
              <p>Arnold </p>
            </nav>
          </nav>
          <div className={classes.wrap}>
            <p>{footer?.copyright}</p>

            <div className={classes.socialLinks}>
              {navItems.map(item => {
                const icon = item?.link?.icon as Media

                // @ts-ignore
                return (
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinkItem}
                  ></Button>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
