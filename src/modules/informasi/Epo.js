import { Grid, Text } from '@mantine/core'
import style from './assets/Epo.module.css'
import Border from '@component/border'
import Image from 'next/image';
import epo2 from './assets/image/epo2.jpg'
import epo3 from './assets/image/epo3.jpg'
import epo4 from './assets/image/epo4.jpg'
import epo1 from './assets/image/epo1.jpg'
import iht1 from './assets/image/iht1.jpg'
import iht2 from './assets/image/iht2.jpg'
import penyuluhan1 from './assets/image/penyuluhan1.jpg'
import penyuluhan2 from './assets/image/penyuluhan2.jpg'
import penyuluhan3 from './assets/image/penyuluhan3.jpg'

function Epo() {
  return (
    <>
      <Text className={style.h1}
      >Asuhan Keperawatan</Text>
      <main className={style.wrapper}>
        <Border />

        <div className={style.h2}>
          <label className='text-lg'>ASUHAN<b className='text-cyan-600'> KEPERAWATAN</b></label>

          <ul className='list-decimal px-8'>
            <li>
              <p className='text-md mt-3 mb-5'>Kegiatan Bidang Keperawatan (Konsultasi Pra Asesmen dan Persetujuan Asesmen Uji Kompetensi Perawat. Oleh Assesor Perawat RSKG Ny. R.A. Habibie.</p>
              <Grid className='mb-8'>
                <Grid.Col sm={12} md={6} lg={6} xl={6}>
                  <Image className='rounded-md object-cover'
                    width={550}
                    height={465}
                    src={epo2}
                    alt="epo2"
                  />
                </Grid.Col>
                <Grid.Col sm={12} md={6} lg={6} xl={6}>
                  <Image className='rounded-md object-cover'
                    width={500}
                    height={455}
                    src={epo3}
                    alt="epo3"
                  />
                </Grid.Col>
              </Grid>
            </li>
            <li>
              <p className='text-md mt-3 mb-5'>Kegiatan Pelaksanaan Uji Kompetensi Perawat RSKG Ny. R.A. Habibie Oleh Tim Assesor Perawat RSKG Ny. R.A. Habibie.</p>
              <Grid className='mb-8'>
                <Grid.Col sm={12} md={6} lg={6} xl={6}>
                  <Image className='rounded-md object-cover'
                    width={600}
                    height={480}
                    src={epo4}
                    alt="epo4"
                  />
                </Grid.Col>
                <Grid.Col sm={12} md={6} lg={6} xl={6}>
                  <Image className='rounded-md object-cover'
                    width={500}
                    height={430}
                    src={epo1}
                    alt="epo1"
                  />
                </Grid.Col>
              </Grid>
            </li>
            <li>
              <p className='text-md mt-3'>Kegiatan Bidang Keperawatan dengan PKRS, dalam memberikan Promkes dan Edukasi pada Staf Rumah Sakit, Pasien dan Keluarga, dilingkungan Rumah Sakit dan diluar Linkungan Rumah Sakit Sperti Pos Bindu, Pos Yandu,Sekolah, Panti Werda dan lain-lain.</p>
              <ul className='list-disc px-5'>
                <li>
                  <p className='text-md mt-3 mb-5 font-thin'>Kegiatan IHT Komunikasi Efektif bagi karyawan RSKG Ny. R.A. Habibie, oleh Bidang Keperawatan. <i>( 30 September 2022 )</i></p>
                  <Grid className='mb-8'>
                    <Grid.Col sm={12} md={6} lg={6} xl={6}>
                      <Image className='rounded-md object-cover'
                        height={455}
                        width={550}
                        src={iht1}
                        alt="iht1"
                      />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6} lg={6} xl={6}>
                      <Image className='rounded-md object-cover'
                        width={500}
                        height={430}
                        src={iht2}
                        alt="iht2"
                      />
                    </Grid.Col>
                  </Grid>
                </li>
                <li className='mb-8'>
                  <p className='text-md mt-3 mb-5 font-thin'>Kegiatan Penyuluhan Tim PKRS RSKG Ny. R.A. Habibie Terhadap Pasien Dan Keluarga Tentang Hipertensi, oleh PKRS RSKG Ny. R.A. Habibie.</p>
                  <Image className='rounded-md'
                    height={350}
                    width={750}
                    src={penyuluhan1}
                    alt="penyuluhan1"
                  />
                </li>
                <li>
                  <p className='text-md mt-3 mb-5 font-thin'>Kegiatan Penyuluhan Tim PKRS RSKG Ny. R.A. Habibie Terhadap  Siswa Siswi SDN 025 Cikutra Tentang <i>“GEBRAK SERBU ( Gerakan Bersama Makan Buah dan Sayur )”</i> oleh PKRS RSKG Ny. R.A. Habibie. <i>(  12 Oktober 2022 )</i></p>
                  <Grid className='mb-8'>
                    <Grid.Col sm={12} md={6} lg={6} xl={6}>
                      <Image className='rounded-md object-cover'
                        height={320}
                        width={550}
                        src={penyuluhan2}
                        alt="penyuluhan2"
                      />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6} lg={6} xl={6}>
                      <Image className='rounded-md object-cover'
                        width={500}
                        height={300}
                        src={penyuluhan3}
                        alt="penyuluhan3"
                      />
                    </Grid.Col>
                  </Grid>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </>
  )

}

export default Epo;
