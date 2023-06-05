import Image from 'next/image'
import { Title } from './Title'
import { Text } from './Text'
import { Button } from './Button'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />

      <div className="max-2-[420px] space-y-1">
        <Title>Your time capsule</Title>

        <Text>
          Collect the memorable moments of your journey and share (if you like)
          with the world!
        </Text>
      </div>

      <Button asChild>
        <a href="">Register your memory</a>
      </Button>
    </div>
  )
}
