import Head from 'next/head'
import Nav from '@layout/Nav'
import Promo from '@modules/promo/Promo'

export default function PromoPage() {
  return (
    <>
      <Head>
        <title>Promo & Paket Layanan</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Promo />
    </>
  )
}
PromoPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
