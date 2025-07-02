import { Grid, Group, List, Modal, Text } from '@mantine/core'
import style from './assets/IGD.module.css'
import Border from '@component/border'
import Image from 'next/future/image'
import igd from './assets/image/IGD.jpg'
import PIGD from './assets/image/PIGD.JPG'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

function IGD() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  return (
    <>
      <Text className={style.h1}
      >Instalasi Gawat Darurat (IGD)</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <Grid>
            <Grid.Col md={12} lg={5} xl={4}>
              <div
                ref={myRef}
              >
                <Image className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  src={PIGD}
                  alt="Pelayanan IGD"
                />
              </div>
            </Grid.Col>
            <Grid.Col md={10} lg={7} xl={8}>
              <p className='text-md px-5 mb-2'>INFORMASI <span className='text-[#1E90FF]'>UMUM</span></p>
              <p className='text-md font-thin px-5'>Instalasi Gawat Darurat (IGD) RS Khusus Ginjal Ny. R.A. Habibie memberikan layanan medis darurat selama <b>24 jam</b>, setiap hari, dengan sistem penanganan cepat dan terintegrasi. Meskipun kami merupakan rumah sakit khusus di bidang nefrologi, <b>IGD kami terbuka untuk seluruh pasien dengan kondisi gawat darurat</b>, baik yang berkaitan dengan penyakit ginjal maupun <b>keluhan umum non-ginjal</b>, seperti gangguan pernapasan, nyeri dada, trauma ringan hingga sedang, demam tinggi, dan lainnya.
                <br />
                <br />
                Pasien yang datang akan ditangani oleh <b>tim medis profesional</b> yang terdiri dari dokter jaga, perawat terlatih, dan tenaga pendukung lainnya yang siap memberikan pertolongan pertama secara cepat, tepat, dan aman.
              </p>
            </Grid.Col>
            <Grid.Col md={12} lg={5} xl={4}>
              <div
                ref={myRef1}
              >
                <Image className={`${style.image} ${myImageIsVisible1 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  src={igd}
                  alt="IGD"
                />
              </div>
            </Grid.Col>
            <Grid.Col md={10} lg={7} xl={8}>
              <p className='text-md px-5'>FASILITAS & LAYANAN PENUNJANG <span className='text-[#1E90FF]'>DI IGD:</span></p>
              <ul className='list-disc text-md font-thin mt-3 px-14'>
                <li><b>Laboratorium 24 jam</b></li>
                <li><b>Radiologi 24 jam</b></li>
                <li><b>Hemodialisis Darurat</b></li>
                <li><b>Layanan Farmasi 24 jam</b></li>
                <li><b>Ambulans Siaga</b></li>
                <li><b>Sistem Triase</b> untuk memprioritaskan pasien berdasarkan tingkat kegawatdaruratannya</li>
              </ul>
              <br />
              <p className='text-md font-thin'>
                Dengan komitmen pada keselamatan dan kenyamanan pasien, kami memastikan bahwa setiap individu yang datang ke IGD mendapatkan layanan yang responsif dan profesional, sesuai dengan standar kegawatdaruratan medis
              </p>
            </Grid.Col>
          </Grid>
        </div>
      </main>
    </>
  )

}

export default IGD;
