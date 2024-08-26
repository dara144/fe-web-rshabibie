import { Grid, List, Text } from '@mantine/core'
import style from './assets/Farmasi.module.css'
import Border from '@component/border'
import farmasi from './assets/image/Farmasi.JPG'
import PFAR from './assets/image/PFAR.JPG'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

function Farmasi() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  return (
    <>
      <Text className={style.h1}
      >Farmasi</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <p className='text-md mt-5 font-thin'>Farmasi merupakan sebuah unit yang bersih, profesional dan aman, berdasarkan keyakinan bahwa kebutuhan pelanggan adalah yang paling utama. Seluruh tim berkomitmen untuk memenuhi kebutuhan tersebut. Unit farmasi menyediakan berbagai kebutuhan obat-obatan Anda. Melalui klinik farmasi, kami membantu melakukan pemantauan penggunaan obat dalam terapi, mengkaji ketepatgunaan biaya pengobatan dengan standar  Formularium Obat bagi para pasien, yang direvisi secara berkala sesuai dengan perkembangan dunia kedokteran.</p>
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
                    src={farmasi}
                    alt="Farmasi"
                  />
                </div>
              </Grid.Col>
              <Grid.Col md={10} lg={7} xl={8}>
                <List className='list-none text-md mt-3'>
                  <List.Item className='font-[350] text-[#4B3F3F]'>Instalasi Farmasi merupakan unit pelaksana fungsional yang menyelenggarakan seluruh kegiatan pelayanan kefarmasian di Rumah Sakit, yang meliputi :</List.Item>
                  <List className='list-disc text-md mt-3 mb-5 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Pengelolaan sediaan Farmasi, Alat Kesehatan dan Bahan Medis Habis Pakai, dan</List.Item>
                    <List.Item>Pelayanan Farmasi klinik</List.Item>
                  </List>
                  <List.Item>TAMBAHAN <span className='text-[#1E90FF]'>LAINNYA :</span></List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Pelayanan resep pasien JKN, Kontraktor, dan Umum (Swasta)</List.Item>
                    <List.Item>Pelayanan Informasi Obat (PIO)</List.Item>
                    <List.Item>Pelayanan konsultasi obat oleh Apoteker</List.Item>
                  </List>
                </List>
              </Grid.Col>
              <Grid.Col md={12} lg={5} xl={4}>
                <div
                  ref={myRef1}
                >
                  <Image className={`${style.image} ${myImageIsVisible1 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                    src={PFAR}
                    alt="Farmasi"
                  />
                </div>
              </Grid.Col>
              <Grid.Col md={10} lg={7} xl={8}>
                <List className='list-none text-md mt-3'>
                  <List.Item>TERDIRI DI :</List.Item>
                  <List className='list-decimal text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item><strong>Depo Farmasi IGD dan Rawat Inap (Gedung Baru Lt G)</strong></List.Item>
                    <List className='list-none text-md mt-2 mb-3 font-[350] text-[#4B3F3F]' withPadding>
                      <List.Item>Jam Pelayanan : Setiap Hari (24 Jam)</List.Item>
                      <List.Item>Pelayanan Resep Pasien IGD dan Rawat Inap.</List.Item>
                    </List>
                    <List.Item><strong>Depo Farmasi Rawat Jalan (Gedung Baru Lt 1)</strong></List.Item>
                    <List className='list-none text-md mt-2 mb-3 font-[350] text-[#4B3F3F]' withPadding>
                      <List.Item>Jam Pelayanan : 07.00 s/d 21.00 WIB</List.Item>
                      <List.Item>Pelayanan Resep Pasien Poliklinik , Hemodialisadan PD.</List.Item>
                    </List>
                    <List.Item><strong>Depo Pengadaan Farmasi (Gedung Lama Lt 1)</strong></List.Item>
                    <List className='list-none text-md mt-2 mb-3 font-[350] text-[#4B3F3F]' withPadding>
                      <List.Item>Jam Pelayanan : 08.00 s/d 15.30 WIB</List.Item>
                      <List.Item>Kegiatan Pengadaan Perbekalan Farmasi, Alat Kesehatan dan Bahan Medis Habis Pakai.</List.Item>
                    </List>
                    <List.Item><strong>Depo Gudang Farmasi (Gedung Lama Lt 2)</strong></List.Item>
                    <List className='list-none text-md mt-2 mb-3 font-[350] text-[#4B3F3F]' withPadding>
                      <List.Item>Jam Pelayanan : 07.00 s/d 17.00 WIB</List.Item>
                      <List.Item>Kegiatan Penerimaan, Penyimpanan dan Pendistribusian Perbekalan Farmasi, Alkes dan BMHP.</List.Item>
                    </List>
                  </List>
                </List>
              </Grid.Col>
            </Grid>
            <List className='list-none text-md mt-2 mb-3 font-[350] text-[#4B3F3F]'>
              <List.Item className='font-[350] text-[#4B3F3F]'>INSTALASI FARMASI</List.Item>
              <List.Item className='font-[350] text-[#4B3F3F]'>RS. KHUSUS GINJAL NY.R.A. HABIBIE</List.Item>
              <List.Item className='font-[350] text-[#4B3F3F]'>Jl. Tubagus Ismail no.46, Bandung</List.Item>
              <List.Item className='font-[350] text-[#4B3F3F]'>Apoteker : Nuni Yunita, S.Farm,.Apt</List.Item>
              <List.Item className='font-[350] text-[#4B3F3F]'>19840611/SIPA_32.73/2017/2226</List.Item>
              <List.Item className='font-[350] text-[#4B3F3F]'>Telp. (022)2501985 Ext 156/ 192</List.Item>
              <List.Item className='font-[350] text-[#4B3F3F]'>Fax. (022) 2501984</List.Item>
              <List.Item className='font-[350] text-[#4B3F3F]'>E-Mail : farmasirskg@gmail.com</List.Item>
            </List>
          </div>
        </div>
      </div>
    </>
  )

}

export default Farmasi;
