// app/api/signup/route.ts

import { SignupUseAction } from '@/app/action'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const formData = await req.formData()
  const result = await SignupUseAction(formData)

  if (!result || result.success === false) {
    return NextResponse.json({ error: result?.error || 'Signup failed' }, { status: 400 })
  }

  return NextResponse.redirect(new URL('/login', req.url))
}
