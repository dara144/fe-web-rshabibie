import { Grid, List, Modal, Text } from '@mantine/core'
import style from './assets/HD.module.css'
import Border from '@component/border'
import Image from 'next/future/image'
import hd from './assets/image/HD.jpg'
import { useState } from 'react'
import border from './assets/image/border.png'
import PHD from './assets/image/PHD.jpg'
import PHDAnak from './assets/image/PHDAnak.jpg'
import { useInView } from 'react-intersection-observer'

function HD() {
  const [opened, setOpened] = useState(false);
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  const { ref: myRef2, inView: myImageIsVisible2 } = useInView()
  return (
    <>
      <Text className={style.h1}
      >Hemodialisis (HD)</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <p className='text-md mt-3 font-thin'>Instalasi Hemodialisis RS. Khusus Ginjal Ny. R.A Habibie sebagai unit pelaksanaan pelayanan yang bertugas melaksanakan pelayanan kesehatan bagi masyarakat umum yang mengalami gangguan fungsi ginjal  baik akut maupun kronik.  Hemodialisis (HD) adalah salah satu terapi pengganti  ginjal yang menggunakan alat khusus dengan tujuan  mengatasi gejala dan tanda akibat LFG yang rendah sehingga diharapkan dapat memperpanjang usia dan meningkatkan kualitas hidup pasien.
            <br />
            <br />
            Pelayanan hemodialisis sudah banyak dilakukan diseluruh Indonesia mulai dari Rumah Sakit Besar hingga Klinik Pratama, diperlukan standar pelayanan Hemodialisis. Manajemen pelayanan hemodialisis   bertujuan untuk memberikan pelayanan prima  dan berorientasi pada kepuasan pelanggan dan keselamatan pasien.  <i className='text-[#1E90FF] font-thin cursor-pointer'
              onClick={() => setOpened(true)}>Klik disini untuk melihat informasi lebih detail..</i>
          </p>
        </div>

        <div className={style.h2}>
          <Modal
            size='95%'
            opened={opened}
            onClose={() => setOpened(false)}
          >
            <div className='mx-[2vw]'>
              <div className={style.h2}>
                <Grid>
                  <Grid.Col md={12} lg={5} xl={4}>
                    <Image className='rounded-lg overflow-clip shadow-xl'
                      width={500}
                      src={hd}
                      alt="HD"
                      loading='lazy'
                    />
                  </Grid.Col>
                  <Grid.Col md={12} lg={7} xl={8}>
                    <div className='grid grid-cols-2'>
                      <Image className={style.border}
                        src={border}
                        alt="border"
                        loading='lazy'
                      />
                      <Image className={style.border}
                        src={border}
                        alt="border"
                        loading='lazy'
                      />
                    </div>
                    <List className='list-none text-md mt-3'>
                      <List.Item>STANDAR KETENAGAAN</List.Item>
                      <List className='list-decimal text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                        <List.Item>Tim terdiri dari : Konsultan ginjal hipertensi, dokter jaga, perawat sertifikat pelatihan HD, teknisi, administrasi tenaga pendukung lainnya.</List.Item>
                        <List.Item>Kompetensi Perawat HD : Sertifikat pelatihan Ginjal Hipertensi, Sertifikat pelatihan BHD - BHL Resertifikasisetiap 2 tahun, Uji Kompetensi Kredensialing, Komite Keperawatan, Surat Penugasan Klinis.</List.Item>
                      </List>
                      <br />
                      <List.Item>MASALAH KEPERAWATAN/DIAGNOSA KEPERAWATAN</List.Item>
                      <List className='list-decimal text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                        <List.Item>Sesuai hasil kajian.</List.Item>
                        <List.Item>Tujuan dan target terukur.</List.Item>
                      </List>
                    </List>
                  </Grid.Col>
                </Grid>
                <br />
                <List className='list-none text-md mt-3'>
                  <List.Item>FASILITAS RUANG HEMODIALISA</List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Memenuhi standar keamanan gedung sesuai aturan pemerintah.</List.Item>
                    <List.Item>Tersedia Generator listrik.</List.Item>
                    <List.Item>Tersedia fasilitas kebakaran(APAR / Hidran).</List.Item>
                    <List.Item>Tempat penyimpanan B3 (MSDS & simbol).</List.Item>
                    <List.Item>Jalur Evakuasi dan emergency Call sistem.</List.Item>
                    <List.Item>Tempat tidur/kursi pasien harus memiliki pengaman sesuai standar K3RS.</List.Item>
                    <List.Item>Lingkungan aman, nyaman dan privasi pasien terjaga.</List.Item>
                    <List.Item>Peralatan medis standar seperti stetoskop, tensimeter, timbangan berat badan, termometer dan sebagainya dengan jumlahsesuai kebutuhan. Troli emergensidan perlengkapan RJP sekurang-kurangnya terdiri dari ambu viva, defibrillator, peralatan suction, endotracheal tube, Monitor EKG, oksimeter.</List.Item>
                    <List.Item>Ruang Reuse dan penyimpanan dialiser reuse, peralatan reuse dialiser manual atau otomatis, ruanganpengolahan air (AAMI standard). Ruangan sterilisasi alat ruangan penyimpanan obat & alat/ BMHP (suhu terpantau) Mempunyai sarana pembuangan dan pengolahan limbah medis.</List.Item>
                  </List>
                  <br />
                  <List.Item>PERALATAN HEMODIALISIS</List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Mesin hemodialisis yang siap pakai dan spesifikasi teknik sesuaistandar keselamatan pasien.</List.Item>
                    <List.Item>Minimal terdapat 1 mesin cadangan yang siap setiap saat di unit dialisis untuk setiap 6 mesin HD.</List.Item>
                    <List.Item>Tersedia ruang untuk perbaikan Haemodialis mesin <i>(workshop).</i></List.Item>
                    <List.Item>Disinfeksi rutin mesin hemodialisis yang aktif ataupun cadangan dilakukan sesuai SPO/IK.</List.Item>
                    <List.Item>Desinfeksi luar dan dalam mesin.</List.Item>
                    <List.Item>SPO/IK selalu berada di dekat mesin.</List.Item>
                    <List.Item>Kalibrasi mesin setiap 6 Bulan.</List.Item>
                  </List>
                  <br />
                  <List.Item>IMPLEMENTASI (PROSEDUR HD) :</List.Item>
                  <List className='list-decimal text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Teknik streril.</List.Item>
                    <List.Item>Hand Hygiene <i>(5 moment).</i></List.Item>
                    <List.Item>Gunakan APD yang standar (Gogle, apron, masker, sarung tangan).</List.Item>
                    <List.Item>Teknik Punksi dan kanulasi diperhatikan (memberikan rasa aman dan memberikan rasa aman dan nyaman bagi pasien).</List.Item>
                    <List.Item>Pemberian antikoagulansia.</List.Item>
                  </List>
                  <br />
                  <List.Item>PENGENDALIAN INFEKSI</List.Item>
                  <List className='list-decimal text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Seluruh staf medik dan perawat dilatih untuk dapat melaksanakan pencegahan umum <i>(universal precaution)</i> di unit dialisis.</List.Item>
                    <List.Item>Pencegahan umum dilaksanakan di unit dialisis pada segala tindakan perawatan pasien.</List.Item>
                    <List.Item>Tersedia Sarana untuk mencuci tangan <i>(wastafel/hand rub)</i> di setiap area pelayanan pasien sehingga cuci tangan dapat dilakukan sebelum dan sesudah kontak dengan pasien.</List.Item>
                    <List.Item>Semua staf termasuk penjaga unit dialisis diajarkandengan instruksi yang jelas dalam menangani tumpahan darah dan bahan kimia di alat - alat dan lantai.</List.Item>
                    <List.Item>Tersedia pembuangan sampah infeksi dan non Infeksi semua peralatan yang ternodai oleh darahharus di rendam dan dibersihkan dengan larutan sodium hipoklorit 1:100 jika peralatan itu tahan terhadap bahan kimia tersebut.</List.Item>
                    <List.Item>Semua pasien baru atau pasien yang kembalike unit dialisis setelah menjalani dialisis di lokasi yang mempunyai risiko tnggi atau tidak diketahui derajat risikonya harus diperiksakembali HbsAg dan Anti - HCV. Isolasi mesin hemodialisis hanya diharuskan pada pengidap virus Hepatitis B (VHB), tidak padapengidap virus Hepatitis C (VHC) dan HIV.</List.Item>
                  </List>
                  <br />
                  <List.Item>PENGOLAHAN AIR <i>(WATER TREATMENT)</i></List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Lebih disukai ada dua sistim pengolahan air : Setiap sistim pengolahan air meliputi filter karbon, filter sedimen, water softener, reverse osmosis.</List.Item>
                    <List.Item>Komponen - komponen sistim air diatur dan dipelihara sehingga kadar kontaminasi bahan - bahan kimia dan bakteri pada air yang dihasilkan tidak melebihi standarkualitas air untuk hemodialisis.</List.Item>
                  </List>
                </List>
              </div>
            </div>
          </Modal>
        </div>
      </main>

      <div className={style.bg}>
        <div className={style.wrapper}>
          <div className={style.h2}>
            <Grid className='mb-2'>
              <Grid.Col md={12} lg={4} xl={3.5}>
                <div
                  ref={myRef}
                >
                  <Image className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                    src={hd}
                    alt="HD"
                    priority
                  />
                </div>
              </Grid.Col>
              <Grid.Col md={12} lg={7} xl={8}>
                <List className='list-none text-md mt-3' withPadding>
                  <List.Item>KONSEP <span className='text-[#1E90FF]'>PELAYANAN HD</span></List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Dilakukan secara konprehensif (mulai  pengkajian  evaluasi).</List.Item>
                    <List.Item>Pelayanan dilakukan sesuai Standar Prosedur Operasional HD dan Intruksi Kerja.</List.Item>
                    <List.Item>Peralatan yang tersedia harus memenuhi kriteria standar (kalibrasi seara berkala oleh badan terakreditasi).</List.Item>
                    <List.Item>Semua tindakan harus terdokumentasi di dalam CPPT/form pemantauan HD dalam rekam medis pasien.</List.Item>
                    <List.Item>Harus ada sistem monitoring dan evaluasi.</List.Item>
                    <List.Item>Persiapan  mesin dan peralatan.</List.Item>
                    <List.Item>Persiapan Pasien.</List.Item>
                  </List>
                </List>
              </Grid.Col>
              <Grid.Col md={12} lg={4} xl={3.5}>
                <div
                  ref={myRef1}
                >
                  <Image className={`${style.image} ${myImageIsVisible1 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                    src={PHD}
                    alt="Pelayanan HD"
                    priority
                  />
                </div>
              </Grid.Col>
              <Grid.Col md={12} lg={7} xl={8}>
                <List className='list-none text-md mt-3' withPadding>
                  <List.Item>PENGKAJIAN YANG MELIPUTI :</List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Kondisi pasien secara umum (mental, fisik).</List.Item>
                    <List.Item>Informed consent (Pasien baru dan pasien lama  diulang setelah 6 bulan, dst).</List.Item>
                    <List.Item>Gelang identitas.</List.Item>
                    <List.Item>Pemeriksaan fisik (TTV, edema, IDWG, BBK).</List.Item>
                    <List.Item>Nyeri (Skala VAS).</List.Item>
                    <List.Item>Resiko Jatuh gelang/ pita kuning, Alergigelang / pita merah.</List.Item>
                    <List.Item>Persiapan Pasien.</List.Item>
                    <List.Item>Nutrisi (malnutrisi).</List.Item>
                    <List.Item>Dokumentasi dalam CPPT/form pemantauan HD.</List.Item>
                  </List>
                </List>
              </Grid.Col>
              <Grid.Col md={12} lg={4} xl={3.5}>
                <div
                  ref={myRef2}
                >
                  <Image className={`${style.image} ${myImageIsVisible2 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                    src={PHDAnak}
                    alt="Pelayanan HD Khusus Anak"
                    priority
                  />
                </div>
              </Grid.Col>
              <Grid.Col md={12} lg={7} xl={8}>
                <List className='list-none text-md mt-3' withPadding>
                  <List.Item>PROSEDUR <span className='text-[#1E90FF]'>PELAYANAN HD</span></List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Ada dokter yang bertugas dan siap menerima konsultasi jika diperlukan.</List.Item>
                    <List.Item>Petunjuk BHD tersedia dan semua stafmedik danperawat dialisis pernah mendapat pelatihan melakukan BHD.</List.Item>
                    <List.Item>Gelang identitas.</List.Item>
                    <List.Item>Pemeriksaan fisik (TTV, edema, IDWG, BBK).</List.Item>
                    <List.Item>Nyeri (Skala VAS).</List.Item>
                    <List.Item>Resiko Jatuh gelang/ pita kuning, Alergigelang / pita merah.</List.Item>
                    <List.Item>Persiapan Pasien.</List.Item>
                    <List.Item>Nutrisi (malnutrisi).</List.Item>
                    <List.Item>Dokumentasi dalam CPPT/form pemantauan HD.</List.Item>
                  </List>
                </List>
              </Grid.Col>
            </Grid>
            <p className='text-md mt-3 font-thin'>Kesehatan dan Keselamatan Kerja Harus diperhatikan hal-hal sebagai berikut: Pelaksanaan kewaspadaan universal (universal precaution) yang ketat (pasien, staf, penggunaan alat medik/non medik) merupakan kunci utama dalam pencegahan transmisi. Penataan ruang, aksesibilitas, penerangan dan pemilihan material harus sesuai dengan ketentuan yang mengacu pada patient safety.
              <br />
              <br />
              Dalam rekam medik dicatat diagnosis  medik (berdasarkan ICD X dan ICD 9 CM) untuk pelaporan ke manajemen RSMengirim laporan ke Indonesian Renal  Registry PERNEFRI secara berkala tiap bulan.
            </p>
          </div>
        </div>
      </div>
    </>
  )

}

export default HD;
