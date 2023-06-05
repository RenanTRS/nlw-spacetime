import { User } from 'lucide-react'
import { Text } from './Text'

export function SingIn() {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
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
        <span className="underline">Create your account</span> and record your
        memories!
      </Text>
    </a>
  )
}
