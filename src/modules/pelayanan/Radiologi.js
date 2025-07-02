import { Grid, List, Text } from '@mantine/core'
import style from './assets/Radiologi.module.css'
import Border from '@component/border'
import radiologi from './assets/image/Radiologi.jpg'
import usg from './assets/image/usg.jpg'
import Image from 'next/future/image'
import { useInView } from 'react-intersection-observer'

function Radiologi() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  return (
    <>
      <Text className={style.h1}
      >Instalasi Radiologi</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>

        </div>
      </main>

      <div className={style.wrapper}>
        <div className={style.h2}>
          <Grid>
            <Grid.Col mt='24px' md={12} lg={3.3} xl={3.5}>
              <div
                ref={myRef}
              >
                <Image className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  src={radiologi}
                  alt="Radiologi"
                />
              </div>
              <br />
              <div
                ref={myRef1}
              >
                <Image className={`${style.image} ${myImageIsVisible1 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  src={usg}
                  alt="USG"
                />
              </div>
            </Grid.Col>
            <Grid.Col md={12} lg={8.7} xl={8}>
              <br />
              <p className='text-md mt-3 font-thin text-[#4B3F3F]'><p className='text-md mt-3 font-thin'>Instalasi Radiologi merupakan salah satu unit penunjang medis yang berperan penting dalam proses diagnosis dan evaluasi kondisi kesehatan pasien. Didukung oleh tenaga radiografer profesional dan dokter spesialis radiologi yang berpengalaman, kami menyediakan layanan pemeriksaan <b>Rontgen (X-Ray) dan Ultrasonografi (USG) dengan standar mutu yang tinggi</b>.
                <br />
                <br />
                Fasilitas Rontgen kami mampu menghasilkan citra tubuh secara cepat dan akurat untuk mendeteksi berbagai gangguan seperti kelainan pada tulang, paru-paru, dan organ lainnya. Sementara itu, layanan USG digunakan untuk melihat gambaran jaringan lunak, termasuk pemeriksaan organ dalam, serta pembuluh darah, dengan metode yang aman dan non-invasif.
                <br />
                <br />
                Dengan menggunakan peralatan radiologi modern dan prosedur yang mengutamakan keselamatan serta kenyamanan pasien, kami berkomitmen untuk memberikan layanan diagnostik yang efisien, tepat waktu, dan berkualitas tinggi sebagai bagian integral dari perawatan kesehatan yang menyeluruh.
              </p></p>
            </Grid.Col>
          </Grid>
        </div>
      </div>
    </>
  )

}

export default Radiologi;
