import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Category, Page } from '../../../payload/payload-types'
import { staticHome } from '../../../payload/seed/home-static'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import { Hero } from '../../_components/Hero'
import { generateMeta } from '../../_utilities/generateMeta'

// Orígenes Cloud almacena en caché todos los archivos a través de Cloudflare, por lo que no necesitamos Next.js para almacenarlos en caché también
// Esto significa que podemos desactivar el almacenamiento en caché de datos de Next.js y, en su lugar, confiar únicamente en la CDN de Cloudflare.
// Para hacer esto, incluimos el encabezado "no-cache" en las solicitudes de recuperación utilizadas para obtener los datos de esta página.
// Pero también debemos forzar a Next.js a representar dinámicamente esta página en cada solicitud para que funcione el modo de vista previa.
// Consulte https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// Si no está utilizando Payload Cloud, esta línea se puede eliminar; consulte `../../../README.md#cache`
export const dynamic = 'force-dynamic'

import BeneFits from '../../_components/BeneFits/bene-fits'
import DescriptionBody from '../../_components/BodyImages/DescriptionBody'
import Intro from '../../_components/BodyImages/Intro'
import Categories from '../../_components/Categories'
import { Collaboration } from '../../_components/Collaboration/collaboration'
import Description from '../../_components/Description'
import { Features } from '../../_components/Features/features'
import FeaturesList from '../../_components/Features/FeaturesList'
import HorizontalScrollImage from '../../_components/Features/HorizontalScrollImage'
import VelocityScrollDemo from '../../_components/Features/velocity-scroll-demo'
import Promotion from '../../_components/Promotion'
import { SamePage } from '../../_components/SamePage/same-page'
import Section from '../../_components/Section/Section'
import SectionAboutUs from '../../_components/SectionAboutus/section-about-us'
import Services from '../../_components/Services/services'
import { StreamlinedExperience } from '../../_components/StreamlinedExperience/streamlined-experience'

import classes from './index.module.scss'

export default async function Page({ params: { slug = 'home' } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })

    categories = await fetchDocs<Category>('categories')
  } catch (error) {}

  if (!page && slug === 'home') {
    page = staticHome
  }

  if (!page) {
    return notFound()
  }

  const { hero, layout } = page

  return (
    <React.Fragment>
      {slug === 'home' ? (
        <section>
          <Hero {...hero} />
          <Gutter className={classes.home}>
            <Intro />
            <DescriptionBody />
            <Section />
            <SectionAboutUs />
            <FeaturesList />
            <Services />
            <BeneFits />
            <Description />
            <div className="relative z-10 w-full overflow-x-clip">
              {/*<Collaboration />*/}
              {/*<SamePage />*/}
              {/*<StreamlinedExperience />*/}
              <Features />
            </div>
            <HorizontalScrollImage />
            <VelocityScrollDemo />
            <Categories categories={categories} />
            <Promotion />
          </Gutter>
        </section>
      ) : (
        <>
          <Hero {...hero} />
          <Blocks
            blocks={layout}
            disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
          />
        </>
      )}
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>('pages')
    return pages?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  if (!page && slug === 'home') {
    page = staticHome
  }

  return generateMeta({ doc: page })
}
