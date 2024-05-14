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
      >Pelayanan Bedah</Text>
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
              <p className='text-md font-thin'>Pelayanan bedah vaskuler Rumah Sakit Khusus Ginjal Ny. R.A. Habibie merupakan suatu sarana pelayanan terpadu yang meliputi tindakan operatif serta tindakan diagnostik. Pelayanan ini dilayani oleh staff berpengalaman dan professional, terdiri dari Dokter Spesialis, perawat spesialis bersertifikat keahlian khusus serta tenaga non medis.</p>
              <p className='text-md mt-3 font-thin'>Pelayanan bedah Rumah Sakit Khusus Ginjal Ny. R.A. Habibie meliputi :</p>
              <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                <List.Item>Operasi AV Shunt.</List.Item>
                <List.Item>Pemasangan Double Lument Catheter.</List.Item>
              </List>
            </div>
          </Grid.Col>
        </Grid>
      </main>
    </>
  )

}

export default PelayananBedah;
