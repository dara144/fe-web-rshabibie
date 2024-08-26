import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from '@layout/Footer'
import { FaBeer } from 'react-icons/fa'

export default function about() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <main>
        <div className='relative grid place-items-center'>about</div>
        <FaBeer className='text-blue-500' />
      </main>
    </>
  )
}
import Nav from '@layout/Nav'
about.getLayout = page => (
  <Nav>
    <div>
      {page}
      <Footer />
    </div>
  </Nav>
)
