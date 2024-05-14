import { Grid, Modal, Text } from '@mantine/core'
import style from '../assets/Biografi.module.css'
import Border from '../../../component/border'
import { useState } from 'react';
import Image from 'next/future/image';
import profrully from '../assets/image/Prof.Rully.jpg'
import border from '../assets/image/border.png'

function Bio2() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Text className={style.h1}
      >Prof. Dr. Rully MA Roesli, Sp.PD-KGH</Text>
      <main className={style.wrapper}>
        <div className='w-[85vw] h-screen'>
          <Border />

          <Grid>
            <Grid.Col md={6} lg={5} xl={2.3}>
              <Image className='lg:w-full rounded-md mr-6 sm:w-full'
                src={profrully}
                alt="Prof. Rully"
              />
            </Grid.Col>
            <Grid.Col md={6} lg={7} xl={9.3}>
              <div className={style.h2}>
                <p className='text-md font-thin'>Ada  saat  ketika  Prof. Dr. Rullyalam  profesinya  sebagai  seorang  dokter, Dr.  Rully  Marsis  Amirullah  Roesli  memainkan  peran  sebagai  orang  yang  menentukan  hidup  matinya  seseorang Playing God.  Saat-saat  yang  tidak  ingin  dilaluinya  lagi.  Menurut  Free Dictionary  Thesaurus  and  Encyclopedia  yang  tersedia  di  internet,  tertera  bahwa  Playing  God  adalah sebuah  idiom.  Dalam bahasa Inggris  artinya  “To  be have as if you have the  right  to make  very  important decisions that seriously  affected others people lift”.  Terjemahan  bebasnya,  bertindak  seolah  mempunyai wewenang  untuk  membuat  keputusan  penting  yang  secara signifikan  memengaruhi  kehidupan  orang  lain. Peran  itu  ia  jalankan  pada  saat  dirinya  menjadi  pengelola medis  di  RSKG  Ny.  R.A.  Habibie.  Setiap  Jumat,  ia  bersama dokter,  perawat,  ahli  hukum,  kepala  bagian  administrasi,  kepala  perawat,  dan  kepala  rumah  tangga  melakukan  rapat  untuk  menentukan  pasien  yang  berhak mendapatkan  layanan hemodialisis  yang  berarti  perpanjangan  hidup  sang  pasien, dan  mana  yang  harus  diberhentikan,  karena  alasan  medis  dan pertimbangan  lain.
                  <br />
                  <br />
                  Bermula  dari  pertanyaan  seorang  pasien  tentang  masa  depannya.  Karena  divonis  menderita  gagal  ginjal,  dan  usianya menjelang  21  tahun,  si  pasien  bertanya,  apakah  ia  masih  boleh hidup?  Pertanyaan  yang  membuatnya  tak  bisa  tidur.  Namun, karena  ketiadaan  jaminan  asuransi  yang  memungkinkan  pembayaran  layanan  cuci  darah seumur  hidup,  sang  pasien  akhirnya  meninggal  karena  keracunan  sisa  metabolisme hidupnya yang  seharusnya  tidak  perlu  terjadi  jika  ia  mendapatkan  pelayanan  cuci darah.
                  <i className='cursor-pointer text-cyan-500' onClick={() => setOpened(true)}>
                    Klik disini untuk melihat lebih detail..
                  </i>
                </p>
                <br />

                <Modal
                  size='95%'
                  opened={opened}
                  onClose={() => setOpened(false)}
                >
                  <div className='mx-[7vw]'>
                    <Grid>
                      <Grid.Col md={12} lg={4.5} xl={4}>
                        <Image className='rounded-md shadow-xl'
                          src={profrully}
                          alt="Prof. Rully"
                        />
                      </Grid.Col>
                      <Grid.Col md={12} lg={7.5} xl={8}>
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
                          <p className='text-md font-thin mt-5'>Ada  saat  ketika  Prof. Dr. Rullyalam  profesinya  sebagai  seorang  dokter, Dr.  Rully  Marsis  Amirullah  Roesli  memainkan  peran  sebagai  orang  yang  menentukan  hidup  matinya  seseorang Playing God.  Saat-saat  yang  tidak  ingin  dilaluinya  lagi.  Menurut  Free Dictionary  Thesaurus  and  Encyclopedia  yang  tersedia  di  internet,  tertera  bahwa  Playing  God  adalah sebuah  idiom.  Dalam bahasa Inggris  artinya  “To  be have as if you have the  right  to make  very  important decisions that seriously  affected others people lift”.  Terjemahan  bebasnya,  bertindak  seolah  mempunyai wewenang  untuk  membuat  keputusan  penting  yang  secara signifikan  memengaruhi  kehidupan  orang  lain. Peran  itu  ia  jalankan  pada  saat  dirinya  menjadi  pengelola medis  di  RSKG  Ny.  R.A.  Habibie.  Setiap  Jumat,  ia  bersama dokter,  perawat,  ahli  hukum,  kepala  bagian  administrasi,  kepala  perawat,  dan  kepala  rumah  tangga  melakukan  rapat  untuk  menentukan  pasien  yang  berhak mendapatkan  layanan hemodialisis  yang  berarti  perpanjangan  hidup  sang  pasien, dan  mana  yang  harus  diberhentikan,  karena  alasan  medis  dan pertimbangan  lain.

                          </p>
                          <br />
                        </div>
                      </Grid.Col>
                    </Grid>
                    <div className={style.h2}>
                      <p className='text-md font-thin mb-12'>
                        Bermula  dari  pertanyaan  seorang  pasien  tentang  masa  depannya.  Karena  divonis  menderita  gagal  ginjal,  dan  usianya menjelang  21  tahun,  si  pasien  bertanya,  apakah  ia  masih  boleh hidup?  Pertanyaan  yang  membuatnya  tak  bisa  tidur.  Namun, karena  ketiadaan  jaminan  asuransi  yang  memungkinkan  pembayaran  layanan  cuci  darah seumur  hidup,  sang  pasien  akhirnya  meninggal  karena  keracunan  sisa  metabolisme hidupnya yang  seharusnya  tidak  perlu  terjadi  jika  ia  mendapatkan  pelayanan  cuci darah.
                        <br />
                        <br />
                        Sialnya  lagi,  ternyata  pasien  gagal  ginjal  terminal  (GGT) di  Indonesia  kebanyakan  berasal  dari  golongan  ekonomi  lemah.  Bagi  mereka,  jangankan  untuk  biaya  dialisis  yang  mencapai  ratusan  ribu  rupiah,  untuk  memenuhi  kebutuhan  hidup  sehari-hari  saja  sulit.  Nasib  tragis  yang  menimpa  sang pasien  sungguh  mengganggu  nurani  dan  membuat  Dr.  Rully bertekad  mendedikasikan  hidup  dan  ilmunya  untuk  menyediakan  pelayanan  hemodialisis  bagi  pasien  tak  mampu.
                        <br />
                        <br />
                        Kesempatan  itu  datang  ketika  Rully  yang  juga  staf  pengajar  Fakultas  Kedokteran  Universitas  Padjadjaran,  Bandung, itu  ditugaskan  oleh  Kepala  Bagian  Ilmu  Penyakit  Dalam  RS Hasan  Sadikin/FK  Unpad,  Dr.  Enday  Sukandar,  untuk  belajar  transplantasi  ginjal  di  Academisch  Ziekenhuis  Groningen, Belanda.  Saat  studinya  rampung,  ia  ditanya  oleh  profesornya, “Apakah  Anda  siap  mengepalai  bagian  ginjal  di  Indonesia?
                        <br />
                        <br />
                        Rully  pun  menjawab,  “Masalah  saya  bukan  itu,  masalah  terbesar  bagi  saya  adalah  pasien  tidak  bisa  membayar  layanan  cuci darah,”  jawabnya.  Profesornya  kemudian  bertanya  lagi,  lantas bagaimana  solusinya?  Jawaban  Rully  sederhana  saja,  “Saya  katakan,  saya  harus  membuat  unit  hemodialisis  yang  murah  dan bisa  membantu  pasien.”
                        <br />
                        <br />
                        Rully  kemudian  menggagas  pelayanan  hemodialisis  bagi pasien  tak  mampu  lewat  konsep  insurance  patient  to  patient. Model  subsidi  silang,  pasien  kaya/mampu  menyubsidi  pasien yang  tidak  mampu.  “Konsep  patient  to  patient  insurance  system. Saya  diminta  untuk  presentasi,  saya  buat  dengan  gambar.  Kita gunakan  low  cost  treatment,  uang  yang  diperoleh  oleh  yayasan dari  pasien  yang  mampu  digunakan  untuk  membayar  pasien yang  tak  mampu,”  jelasnya.
                        <br />
                        <br />
                        Ini  karena,  dalam  pengamatan  Rully,  saat  itu  di  Indonesia terlalu  banyak  pasien  yang  tidak  dapat  bertahan  hidup  karena tak  ada  sistem  asuransi.  “Banyak  yang  meninggal,  tak  ada  yang bertahan  hidup.  Maka  lahirlah  gagasan  untuk  sistem  asuransi dari  pasien  ke  pasien  itu,”  jelasnya.  Namun,  meski  ada  beberapa  organisasi  kemanusiaan  di Belanda  yang  bersedia  memberikan  sumbangan  alat  hemodialisis  untuk  program  ini,  kendala  masih  terbentang  di  depan mata.  “Mereka  bersedia  memberi  sumbangan  mesin  dan  dukungan  teknisnya,  tetapi  di  Indonesia  tak  ada  yang  mau  menerima,”  kenang  Rully.  Pada  saat  itu,  hubungan  pemerintah Indonesia  dengan  pemerintah  Kerajaan  Belanda  sedang  tidak harmonis  karena  Belanda  dinilai  terlalu  campur  tangan  dalam masalah  dalam  negeri  Indonesia,  khususnya  dalam  program IGGI  (Inter-Governmental  Group  on  Indonesia).
                        <br />
                        <br />
                        Pucuk  dicinta  ulam  tiba.  Kebetulan  rombongan  ibuibu  yang  tergabung  dalam  Yayasan  Pembina  Asuhan  Bunda (YPAB)  yang  dipimpin  Ibu  Johana  Nasution  dan  Ibu  Sri  Soedarsono  sedang  berkunjung  ke  Belanda.  “Saat  ketemu  Bu  Sri, saya  sampaikan,  Bu,  saya  mau  nitip  proyek,”  ungkap  Rully. Setelah  mendapatkan  penjelasan  bahwa  proyek  yang  dimaksud Dr.  Rully  adalah  proyek  untuk  penyediaan  peralatan  hemodialisis,  Bu  Sri  pun  segera  membuatkan  surat  yang  menyatakan bersedia  menampung  sumbangan  peralatan  hemodialisis  di Indonesia,  di  bawah  YPAB.
                        <br />
                        <br />
                        Tak  hanya  menjadi  wadah  untuk  menampung  sumbangan peralatan  dari  Belanda,  YPAB  juga  mendukung  konsep  Rully untuk  membangun  sebuah  klinik  kecil  di  J1.  Aceh  No.  60, Bandung,  yang  mulai  beroperasi  pada  8  Agustus  1988  pukul 08.00  pagi.  Klinik  ini  pada  awalnya  melayani  dua  pasien  tak mampu.  Kini  klinik  tersebut  telah  berkembang  menjadi  Rumah  Sakit  Khusus  Ginjal  (RSKG)  Ny.  R.A.  Habibie  dengan menempati  gedung  yang  cukup  megah  di  J1.  Tubagus  Ismail No.  46,  Bandung.
                        <br />
                        <br />
                        Persiapan  pendirian  Klinik  Ginjal  Bandung  (KGB),  dijelaskan  Rully,  berlangsung  selama  sekitar  enam  bulan.  Bantuan peralatan  dikirim  sebanyak  tujuh  kontainer.  “Bantuan  yang diberikan  lengkap,  tak  hanya  dalam  bentuk  peralatan  dan  teknologi,  juga  pendampingan  saat  pelaksanaan  cuci  darah  pertama,”  kenangnya.
                        <br />
                        <br />
                        Tantangan  yang  dihadapi  KGB,  dan  kemudian  RSKG Ny.  R.A.  Habibie,  datang  saat  krisis   ekonomi  berlangsung, tahun  1998.  Pasalnya,  turunnya  nilai  mata  uang  rupiah  berdampak  pada  meroketnya  biaya  pelayanan  cuci  darah  untuk para  pasien.  Namun,  dengan  sistem  asuransi  dari  pasien  ke pasien  yang  diterapkan  di  RSKG  Ny.  R.A.  Habibie,  persoalan yang  dihadapi  saat  krisis  ekonomi  dapat  dilalui.
                        <br />
                        <br />
                        Ketika  itu  biaya  cuci  darah  di  rumah  sakit  lain  berkisar Rp500.000-1  juta,  tetapi  RSKG  Ny.  R.A.  Habibie  masih  bisa mempertahankan  tarif  Rp250.000,  bahkan  masih  bisa  membebaskan  sebagian  pasien  tak  mampu  dari  biaya.  Rahasianya? Manajemen  yang  efisien  dan  peduli.  Efisien,  karena  sejak  10 tahun  lalu  RSKG  Ny.  R.A.  Habibie  meneliti  dan  menerapkan  reuse  (penggunaan  kembali)  ginjal  buatan  (hollow  fiber) rata-rata 12  kali  (4-20  kali)  dengan  tetap  aman.  Hal  ini  bisa menghemat  biaya  sampai  50%.  Selain  itu,  karena  RSKG  Ny. R.A.  Habibie  bisa  mendapatkan  mesin  cuci  darah  secara  gratis.  “Dengan  demikian,  investasi  yang  seharusnya  digunakan untuk  membeli  mesin,  dapat  digunakan  untuk  menyubsidi pasien.  Di  sinilah  konsep  low  cost  treatment  for  some  patient bisa  berjalan,”  jelas  Rully.
                        <br />
                        <br />
                        Menurut  Rully,  pada  tahun  1997  tidak  ada  yang  dapat melakukan  reuse  untuk  25  rumah  sakit  di  seluruh  Indonesia. Namun,  sekarang  reuse  sudah  menjadi  standar  nasional.  Untuk ginjal  buatan  ini,  diakui  Rully,  Indonesia  masih  tergantung pada  produk  impor.  “Kita  pernah  coba  bikin  mesin  bekerja sama  dengan  ITB,  tapi  hasilnya  tidak  memuaskan,  pemerintah  pun  terkesan  tidak  serius  membantu,”  ungkap  pria  yang pernah  menjadi  kepala  pokja  industri  kesehatan  dalam  negeri di  Dewan  Riset  Nasional  ini.
                        <br />
                        <br />
                        Informasi  tentang  pelayanan  cuci  darah  murah  yang  tersedia  di  RSKG  Ny.  R.A.  Habibie  mendorong  peningkatan  jumlah  pasien  yang  datang.  “Pasien  banyak  dari  luar  kota,”  kenang Rully.  Ia  masih  ingat  seorang  pasien  yang  berasal  dari  Kampung  Cidaun  di  Cianjur  yang  masih  memiliki  seorang  anak kecil  yang  karena  jauhnya  jarak  Bandung — Cianjur  kemudian memilih  kos  di  dekat  rumah  sakit.  Anaknya  tumbuh  seiring perawatan  yang  harus  dijalaninya.  “Sekarang  anaknya  sudah besar  dan  bekerja  sebagai  asisten  apoteker  di  sebuah  rumah sakit  swasta  di  Bandung,”  tuturnya.
                        <br />
                        <br />
                        Setelah  25  tahun  berjalan  dan  memberikan  pelayanan  kepada  pasien  penderita  gagal  ginjal,  dalam  pandangan  Rully  ke depan,  RSKG  Ny.  R.A.  Habibie  memiliki  potensi  yang  sangat besar  untuk  berkembang.  Terlebih  dengan  hadirnya  Badan Penyelenggara  Jaminan  Sosial  (BPJS),  RSKG  akan  kebanjiran pasien  karena  semua  pasien  akan  dibayari  oleh  pemerintah. Oleh  karena  itu,  RSKG  dituntut  untuk  siap  melayani  lonjakan jumlah  pasien  dalam  beberapa  tahun  ke  depan.  Diprediksi, di  Jawa  Barat,  pasien  yang  membutuhkan  layanan  cuci  darah  akan  mencapai  angka  15.000  pasien.  Saat  ini,  baru  2.000 pasien  yang  sudah  ditangani  oleh  seluruh  rumah  sakit  yang ada  di  Jawa  Barat.  “Sisanya  mungkin  harus  Playing  God  dalam hal  penyediaan  tempat,”  ujar  Rully.
                        <br />
                        <br />
                        Selain  itu,  banyak  hal  yang  masih  harus  dikembangkan, profesionalisme,  baik  dalam  sistem  administrasi  maupun  sistem  medisnya  harus  menjadi  prioritas.  “Jika  beberapa  waktu lalu  manajemennya  masih  bersifat  manajemen  rumah  tangga, ke  depan  harus  dikembangkan  ke  arah  manajemen  profesional,”  jelas  Rully.  Begitu  juga  dengan  pengembangan  riset  dan metode-metode  dialisis   baru,  harus  pula  menjadi  perhatian, karena  RSKG  Ny.  R.A.  Habibie  diprediksi  Rully  dapat  menjadi  rumah  sakit  terbesar  se-Asia  Tenggara.
                        <br />
                        <br />
                        Dalam  hal  kepedulian  dalam  melayani  pasien,  menurut Rully,  baik  perawat  maupun  dokter  tidak  boleh  malas  dan membiarkan  pasien  menanggung  biaya  lebih  mahal.  Untuk itu,  para  perawat  dan  dokter  di  RSKG  Ny.  R.A.  Habibie mendapat  imbalan  yang  layak  sesuai  jasa  profesinya.  “Kami menghargai  profesionalisme  dan  tak  mau  kerja  sosial  karena membuat  orang  tak  profesional.  Kualitas  harus  tetap  dijaga,” ungkap  cucu  sastrawan  Marah  Roesli  penulis  roman  Siti  Nurbaya  ini.  “Sebaliknya,  kami  juga  hanya  menerima  imbalan sesuai  hak.  Tidak  berlebihan.  Keuntungan  sepenuhnya  untuk membantu  pasien,”  lanjutnya.
                        <br />
                        <br />
                        Rully  mengakui,  RSKG  Ny.  R.A.  Habibie  beruntung.  Selain   mendapat  bantuan  mesin  cuci  darah  dari  Belanda,  tanah dan  bangunan  yang  ditempati  merupakan  hasil  upaya  YPAB. Sejauh  ini  RSKG  mendapat  hibah  100  mesin  cuci  darah  bekas dari  Belanda  melalui  Stichting  voor  Dyalisehulp  voor  Buitenland  atau  yayasan  untuk  membantu  dialisis  di  luar  negeri. Dari  bantuan  sebanyak  itu,  40  mesin  dipakai  sendiri,  sisanya  dihibahkan  ke  berbagai  rumah  sakit  di  Medan,  Lampung,  Jakarta,  dan  Jawa  Barat.  Di  Belanda  ada  peraturan,  setiap  empat  tahun  mesin  cuci  darah  harus  diganti.  Mesin-mesin yang  masih  layak  pakai  itu  disumbangkan  ke  negara-negara berkembang  melalui  yayasan  tersebut.
                        <br />
                        <br />
                        Para  teknisi  dan  perawat  RSKG  Ny.  R.A.  Habibie  juga mendapat  latihan  di  St.  Clara   Hospital,  Rotterdam,  dan  University  Hospital,  Groningen.  Kini  RSKG  Ny.  R.A.  Habibie melatih  teknisi  dan  perawat  dari  30  rumah  sakit  yang  mempunyai  kontrak  dengan  PT  Askes  mengenai  cara  me-reuse  (daur ulang)  ginjal  buatan. Rully  yang  lahir  di  Solo  dan  besar  di  Bandung,  lulus  Fakultas  Kedokteran  Unpad  tahun 1975.  Ayahnya,  Mayjen (Purn)  Rushan  Roesli,  pernah  menjadi  komandan  CPM  Bandung.  Ibunya,  dr.  Edyana  Roesli,  dokter  ahli  anak.  Rully  dan kedua  kakaknya,  Ratwini  dan  Utami,  mengikuti  jejak  ibunya. Hanya  adiknya,  Harry  Roesli,  yang  memilih  jalur  lain,  sebagai seniman.</p>
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

export default Bio2;
