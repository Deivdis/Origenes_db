'use client'

import React from 'react'
import Image from 'next/image'

import '../../_css/global.scss'
// import {Usps} from "./Components/section/usps";
// import {gsap} from "gsap";
// import Slider from "./Components/Slider";

export default async function SotrePage() {
  return (
    <main>
      <nav
        className="origenes-navbar text-lex backdrop-filter backdrop-blur-lg bg-gray lg:justify-center z-20
        sticky top-0 width-[100vw] w-full py-1 sm:px-12 px-5 flex justify-between items-center"
      >
        <section className="text-black py-5 px-8 sm:px-8 lg:px-12">
          <div className="main-elem text-center">
            <h1>Origenes</h1>
            <a className="main-a-div inline-block mt-4 text-2xl font-semibold" href="/Watch">
              Tienda <span>Naturista</span>
              {/*<ion-icon name="play-circle-outline"></ion-icon>*/}
            </a>
          </div>
        </section>

        <div className="bg-black relative z-10">{/*<Usps/>*/}</div>
        <div className="h-[112vh]" />

        <section
          className="section1 rounded-xl w-full h-full py-1
                sm:px-12 px-5 flexjustify-between items-center"
        >
          <div>
            <div>
              <Image
                className="absolute w-full h-full object-contain"
                src="https://res.cloudinary.com/deq7igu0x/image/upload/v1712853941/Group_5_095bc367a7.png"
                alt="hojas"
              />
            </div>
          </div>
        </section>
      </nav>
    </main>
  )
}
