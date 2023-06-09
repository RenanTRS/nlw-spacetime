import { Text } from './Text'
import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt="Logo profile"
        className="h-10 w-10 rounded-full"
      />

      <Text size={'sm'} leading={'snug'} className="max-w-[140px]">
        {name}
        <a
          href=""
          className="block text-red-400 transition-colors hover:text-red-300"
        >
          Quero sair
        </a>
      </Text>
    </div>
  )
}
