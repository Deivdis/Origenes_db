import { Button } from '../_components/Button'
import { Gutter } from '../_components/Gutter'
import { VerticalPadding } from '../_components/VerticalPadding'

import '../_css/global.scss'

export default function NotFound() {
  return (
    <Gutter>
      <VerticalPadding top="none" bottom="large">
        <div className="text-center pt-[calc(var(--base)_*_10)]">
          <h1>404</h1>
          <p>This page could not be found.</p>
          <Button href="/" label="Go Home" appearance="primary" />
        </div>
      </VerticalPadding>
    </Gutter>
  )
}
