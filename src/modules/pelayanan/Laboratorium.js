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
      >Instalasi Laboratorium</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <p className='text-md mt-3 font-thin'>Instalasi Laboratorium merupakan unit penunjang medis yang berperan penting dalam membantu proses diagnosis, pemantauan terapi, dan evaluasi kondisi kesehatan pasien secara akurat dan cepat. Laboratorium kami melayani pemeriksaan untuk pasien rawat jalan, rawat inap, IGD, hingga Medical Check Up (MCU), baik pasien penyakit ginjal maupun pasien umum.
            <br />
            <br />
            Didukung oleh tenaga analis laboratorium profesional dan peralatan modern yang terkalibrasi secara berkala, kami menjamin hasil pemeriksaan yang akurat, aman, dan tepat waktu sesuai standar mutu laboratorium klinik rumah sakit.
          </p>
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
                <br />
                <br />
                <p className='text-md px-5 mb-2'>JENIS PEMERIKSAAN <span className='text-[#1E90FF]'> YANG TERSEDIA:</span></p>
                <ul className='list-disc text-md font-thin mt-3 px-14'>
                  <li><b>Hematologi</b> (darah lengkap, hitung jenis, LED, dll.)</li>
                  <li><b>Urinalisis</b> dan pemeriksaan khusus terkait ginjal</li>
                  <li><b>Imunologi dan Serologi</b> (tes hepatitis, HIV, hormon, D-Dimer, CRP, dll.)</li>
                  <li><b>Pemeriksaan Mikroalbuminuria dan Clearance Kreatinin</b></li>
                  <li>Pemeriksaan lain sesuai permintaan dokter</li>
                </ul>
                <p className='text-md mt-3 font-thin'>💡 Hasil pemeriksaan dapat diakses langsung melalui dokter penanggung jawab pasien atau melalui sistem informasi laboratorium untuk kenyamanan dan efisiensi layanan.</p>
                <br />
                <p className='text-md px-5 mb-2'>JAM PELAYANAN<span className='text-[#1E90FF]'> LABORATORIUM</span></p>
                <ul className='list-disc text-md font-thin mt-3 px-14'>
                  <li><b>Senin - Sabtu</b> : 07.30 - 20.00 WIB</li>
                  <li><b>Pelayanan 24 jam</b> untuk pasien IGD dan rawat inap</li>
                </ul>
                <p className='text-md mt-3 font-thin'>Instalasi Laboratorium kami berkomitmen mendukung pelayanan rumah sakit secara menyeluruh dengan menyediakan data laboratorium yang cepat, valid, dan dapat dipercaya sebagai dasar pengambilan keputusan medis.</p>
              </Grid.Col>
            </Grid>
          </div>
        </div>
      </div>
    </>
  )

}

export default Laboratorium;
