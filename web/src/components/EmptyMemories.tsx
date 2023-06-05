import { Text } from './Text'

export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Text size={'md'} className="w-[360px] text-center">
        You haven&apos;t registered any memories yet, start{' '}
        <a href="" className="underline transition-colors hover:text-gray-50">
          creating now
        </a>
      </Text>
    </div>
  )
}
