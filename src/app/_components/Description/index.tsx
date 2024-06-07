import { VelocityScroll } from '../../_components/ui/scroll-based-velocity'
import TextReveal from '../ui/text-reveal'

export default function Description() {
  return (
    <div>
      <div className="z-10 flex min-h-[16rem] items-center rounded-lg">
        <TextReveal
          text="¡Explora un mundo de bienestar en Naturaleza Viva, tu destino en línea para productos naturistas de alta calidad!
        Nos enorgullece presentar una amplia gama de opciones que armonizan la potencia de la naturaleza con tu búsqueda de salud y vitalidad."
        />
      </div>
      <VelocityScroll
        text="Belleza Natural"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      />
    </div>
  )
}
