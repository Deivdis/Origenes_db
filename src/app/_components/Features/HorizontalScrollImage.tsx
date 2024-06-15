'use client'
import Image from 'next/image'

import HorizontalScrollCarousel from '../ui/HorizontalScrollCarousel'

interface Card {
  url: string
  title: string
  id: number
}

const cards: Card[] = [
  { url: '/assets/images/image-11.webp', title: '', id: 1 },
  { url: '/assets/images/image-2.webp', title: '', id: 2 },
  { url: '/assets/images/image-3.webp', title: '', id: 3 },
  { url: '/assets/images/image-10.webp', title: '', id: 4 },
  { url: '/assets/images/image-4.webp', title: '', id: 5 },
  { url: '/assets/images/image-13.webp', title: '', id: 6 },
  { url: '/assets/images/image-12.webp', title: '', id: 7 },
]

const Card: React.FC<{ card: Card }> = ({ card }) => (
  <div
    key={card.id}
    className="group relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] overflow-hidden"
  >
    <div className="absolute inset-0 z-0">
      <Image
        src={card.url}
        alt={card.title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  </div>
)

const HorizontalScrollImage: React.FC = () => (
  <HorizontalScrollCarousel title="Nuevos Productos">
    {cards.map(card => (
      <Card card={card} key={card.id} />
    ))}
  </HorizontalScrollCarousel>
)

export default HorizontalScrollImage
