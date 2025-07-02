import Border from "@component/border";
import { Grid, Text } from "@mantine/core";
import style from './assets/Farmasi.module.css'
import Image from "next/image";
import ICU2 from './assets/image/ICU.jpg'
import { useInView } from 'react-intersection-observer'

export default function ICU() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  return (
    <>
      <Text className={style.h1}
      >Intensive Care Unit (ICU)</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <p className='text-md mt-5 font-thin'><b>Intensive Care Unit</b> adalah unit perawatan intensif yang dirancang khusus untuk menangani pasien dengan kondisi kritis atau yang membutuhkan pengawasan medis ketat secara terus-menerus.
            <br />
            <br />
            Didukung oleh tenaga medis profesional yang terlatih di bidang kegawatan, peralatan medis canggih, serta sistem monitoring 24 jam, ICU kami siap memberikan pelayanan optimal demi meningkatkan peluang kesembuhan pasien.
          </p>
        </div>
      </main>
      <div className={style.bg}>
        <div className={style.wrapper}>
          <div className={style.h2}>
            <Grid>
              <Grid.Col md={12} lg={5} xl={4}>
                <div
                  ref={myRef}
                >
                  <Image className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                    src={ICU2}
                    alt="ICU"
                  />
                </div>
                <br />
              </Grid.Col>
              <Grid.Col md={10} lg={7} xl={8}>
                <br />
                <p className='text-md px-5 mb-2'>PELAYANAN ICU<span className='text-[#1E90FF]'> MENCAKUP:</span></p>
                <ul className='list-disc text-md font-thin mt-3 px-14'>
                  <li>Perawatan pasien dengan gangguan pernapasan berat, syok, gagal organ, dll</li>
                  <li>Pemantauan intensif dengan alat monitor multiparameter</li>
                  <li>
                    <li>Ventilator mekanik dan alat bantu pernapasan lainnya</li>
                    <li>Layanan dari dokter spesialis anestesi dan intensivis</li>
                    <li>Perawatan kolaboratif bersama dokter spesialis lain sesuai kebutuhan pasien</li>
                  </li>
                </ul>
                <br />
                <p className='text-md px-5 mb-2'>FASILITAS<span className='text-[#1E90FF]'> PENDUKUNG:</span></p>
                <ul className='list-disc text-md font-thin mt-3 px-14'>
                  <li>Ruang perawatan dengan isolasi sesuai kebutuhan</li>
                  <li>Sistem alarm dan pemantauan real-time</li>
                  <li>Rasio perawat dan pasien yang ideal untuk perawatan intensif</li>
                  <li>Tim Code Blue yang siaga 24 jam</li>
                </ul>
                <p className='text-md mt-5 font-thin'>Di ICU RSKG Ny R.A. Habibie, kami memahami bahwa setiap detik sangat berarti. Oleh karena itu, kami berkomitmen untuk memberikan penanganan cepat, akurat, dan penuh empati kepada setiap pasien dalam kondisi kritis.</p>
              </Grid.Col>
            </Grid>
          </div>
        </div>
      </div>
    </>
  )
}
