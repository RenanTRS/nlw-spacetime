import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url) // pega os parametros no corpo da url
  const code = searchParams.get('code') // codigo do github

  const registerResponse = await api.post('/register', {
    code,
  }) // captura o token

  const { token } = registerResponse.data

  const cookieExpiresInSeconds = 60 * 60 * 24 * 2 // pega a quantidade de segundos para 2 dias (segungos * minutos * horas * quantidade de dias)

  const redirectURL = new URL('/', request.url) // rota para o redirecionamento
  return NextResponse.redirect(redirectURL, {
    headers: {
      // criacao do cookie, nomedocookie=valordocookie; path=/ significa que vai estar disponível para toda aplicação; max-age=tempo em segundos para a expiração
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  })
}
