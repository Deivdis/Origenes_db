import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import { PinContainer } from '../ui/3d-pin'
import CategoryCard from './CategoryCard'

import classes from './index.module.scss'

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Comprar por categorías</h3>
        <Link href="/products" className="text-green-700">
          Ver todo
        </Link>
      </div>
      <div className={classes.list}>
        {categories.map(category => {
          return <CategoryCard key={category.id} category={category} />
        })}
      </div>
    </section>
  )
}

export default Categories
