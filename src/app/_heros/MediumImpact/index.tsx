import React from 'react'
import Image from 'next/image'

import { Page } from '../../../payload/payload-types'
import { FlipWordsDemo } from '../../_components/Features/flip-words-demo'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import { TypewriterEffectSmooth } from '../../_components/ui/typewriter-effect'

import '../../_css/global.scss'

import classes from './index.module.scss'

export const MediumImpactHero: React.FC<Page['hero']> = props => {
  const { richText, media, links } = props

  return (
    <Gutter className={classes.hero}>
      <div className={classes.title}>
        <div className={classes.background}>
          <div className="flex flex-col items-center justify-center">
            <FlipWordsDemo />
            <TypewriterEffectSmooth richText={richText} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4"></div>
          </div>
          {Array.isArray(links) && (
            <ul className={classes.links}>
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink className={classes.link} {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="">
        <div className={classes.media}>
          {typeof media === 'object' && <Media className={classes.media} resource={media} />}
        </div>
      </div>
    </Gutter>
  )
}
