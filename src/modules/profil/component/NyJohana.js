import { Grid, Modal, Text } from '@mantine/core'
import style from '../assets/Biografi.module.css'
import Border from '../../../component/border'
import { useState } from 'react';
import Image from 'next/future/image';
import nyjohana from '../assets/image/Ny.-Johana-Sunarti-Nasution.jpg'
import border from '../assets/image/border.png'

function Bio4() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Text className={style.h1}
      >Ny. Johana Sunarti Nasution (Alm)</Text>
      <main className={style.wrapper}>
        <div className='w-[85vw] h-screen'>
          <Border />

          <Grid>
            <Grid.Col md={6} lg={5} xl={2.3}>
              <Image className='lg:w-full mr-6 rounded-md sm:w-full'
                src={nyjohana}
                alt="Ny. Johana Sunarti Nasution"
              />
            </Grid.Col>
            <Grid.Col md={6} lg={7} xl={9.3}>
              <div className={style.h2}>
                <p className='text-md font-thin'>Almarhumah  Ny. Johana  Sunarti  Nasution  adalah  putri Sunario  Gondokusumo,  salah  seorang aktivis  pergerakan  nasional.  Beliau  lahir  di  Surabaya, 1  November  1923.  Semasa hidupnya,  Bu  Nas  dikenal  aktif  dalam  berbagai  kegiatan  sosial. Di  antaranya,  mendirikan  berbagai  yayasan,  seperti  Yayasan Bina  Wicara  “Vacana  Mandira”,  Yayasan  Jambangan  Kasih, Yayasan  Pembinaan  dan  Asuhan  Bunda,  Yayasan  Panti  Usada Mulia,  dan  Yayasan  Santi  Rama.
                  <br />
                  <br />
                  Atas  berbagai  jasa  dan  aktivitas  sosialnya  itu,  Bu  Nas  dianugerahi  sejumlah  tanda  kehormatan  oleh  pemerintah.  Di antaranya,  Satya  Lantjana  Kebaktian  Sosial  pada  tahun  1971, Lencana  Satya  Bhakti  Utama  Persit  Kartika  Chandra  Kirana (20  Februari 1989),  Bintang  Perjuangan  Angkatan  45 (17 Agustus  1995),  dan  Bintang  Maha  Putra  Utama  (15  Agustus 1995).
                  <br />
                  <br />
                  Sementara  itu,  sejumlah  penghargaan  dari  luar  negeri yang  pernah  diterimanya  adalah  Centro  Culturale  Italiano Premio  Adelaide  Ristori  Anno  VIII  pada  tahun  1976,  penghargaan  Ramon  Magsaysay  Award  for  Public  Service (31 Agustus  1981),  serta  penghargaan  Paul  Harris  Fellow  Award Rotary  Foundation  of  Rotary  International  Amerika  pada  tahun  1982. <i className='cursor-pointer text-cyan-500' onClick={() => setOpened(true)}>
                    Klik disini untuk melihat lebih detail..
                  </i>
                </p>
              </div>
              <br />

              <Modal
                size='85%'
                opened={opened}
                onClose={() => setOpened(false)}
              >
                <div className='mx-[3vw]'>
                  <Grid>
                    <Grid.Col md={12} lg={4.5} xl={2.7}>
                      <Image className='w-full rounded-md shadow-xl'
                        src={nyjohana}
                        alt="Ny. Johana Sunarti Nasution"
                      />
                    </Grid.Col>
                    <Grid.Col md={12} lg={7.5} xl={9}>
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
                        <p className='text-md font-thin mt-5'>Almarhumah  Ny. Johana  Sunarti  Nasution  adalah  putri Sunario  Gondokusumo,  salah  seorang aktivis  pergerakan  nasional.  Beliau  lahir  di  Surabaya, 1  November  1923.  Semasa hidupnya,  Bu  Nas  dikenal  aktif  dalam  berbagai  kegiatan  sosial. Di  antaranya,  mendirikan  berbagai  yayasan,  seperti  Yayasan Bina  Wicara  “Vacana  Mandira”,  Yayasan  Jambangan  Kasih, Yayasan  Pembinaan  dan  Asuhan  Bunda,  Yayasan  Panti  Usada Mulia,  dan  Yayasan  Santi  Rama.
                          <br />
                          <br />
                          Atas  berbagai  jasa  dan  aktivitas  sosialnya  itu,  Bu  Nas  dianugerahi  sejumlah  tanda  kehormatan  oleh  pemerintah.  Di antaranya,  Satya  Lantjana  Kebaktian  Sosial  pada  tahun  1971, Lencana  Satya  Bhakti  Utama  Persit  Kartika  Chandra  Kirana (20  Februari 1989),  Bintang  Perjuangan  Angkatan  45 (17 Agustus  1995),  dan  Bintang  Maha  Putra  Utama  (15  Agustus 1995).
                        </p>
                      </div>
                    </Grid.Col>
                  </Grid>
                  <div className={style.h2}>
                    <p className='text-md font-thin mb-12'>
                      Sementara  itu,  sejumlah  penghargaan  dari  luar  negeri yang  pernah  diterimanya  adalah  Centro  Culturale  Italiano Premio  Adelaide  Ristori  Anno  VIII  pada  tahun  1976,  penghargaan  Ramon  Magsaysay  Award  for  Public  Service (31 Agustus  1981),  serta  penghargaan  Paul  Harris  Fellow  Award Rotary  Foundation  of  Rotary  International  Amerika  pada  tahun  1982.
                      <br />
                      <br />
                      Semasa  hidupnya,  Bu  Nas  selalu  menanamkan  kepada anak  dan  cucunya  bahwa  dalam  menjalani  kehidupan  ini harus   senantiasa  tertanam  rasa  idealisme.  Meskipun  hanya  sedikit,  tetapi  mampu  membawa  bangsa  Indonesia  ke  arah  yang lebih  baik  lagi,  dan  tidak  hanya  mementingkan  diri  sendiri.
                      <br />
                      <br />
                      Aktivitasnya  di  bidang  sosial  dikenalkan  oleh  ibunya, Maria  Federika  Rademayer,  yang  seorang  Belanda  tulen,  dan ayahnya,  Sunario  Gondokusumo,  salah  satu  tokoh  pergerakan nasional  Indonesia.  Jadi,  Bu  Nas  juga  bagian  kecil  dari  dunia  pergerakan  nasional.  Di  usianya  yang  kelima,  dia  dibawa ayahnya  turut  hadir  dalam  Kongres  Pemuda, 28  Oktober 1928.
                      <br />
                      <br />
                      Menginjak  usia  remaja,  Sunarti  tergolong  beruntung.  Dia dapat  menikmati  pendidikan  terbaik  di  zamannya.  Ia  pernah bersekolah  di  Lyceum,  salah  satu  sekolah  menengah  terkemuka di  Bandung  pada  masa  itu,  sebelum  kedatangan  Jepang,  dan berhasil  lulus  ujian  SMA  zaman  Jepang.  Karena  tidak  mampu membaca  dan  menulis  huruf  Kanji,  Ika  Dai  Gakku  (Sekolah Tinggi  Kedokteran  saat  itu)  menolaknya  sebagai  mahasiswa. Cita-citanya  menjadi  dokter  pun  kandas.  Akhirnya  Sunarti harus  berpuas  diri  belajar  untuk  menjadi  seorang  apoteker.
                      <br />
                      <br />
                      Di  zaman  revolusi  kemerdekaan,  Sunarti  sempat  belajar hukum  di  Universitas  Gadjah  Mada  (UGM)  Yogyakarta.  Kuliahnya  di  UGM  kemudian  harus  ia  tinggalkan  karena  salah  seorang  pendiri  Tentara  Nasional  Indonesia,  Abdul  Haris  Nasution,  yang  saat  itu  masih  berpangkat  kolonel,  menikahinya.
                      <br />
                      <br />
                      Menjadi  istri  perwira  TNI  membawa  cerita  tersendiri  dalam  perjalanan  hidup  Bu  Nas.  Terlebih  karena  Pak  Nas  sepanjang  kariernya  kerap  berseberangan  dengan  penguasa  negeri ini.  Sejak  zaman  revolusi,  ia  kerap  mendapatkan  teror  yang mengancam  keluarganya.  Salah  satu  kejadian  tragis  dalam hidupnya  terjadi  saat  putri  bungsunya  menjadi  tumbal  sejarah Indonesia  dalam  Gerakan  30  September  1965.
                      <br />
                      <br />
                      Tidak  ingin  terus-menerus  terbebani  oleh  peristiwa  tragis itu,  Bu  Nas  kemudian  aktif  membantu  menanggulangi  berbagai  permasalahan  social  masyarakat.  Bu  Nas  bersama-sama dengan  banyak  pihak  berjuang  untuk  menyejahterakan  orang-orang  bernasib  malang  yang  tidak  mampu  disejahterakan  negara,  dengan  aktif  mendirikan  berbagai  yayasan  sosial  di  bidang  pendidikan  dan  kesehatan.<br />
                      <br />
                      Yayasan  Pembina  Asuhan  Bunda  (YPAB)  adalah  salah  satu yayasan  sosial  yang  didirikannya  yang  menjadi  pembuka  jalan untuk  pendirian  Klinik  Ginjal  Bandung  (KGB)  dan  kemudian  menjadi  Rumah  Sakit  Khusus  Ginjal  (RSKG)  Ny.  R.A. Habibie.  “Ibu  Nas  yang  menandatangani  surat  yang  menyatakan  siap  menampung  mesin  hemodialisis  bekas  dari  Belanda, setelah  di  Indonesia  tak  ada  yang  mau  menerimanya,”  kenang Sri  Soedarsono,  yang  bersama  Bu  Nas  menjadi  salah  seorang pendiri  YPAB. Berkat  dukungan  dari  Bu  Nas-lah  kemudian  KGB  dapat berkembang  hingga  saat  ini,  menjadi  rumah  sakit  khusus  ginjal  terkemuka  di  Indonesia.</p>
                  </div>
                </div>
              </Modal>
            </Grid.Col>
          </Grid>
        </div>
      </main>
    </>
  )

}

export default Bio4;
