import { Button } from '../_components/Button'
import { Gutter } from '../_components/Gutter'
import { VerticalPadding } from '../_components/VerticalPadding'

import '../_css/global.scss'

export default function NotFound() {
  return (
    <Gutter>
      <VerticalPadding top="none" bottom="large">
        <div className="text-center pt-[calc(var(--base)_*_10)] p-10">
          <h1>404</h1>
          <p>No se pudo encontrar esta página.</p>
          <Button href="/" label="Ir al inicio" appearance="primary" />
        </div>
      </VerticalPadding>
    </Gutter>
  )
}
