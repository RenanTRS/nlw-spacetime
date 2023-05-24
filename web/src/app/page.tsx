import { User } from 'lucide-react'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'
import { Title } from '@/components/Title'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <aside className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <span className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripe */}
        <span className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* Sing In */}
        {/* <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a> */}

        <a
          href=""
          className="group flex items-center gap-3 text-left transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <Text
            size={'sm'}
            leading={'snug'}
            className="max-w-[140px] group-hover:text-gray-50"
          >
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </Text>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />

          <div className="max-2-[420px] space-y-1">
            {/* <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1> */}
            <Title>Your time capsule</Title>
            {/* <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p> */}
            <Text>
              Collect the memorable moments of your journey and share (if you
              like) with the world!
            </Text>
          </div>

          {/* <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
          >
            Cadastrar lembrança
          </a> */}
          <Button asChild>
            <a href="">Register your memory</a>
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            href="https://rocketseat.com.br"
            rel="noreferrer"
            target="_blank"
            className="underline transition-colors hover:text-gray-100"
          >
            Rocketseat
          </a>
        </div>
      </aside>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          {/* <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a
              href=""
              className="underline transition-colors hover:text-gray-100"
            >
              criar agora
            </a>
          </p> */}
          <Text size={'md'} className="w-[360px] text-center">
            You haven&apos;t registered any memories yet, start{' '}
            <a
              href=""
              className="underline transition-colors hover:text-gray-50"
            >
              creating now
            </a>
          </Text>
        </div>
      </div>
    </main>
  )
}
