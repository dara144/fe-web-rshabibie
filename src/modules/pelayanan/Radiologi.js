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
      >Radiologi & USG</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <p className='text-md mt-3 font-thin'>Unit radiologi merupakan sebuah unit khusus yang menerapkan penggunaan teknologi pencitraan terkini untuk memetakan dan mendukung diagnosis penyakit atau kelainan organ tubuh manusia.</p>
        </div>
      </main>

      <div className={style.bg}>
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
              </Grid.Col>
              <Grid.Col md={12} lg={8.7} xl={8}>
                <List className='list-none text-md mt-6'>
                  <List.Item>KONSEP PELAYANAN <span className='text-[#1E90FF]'>RADIOLOGI & USG</span></List.Item>
                  <p className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]'>
                    Dengan menggunakan alat General X ray Del Medical type FWFC - USA , kami dapat melayani pasien dalam hal pemeriksaan radiologi konvensional seperti x ray kepala, thorax/ dada, tulang belakang, abdomen/ perut, tangan dan kaki. Sehingga dapat membantu dalam hal penegakan diagnosis dan dalam memberikan therapi / pengobatan.
                    Selain memiliki alat-alat diagnostik konvensional, unit ini juga telah mengadopsi teknologi radiologi yang mutakhir seperti Echocardiografi, Color Doppler Ultrasound, dan Ultrasonografi untuk semua organ tubuh dengan menggunakan alat ultrasonografi dengan merk GE - LOGIQ P7.
                  </p>
                </List>
              </Grid.Col>
              <Grid.Col mt='15px' md={12} lg={3.3} xl={3.5}>
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
                <p className='text-md mt-3 font-thin text-[#4B3F3F]'>
                  GE - LOGIQ P7 merupakan salah satu alat Ultrasonografi yang memiliki 3 probe yaitu linier, convex dan mikro convex, sehingga mampu mendeteksi dan menganalisis berbagai macam penyakit pada berbagai organ tubuh. Disertai pula printer yang berwarna sehingga dapat membedakan pembuluh darah arteri dan vena dan lebih memperjelas posisi penyumbatan atau letak kelainannya.
                  <br />
                  Unit radiologi didukung oleh dokter spesialis yang ahli di bidangnya yaitu radiologi dan jantung yang didampingi radiografer berpengalaman yang sudah terlatih dibidangnya. Hal ini merupakan salah satu upaya memberikan pelayanan kesehatan yang paripurna agar mencapai kepuasan pelanggan yang sempurna.
                  <br />
                  <br />
                  Jadwal radiologi : Jam 07.30 - 21.00 wib Konsultasi dengan dokter spesialis radiologi dengan perjanjian.</p>
              </Grid.Col>
            </Grid>
          </div>
        </div>
      </div>
    </>
  )

}

export default Radiologi;
