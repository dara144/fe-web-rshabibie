import { Grid, List, Text } from '@mantine/core'
import style from './assets/PelayananBedah.module.css'
import Border from '@component/border'
import bedah from './assets/image/PelayananBedah.jpg'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

function PelayananBedah() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  return (
    <>
      <Text className={style.h1}
      >Instalasi Bedah</Text>
      <main className={style.wrapper}>
        <Border />
        <Grid>
          <Grid.Col md={12} lg={4} xl={2.3}>
            <div
              ref={myRef}
            >
              <Image className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                src={bedah}
                alt="Pelayanan Bedah"
                priority
              />
            </div>
          </Grid.Col>
          <Grid.Col md={12} lg={8} xl={8}>
            <div className={style.h2}>
              <p className='text-md font-thin'>Instalasi Bedah RS Khusus Ginjal Ny. R.A. Habibie merupakan pusat layanan bedah terpadu yang menangani berbagai tindakan pembedahan vaskular, baik elektif maupun emergensi, dengan dukungan tim medis profesional dan fasilitas yang sesuai standar keselamatan pasien.
                <br />
                <br />
                Kami menyediakan layanan bedah dengan pendekatan multidisiplin untuk memastikan hasil terbaik bagi pasien
                <br />
                <br />
                Layanan Unggulan:
                <ul className='list-disc text-md font-thin mt-3 px-14'>
                  <li>Operasi AV shunt beserta komplikasinya seperti :</li>
                  <ul className='list-decimal text-md font-thin px-16'>
                    <li>Stenosis Vena</li>
                    <li>Steel Syndrome</li>
                    <li>Pseudoaneurisma</li>
                    <li>Infeksi AV Shunt</li>
                  </ul>
                  <li>Pemasangan Central Venous Catheter (CVC)</li>
                  <li>Operasi CAPD</li>
                </ul>
              </p>
            </div>
          </Grid.Col>
        </Grid>
      </main>
    </>
  )

}

export default PelayananBedah;
