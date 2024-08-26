import Head from 'next/head'
import Nav from '@layout/Nav'
import IGD from '@modules/pelayanan/IGD'
import { ScrollArea } from '@mantine/core'
export default function IGDPage() {
  return (
    <>
      <Head>
        <title>Instalasi Gawat Darurat</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <IGD />
    </>
  )
}
IGDPage.getLayout = page => (
  <ScrollArea style={{ height: '100vh' }}>
    <Nav />
    {page}
  </ScrollArea>
)
