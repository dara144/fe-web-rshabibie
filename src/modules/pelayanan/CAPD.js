import { Grid, List, Text } from '@mantine/core'
import style from './assets/CAPD.module.css'
import Border from '@component/border'
import CAPD1 from './assets/image/CAPD1.jpg'
import Image from 'next/image'

function CAPD() {
  return (
    <>
      <Text className={style.h1}
      >CAPD</Text>
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
                  <p className='text-md font-thin'>Continuous Ambulatory Peritoneal Dialysis (CAPD) adalah metode pencucian darah dengan mengunakan peritoneum (selaput yang melapisi perut dan pembungkus organ perut).</p>
                  <List className='list-none text-md mt-3'>
                    <List.Item>KONSEP <span className='text-[#1E90FF]'>PELAYANAN CAPD</span></List.Item>
                    <List className='list-none text-md mt-3 font-[350] text-[#4B3F3F]'>
                      <List.Item>Pelayanan CAPD Rumah Sakit Khusus Ginjal Ny. R.A. Habibie meliputi :</List.Item>
                      <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                        <List.Item>Konsultasi CAPD oleh Dokter dan Perawat terlatih</List.Item>
                        <List.Item>Training/pelatihan pelaksanaan CAPD untuk pasien</List.Item>
                        <List.Item>Ganti transfer set</List.Item>
                        <List.Item>PET <i>(Peritoneal Equilibration Test)</i></List.Item>
                        <List.Item>Pemeriksaan adekuasi CAPD</List.Item>
                      </List>
                    </List>
                  </List>
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
