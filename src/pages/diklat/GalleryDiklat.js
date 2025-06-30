import Head from 'next/head'
import Nav from '@layout/Nav'
import GalleryDiklat from '@modules/diklat/GalleryDiklat'

export default function GalleryDiklatPage() {
  return (
    <>
      <Head>
        <title>Profil Diklat</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <GalleryDiklat />
    </>
  )
}
GalleryDiklatPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
