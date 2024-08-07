import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'
import { profileNavItems } from '../../constants/'
import { UserInfo } from './UserInfo'

import classes from './index.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <nav className={classes.page}>
      <div className={classes.container}>
        <Gutter>
          <h3>Mi perfil</h3>
          <div className={classes.account}>
            <div className={classes.nav}>
              <UserInfo />

              <ul className={classes.ul}>
                {profileNavItems.map(item => (
                  <li key={item.title}>
                    <Link href={item.url} className={classes.navItem}>
                      <Image src={item.icon} alt={item.title} width={24} height={24} />
                      <p>{item.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {children}
          </div>
        </Gutter>
      </div>
    </nav>
  )
}
