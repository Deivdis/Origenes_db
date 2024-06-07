'use client'
import React, { useEffect, useState } from 'react'

import { TextGenerateEffectDemo } from '../Features/text-effect-demo'

import classes from './index.module.scss'
import BlurIn from "../ui/blur-in";

const Promotion = () => {
  const [time, setTime] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  })

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 3)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      const dias = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const horas = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutos = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const segundos = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ dias, horas, minutos, segundos })

      if (timeDifference === 0) {
        clearInterval(timerInterval)
        // Puede agregar código aquí para manejar lo que sucede cuando se alcanza la fecha objetivo.
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval) // Limpia el intervalo cuando el componente se desmonta.
    }
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <BlurIn word="Oferta del mes"></BlurIn>
        <TextGenerateEffectDemo />
        <ul className={classes.stats}>
          <StatBox label="Dias" value={time.dias} />
          <StatBox label="Horas" value={time.horas} />
          <StatBox label="Minutos" value={time.minutos} />
          <StatBox label="Segundos" value={time.segundos} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
