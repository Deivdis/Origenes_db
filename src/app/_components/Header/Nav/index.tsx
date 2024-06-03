'use client'

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType, User } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'
import { HoverBorderGradient } from '../../ui/hover-border-gradient'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav
      className={[
        classes.nav,
        // atenuar la navegación durante la carga del usuario para evitar destellos de contenido y cambios de diseño
        // Vercel también hace esto en el encabezado de su propio sitio web, consulte https://vercel.com
        user === undefined && classes.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      <CartLink />
      <HoverBorderGradient>
        {user && <Link href="/account">Cuenta</Link>}
        {!user && (
          <React.Fragment>
            <span>
              <Link href="/login">Iniciar Secion</Link>
            </span>
          </React.Fragment>
        )}
      </HoverBorderGradient>
    </nav>
  )
}
