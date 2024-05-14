import { Grid, List, Text } from '@mantine/core'
import style from './assets/Laboratorium.module.css'
import Border from '@component/border'
import Image from 'next/future/image'
import lab from './assets/image/Laboratorium.jpg'
import PLAB from './assets/image/PLAB.JPG'
import { useInView } from 'react-intersection-observer'

function Laboratorium() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  return (
    <>
      <Text className={style.h1}
      >Laboratorium</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <p className='text-md mt-3 font-thin'>Pelayanan instalasi Laboratorium RS. Khusus Ginjal Ny. R.A Habibie adalah pelayanan rumah sakit bagi pasien rawat jalan dan rawat inap untuk penunjang penegakan diagnosa penyakit oleh para klinisi, agar didapatkan diagnosa yang dapat dipertanggung jawabkan secara medis.</p>
        </div>
      </main>
      <div className={style.bg}>
        <div className={style.wrapper}>
          <div className={style.h2}>
            <Grid className='mb-2'>
              <Grid.Col md={12} lg={3.6} xl={3}>
                <div
                  ref={myRef}
                >
                  <Image className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                    src={lab}
                    alt="Laboratorium"
                    priority
                  />
                </div>
              </Grid.Col>
              <Grid.Col md={12} lg={8.4} xl={9}>
                <List className='list-none text-md mt-7'>
                  <List.Item>KONSEP <span className='text-[#1E90FF]'>PELAYANAN LABORATORIUM :</span></List.Item>
                </List>
                <p className='text-md mt-3 font-thin'>Instalasi Laboratorium RS. Khusus Ginjal Ny. R.A Habibie adalah wadah uang mengelola pelayanan Laboratorium secara profesional, bermutu serta terjangkau oleh pasien yang meliputi seluruh jenis-jenis pemeriksaan yang diperlukan dalam menunjang pelayanan kesehatan paripurna sesuai kemampuan rumah sakit.
                  <br />
                  <br />
                  Beberapa pemeriksaan rutin khusus pasien Hemodialisa lainnya kami rujuk ke Laboratorium luar yang memang telah melakukan kerjasama dengan RS. Khusus Ginjal Ny. R.A Habibie sebagai upaya untuk melengkapi pemeriksaan penunjang yang tidak bisa dikerjakan di Laboratorium kami.
                </p>
              </Grid.Col>
              <Grid.Col md={12} lg={3.6} xl={3}>
                <div
                  ref={myRef1}
                >
                  <Image className={`${style.image} ${myImageIsVisible1 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                    src={PLAB}
                    alt="Laboratorium"
                    priority
                  />
                </div>
              </Grid.Col>
              <Grid.Col md={12} lg={8.4} xl={9}>
                <List className='list-none text-md mt-7'>
                  <List.Item>PEMERIKSAAN <span className='text-[#1E90FF]'>YANG DILAKUKAN :</span></List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Hematologi rutin, yang terdiri dari pemeriksaan Hemoglobin, Leukosit, Eritrosit, Hematokrit, Trombosit dan Nilai MC.</List.Item>
                    <List.Item>Kimia Klinik yang terdiri dari pemeriksaan Ureum, Kreatinin, Glukosa dan Asam Urat.</List.Item>
                    <List.Item>Pemeriksaan Elektrolit Serum yang terdiri dari pemeriksaan Kalium, Natrium dan Calsium Ion.</List.Item>
                    <List.Item>Kimia Klinik yang terdiri dari pemeriksaan Ureum, Kreatinin, Glukosa dan Asam Urat.</List.Item>
                    <List.Item>Imunoserologi terdiri dari pemeriksaan HbsAG rapid, anti HIV rapid dan anti HCV rapid yang berfungsi sebagai skrining awal bagi pasien Hemodialisa.</List.Item>
                  </List>
                </List>
              </Grid.Col>
            </Grid>
            <br />
            <br />
            <List className='list-none text-md mt-3 font-[350] text-[#4B3F3F]'>
              <List.Item>INSTALASI LABORATORIUM</List.Item>
              <List.Item>RS. Khusus Ginjal Ny. R.A Habibie</List.Item>
              <List.Item>Jl. Tubagus Ismail no.46, Bandung</List.Item>
              <List.Item>Telp.(022) 2501985/86 ext.106/133</List.Item>
            </List>
          </div>
        </div>
      </div>
    </>
  )

}

export default Laboratorium;
