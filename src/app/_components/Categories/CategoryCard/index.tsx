'use client'
import React from 'react'
import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'
import { PinContainer } from '../../ui/3d-pin'

import classes from './index.module.scss'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media
  const { setCategoryFilters } = useFilter()

  return (
    <PinContainer title={category.title}>
      <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[20vh] mb:10">
        <Link
          href="/products"
          className={classes.card}
          style={{ backgroundImage: `url(${media.url})` }}
          onClick={() => setCategoryFilters([category.id])}
        ></Link>
      </div>
      <p className={classes.title}>{category.title}</p>
    </PinContainer>
  )
}

export default CategoryCard
