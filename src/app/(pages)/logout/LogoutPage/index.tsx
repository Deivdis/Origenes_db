'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { Settings } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'

export const LogoutPage: React.FC<{
  settings: Settings
}> = props => {
  const { settings } = props
  const { productsPage } = settings || {}
  const { logout } = useAuth()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout()
        setSuccess('Sesión cerrada exitosamente.')
      } catch (_) {
        setError('Ya has cerrado sesión.')
      }
    }

    performLogout()
  }, [logout])

  return (
    <Fragment>
      {(error || success) && (
        <div>
          <h1>{error || success}</h1>
          <p>
            {'Que te gustaría hacer después?'}
            {typeof productsPage === 'object' && productsPage?.slug && (
              <Fragment>
                {' '}
                <Link href={`/${productsPage.slug}`}>haga clic aquí</Link>
                {` to shop.`}
              </Fragment>
            )}
            {` Para volver a iniciar sesión, `}
            <Link href="/login">haga clic aquí</Link>
            {'.'}
          </p>
        </div>
      )}
    </Fragment>
  )
}
