import { api } from '@/lib/api'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url) // pega os parametros no corpo da url
  const code = searchParams.get('code') // codigo do github

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  console.log(token)
}
