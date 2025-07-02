import { Grid, List, Text } from '@mantine/core'
import style from './assets/CAPD.module.css'
import Border from '@component/border'
import CAPD1 from './assets/image/CAPD1.jpg'
import Image from 'next/image'

function CAPD() {
  return (
    <>
      <Text className={style.h1}
      >CAPD (Continuous Ambulatory Peritoneal Dialysis)</Text>
      <main className={style.wrapper}>
        <div className={style.h2}>
          <div className='h-screen'>
            <Border />
            <Grid className='mb-2'>
              <Grid.Col md={12} lg={5} xl={3.5}>
                <Image className={style.image}
                  src={CAPD1}
                  alt="CAPD"
                  priority
                />
              </Grid.Col>
              <Grid.Col md={12} lg={7} xl={8}>
                <div className={style.h2}>
                  <p className='text-md font-thin'>Layanan CAPD (Continuous Ambulatory Peritoneal Dialysis) adalah metode dialisis peritoneal yang dapat dilakukan secara mandiri oleh pasien di rumah, dengan menggunakan kateter yang dipasang di rongga perut. Rumah Sakit kami menyediakan layanan <b>edukasi dan pelatihan CAPD</b> bagi pasien dan keluarga, pemantauan berkala oleh tim medis, serta konsultasi rutin untuk memastikan efektivitas dan keamanan terapi.</p>
                  <br />
                  <p className='text-md mb-2'>JADWAL LAYANAN<span className='text-[#1E90FF]'> CAPD:</span></p>
                  <ul className='list-disc text-md font-thin mt-3 px-14'>
                    <li><b>Senin - Jumat</b></li>
                    <li><b>Pukul 08.00 - 14.00 WIB</b></li>
                    <li>Melayani: Edukasi awal, kontrol rutin, penggantian kateter, dan evaluasi berkala.</li>
                  </ul>
                </div>
              </Grid.Col>
            </Grid>
          </div>
        </div>
      </main >
    </>
  )

}

export default CAPD;
