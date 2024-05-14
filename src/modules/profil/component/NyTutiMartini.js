import { Grid, Modal, Text } from '@mantine/core'
import style from '../assets/Biografi.module.css'
import Border from '../../../component/border'
import { useState } from 'react';
import Image from 'next/future/image';
import nytuti from '../assets/image/Ny.-Tuti-Marini-Puspowardojo.jpg'
import border from '../assets/image/border.png'

function Bio1() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Text className={style.h1}
      >Ny. Tuti Marini Puspowardojo (R.A. Habibie) Alm</Text>
      <main className={style.wrapper}>
        <div className='w-[85vw] h-screen'>
          <Border />
          <Grid>
            <Grid.Col md={6} lg={5} xl={2.3}>
              <Image className='lg:w-full rounded-md mr-6 sm:w-full'
                src={nytuti}
                alt="Ny.Tuti Marini Puspowardojo"
              />
            </Grid.Col>

            <Grid.Col md={6} lg={7} xl={9.3}>
              <div className={style.h2}>
                <p className='text-md font-thin'>Ny.  R.A. Tuti Marini Puspowardojorini  Puspowardojo  adalah  figur  seorang ibu  Indonesia  yang  kerja  keras  dan  teladannya  sebagai  seorang ibu  rumah  tangga  patut  menjadi  inspirasi.  Dari  beliaulah  lahir beberapa  putra  Indonesia  terbaik  yang  tak  hanya  mengharumkan  nama  keluarga,  juga  karya-karya  mereka  melampaui  batas teritorial,  tak  hanya  diakui  di  Indonesia,  tetapi  juga  di  mancanegara. Salah  seorang  putranya  adalah  B.J.  Habibie,  yang  merupakan  anak  keempat  dari  delapan  bersaudara.  B.J.  Habibie adalah  orang  yang  bertanggung  jawab  atas  lahirnya  Industri Pesawat  Terbang  Nusantara  (IPTN)  dan  juga  pesawat  terbang buatan  Indonesia yaitu  N-250.  Beliau  memegang  banyak paten  di  industri  penerbangan  dan  juga  menjadi  Presiden  RI ketiga. Putrinya  yang  lain,  Sri  Redjeki  Chasanah,  yang  menikah dengan  Mayjen  (Purn)  Soedarsono  Darmosoewito,  adalah  seorang  pegiat  dan  aktivis  sosial  yang  banyak  membangun  fasilitas  pendidikan  dan  kesehatan  di  berbagai  daerah  di  Indonesia.
                  <br />
                  <br />
                  Kesuksesan  B.J.  Habibie  dan  Sri  Soedarsono  tidak  bisa lepas  dari  perjuangan  ibunda  tercinta,  R.A.  Tuti  Marini  Puspowardojo.  Tuti  Marini  lahir  pada  10  November  1911  di  Yogyakarta.  Nenek  R.A.  Tuti  Marini  Puspowardojo  adalah  seorang dokter  spesialis  mata  di  Yogyakarta,  dan  ayahnya  yang  bernama  Puspowardojo  bertugas  sebagai  pemilik  sekolah.  Tradisi intelektual  telah  ditanamkan  oleh  orang  tuanya  sejak  dini  di samping  pengajaran  keagamaan,  serta  nilai-nilai  tradisi  yang dimiliki  sebagai  warisan  leluhur  tetap  dipelihara. <i className='cursor-pointer text-cyan-500' onClick={() => setOpened(true)}>
                    Klik disini untuk melihat lebih detail..
                  </i>
                </p>
                <Modal
                  size='90%'
                  opened={opened}
                  onClose={() => setOpened(false)}
                >
                  <div className='mx-[5vw]'>
                    <Grid>
                      <Grid.Col md={12} lg={5} xl={3}>
                        <Image className='rounded-md shadow-xl'
                          src={nytuti}
                          alt="Ny. Tuti Marini Puspowardojo"
                        />
                      </Grid.Col>
                      <Grid.Col md={12} lg={7} xl={9}>
                        <div className='grid grid-cols-2'>
                          <Image
                            width={320}
                            src={border}
                            alt="border"
                          />
                          <Image
                            width={320}
                            src={border}
                            alt="border"
                          />
                        </div>
                        <div className={style.h2}>
                          <p className='text-md font-thin mt-5 mb-3'>
                            Kesuksesan  B.J.  Habibie  dan  Sri  Soedarsono  tidak  bisa lepas  dari  perjuangan  ibunda  tercinta,  R.A.  Tuti  Marini  Puspowardojo.  Tuti  Marini  lahir  pada  10  November  1911  di  Yogyakarta.  Nenek  R.A.  Tuti  Marini  Puspowardojo  adalah  seorang dokter  spesialis  mata  di  Yogyakarta,  dan  ayahnya  yang  bernama  Puspowardojo  bertugas  sebagai  pemilik  sekolah.  Tradisi intelektual  telah  ditanamkan  oleh  orang  tuanya  sejak  dini  di samping  pengajaran  keagamaan,  serta  nilai-nilai  tradisi  yang dimiliki  sebagai  warisan  leluhur  tetap  dipelihara.
                            <br />
                            <br />
                            Ny.  R.A. Tuti Marini Puspowardojorini  Puspowardojo  adalah  figur  seorang ibu  Indonesia  yang  kerja  keras  dan  teladannya  sebagai  seorang ibu  rumah  tangga  patut  menjadi  inspirasi.  Dari  beliaulah  lahir beberapa  putra  Indonesia  terbaik  yang  tak  hanya  mengharumkan  nama  keluarga,  juga  karya-karya  mereka  melampaui  batas teritorial,  tak  hanya  diakui  di  Indonesia,  tetapi  juga  di  mancanegara. Salah  seorang  putranya  adalah  B.J.  Habibie,  yang  merupakan  anak  keempat  dari  delapan  bersaudara.
                          </p>
                        </div>
                      </Grid.Col>
                    </Grid>
                    <div className={style.h2}>
                      <p className='text-md font-thin mb-12'>
                        B.J.  Habibie adalah  orang  yang  bertanggung  jawab  atas  lahirnya  Industri Pesawat  Terbang  Nusantara  (IPTN)  dan  juga  pesawat  terbang buatan  Indonesia yaitu  N-250.  Beliau  memegang  banyak paten  di  industri  penerbangan  dan  juga  menjadi  Presiden  RI ketiga. Putrinya  yang  lain,  Sri  Redjeki  Chasanah,  yang  menikah dengan  Mayjen  (Purn)  Soedarsono  Darmosoewito,  adalah  seorang  pegiat  dan  aktivis  sosial  yang  banyak  membangun  fasilitas  pendidikan  dan  kesehatan  di  berbagai  daerah  di  Indonesia.

                        <br />
                        <br />
                        Pada  tahun  1948,  Alwi  Abdul  Jalil Habibie  dipromosikan menjadi  Inspektur  Jenderal  Pertanian  Indonesia  Timur  yang berkedudukan  di  Makassar.  Mereka  tinggal  di  Jalan  Maricaya (Klapperland).  Di  seberang  jalan,  kebetulan  bermarkas  pula pasukan  Brigade  Mataram  yang  dipimpin  oleh  Overste  Soeharto.  Pasukan  Brigade  Mataram  kebanyakan  adalah  keturunan  Jawa  sehingga  mereka  sering  bertamu  ke  rumah  Alwi  Abdul Jalil  Habibie.
                        <br />
                        <br />
                        Pada  10  September  1950,  Alwi  Abdul  Jalil  Habibie  mendapat  serangan  jantung  ketika  tengah  bersujud  shalat  Isya. Kakak  B.J.  Habibie  bernama  Sri  Sulaksmi  berlari  sambil  menangis  ke  asrama  Brigade  Mataram  untuk  meminta  pertolongan  dokter.  Kemudian  Overste  Soeharto  (kelak  menjadi  Presiden  RI  kedua)  dan  Dokter  Tek  Irsan  datang  ke  rumah  Alwi Abdul  Jalil  Habibie.  Namun  sayang,  nyawa  Alwi  Abdul  Jalil Habibie  sudah  tidak  tertolong  lagi.
                        <br />
                        <br />
                        Tidak  lama  setelah  suaminya  meninggal,  Tuti  Marini  memutuskan  bahwa  anak-anaknya  harus  segera  pergi  ke  Jawa  untuk  sekolah.  Beberapa  bulan  kemudian,  Tuti  Marini  merasa tidak  tenang  tinggal  di  Ujungpandang  dan  memutuskan  untuk  sekeluarga  pindah  ke  Bandung.  Rumah  dan  kendaraan  di Ujungpandang  terpaksa  dijual.  Dengan  uang  hasil  penjualan itu,  Tuti  Marini  membeli  dua  rumah  dan  sebuah  mobil  di Bandung.
                        <br />
                        <br />
                        Tuti  Marini  bertekad  agar  anak-anaknya  dapat  melanjutkan  pendidikan  semaksimal  kemampuannya,  termasuk  ke  luar negeri.  Ia  sudah  berjanji  kepada  almarhum  suaminya  untuk menyekolahkan  anak-anaknya  ke  luar  negeri.  Maka,  ia  berjuang  keras  dengan  segala  daya  upaya  untuk  membiayai  sekolah  B.J.  Habibie  di  Jerman.  Tuti  mendirikan  perusahaan bernama  Srikandi  NV  yang  bergerak  di  bidang  ekspor-impor.
                        <br />
                        <br />
                        Dengan  gesitnya  Tuti  membangun  usaha  dengan  memanfaatkan  relasi-relasi  yang  ia  miliki.  Tanpa  kenal  lelah,  ia  kadang menyetir  mobil  sendiri  dari  Bandung  ke  Yogyakarta,  dan  dari Bandung  ke  Jakarta,  pulang-pergi.  Semua  itu  ia  lakukan  demi pendidikan  terbaik  untuk  anak-anaknya.  “Saya  ingat,  ibu membeli  rumah  di  JI.  Imam  Bonjol  No.  19  yang  kemudian dibangun  menjadi  hotel  untuk  para  alumni  lulusan  ITB  dan Unpad  yang  baru  pulang  dari  studi  di  luar  negeri,”  kenang  Sri.
                        Ny.  R.A.  Habibie,  yang  dipanggil  dengan  sebutan  “Mamih  Besar”  di  lingkungan  keluarga  terdekatnya,  juga  berusaha dalam  segala  hal.  Berdagang,  membuka  katering,  usaha  mebel, dan  lain-lain.  Ia  selalu  berpesan  kepada  anak-anaknya  untuk tidak  bergantung  kepada  orang  lain,  tetapi  hendaknya  bergantung  kepada  dirinya  sebagai  ibu.  Ia  juga  selalu  mendidik anak-anaknya  untuk  selalu  menjadi  nomor  satu.  Falsafah  yang ditanamkan  kepada  anak  dan  cucunya  adalah  disiplin,  terbuka,  dan  fair.
                        <br />
                        <br />
                        Perjuangan  Ny.  R.A.  Habibie  tidaklah  sia-sia.  Sekarang bangsa  Indonesia  merasakan  manfaat  besar  hasil  perjuangan beliau  dalam  mendidik  dan  menyekolahkan  anak-anaknya.  Di Bandung,  saat  adik  B.J.  Habibie  yaitu  Sri  Soedarsono  mendirikan  Klinik  Ginjal  Bandung  (KGB)  di  J1.  Aceh  No.  60,  Ny. R.A.  Habibie  banyak  menyumbang  berbagai  fasilitas  untuk klinik  sederhana  yang  kelak  menjadi  Rumah  Sakit  Khusus Ginjal  (RSKG)  dan  menjadi  rujukan  bagi  para  penderita  gagal ginjal  yang  memerlukan  pelayanan  cuci  darah.  “Beliau  menyumbangkan  apa  yang  ada  di  rumah.  Lemari,  kulkas,  sampai ke  gorden  untuk  penutup  jendela  disumbang  Ibu  R.A.  Habibie,”  kenang  Sri. Nama  Ny.  R.A.  Habibie  kemudian  diabadikan  sebagai nama  Rumah  Sakit  Khusus  Ginjal  di  J1.  Tubagus  Ismail  No. 46,  Bandung,   untuk  menghormati  jasa-jasa  dan  perhatian  beliau  terhadap  perkembangan  rumah  sakit  ini  di  awal  pendiriannya.
                      </p>
                    </div>
                  </div>
                </Modal>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </main >
    </>
  )

}

export default Bio1;
