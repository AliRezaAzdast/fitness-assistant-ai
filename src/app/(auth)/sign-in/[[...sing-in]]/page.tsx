import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SingInPage() {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
        <SignIn/>
    </main>
  )
}

export default SingInPage