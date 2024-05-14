import { Box, Grid } from '@mantine/core'
import Image from 'next/future/image';
import rskg from './assets/image/rskg.jpg'
import kami from './assets/image/Kami.jpg'
import style from './assets/CompanyProfile.module.css'
import Card from './component/Card'
import { useInView } from 'react-intersection-observer';

function CompanyProfile() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  return (
    <>
      <div className={style.h3}>
        <div ref={myRef} className='max-w-4xl lg:flex lg:max-w-full mb-20 overflow-clip'>
          <Box className='ml-[7vw] mr-10 mb-8 mt-10'>
            <label className='text-3xl font-bold'>Tentang <b className='text-[#1E90FF]'>Kami</b></label>
            <p className='text-md font-thin mt-3'>Didirikan pada tahun 1988, RSKG Ny. R. A. Habibie telah mencapai pertumbuhan yang konsisten selama 34 tahun dan bertekad untuk terus mengembangkan kemampuan di bidang pendidikan dan pelayanan kesehatan ginjal di Indonesia. RSKG Ny. R. A. Habibie kini mengelola lebih dari 275 tenaga kerja medis dan non medis dan telah menyumbangkan mesin ke 83 rumah sakit di seluruh Indonesia. Pencapaian kami merupakan indikator kuat bahwa kami berada di jalan yang tepat untuk mencapai target kami sebagai <i>Center of Excellence</i> di bidang pelayanan kesehatan Ginjal di Indonesia.
              <br />
              <br />
              Kami menyediakan pelayanan kesehatan yang didukung oleh para spesialis di berbagai bidang antara lain spesialis Ginjal dan Hipertensi, Spesialis Penyakit dalam dan paru, spesialis bedah vaskuler, spesialis gigi dan bedah mulut, spesialis anestesi, spesialis urologi, spesialis radiologi, dan lain-lain. Kami memiliki pengalaman yang diperlukan untuk mengelola pelayanan kesehatan bermutu tinggi secara profesional dan kekeluargaan namun dengan harga terjangkau.</p>
          </Box>
          <Image
            className={`${style.image} ${myImageIsVisible ? style.animateShowImage : style.animateHiddenImage}`}
            src={kami}
            alt='kami'
          />
        </div>
      </div>

      <div className='rounded-tr-[10vh] bg-slate-50 overflow-visible'>
        <div ref={myRef1} className='max-w-4xl lg:flex lg:max-w-full  overflow-clip'>
          <Image
            className={`${style.image1} ${myImageIsVisible1 ? style.animateShowImage1 : style.animateHiddenImage1}`}
            src={rskg}
            alt='rskg'
          />
          <Box className='sm:w-2/3 mb-5 ml-14'>
            <br />
            <label className='text-3xl font-bold'>Sejarah Singkat
              <br />
              <b className='text-[#1E90FF]'>RS. Khusus Ginjal Ny. R.A. Habibie</b></label>
            <p className='text-md font-thin mt-5 mr-14 mb-5'>
              Rumah Sakit Khusus Ginjal (RSKG) Ny. R.A. Habibie adalah salah satu unit kegiatan dari Yayasan Pembinaan Asuhan Bunda (YPAB) yang diketuai oleh Ibu Sri Soedarsono bekerja sama dengan Tim Nefrolog Bandung dan didukung oleh Yayasan Nederland - Batam (Stichting Nederland - Batam) di Belanda. RSKG Ny. R.A. Habibie lahir dengan nama Klinik Ginjal Bandung pada tanggal 8 Agustus 1988 dengan 2 buah mesin Hemodialisis.
              <br />
              <br />
              Pada tanggal 31 Agustus 1993, nama tersebut diubah menjadi Pelayanan Dialysis Ny. R.A. Habibie sebagai bentuk penghormatan dan untuk mengenang Ny. R.A. Tuti Marini Habibie yang sangat membantu pendirian Klinik Ginjal Bandung. Tujuan pendirian klinik ini adalah untuk meringankan beban pasien gagal ginjal terutama masyarakat tidak mampu. Tahun 1996, Pelayanan Dialysis Ny. R.A. Habibie ditingkatkan statusnya menjadi Rumah Sakit Khusus Ginjal Ny. R.A. Habibie. Pada tahun 2010, RSKG Ny. R.A. Habibie telah terakreditasi untuk 5 pelayanan dasar.</p>
          </Box>
        </div>

        <div className={style.wrapper}>
          <div style={{
            width: '85vw'
          }}>
            <div className={style.h2}>
              <div className='text-center mt-5'>
                <label className='text-3xl font-bold'>Moto <b className='text-[#1E90FF]'>RSKG</b></label>
              </div>
              <p className='text-md font-thin mt-1 mb-8 text-center'>
                <i>Feeling at Home.</i>
              </p>
              <Grid>
                <Grid.Col md={12} lg={3}>
                  <label className='text-2xl font-bold'>VISI</label>
                  <p className='text-md font-thin mt-1 mb-5'>
                    Menjadi Rumah Sakit Khusus Ginjal Rujukan Nasional Tahun 2030.
                  </p>
                </Grid.Col>
                <Grid.Col md={12} lg={5}>
                  <label className='text-2xl font-bold'>Misi</label>
                  <ul className='list-decimal text-md mt-1 font-thin px-4'>
                    <li>Menyelenggarakan pelayanan ginjal paripurna yang meliputi promotif, preventif, kuatif, dan rehabilitas secara profesional didasari nilai pengabdian dan kekeluargaan.</li>
                    <li>Memberikan pelayanan yang berorientasi pada mutu dan keselamatan pasien dalam lingkungan rumah sakit yang aman dan nyaman.</li>
                    <li>Menyelenggarakan pelayanan dialisis yang unggul dan berkualitas.</li>
                    <li>Mengembangkan Sumber Daya Manusia yang profesional, kompeten, handal dan santun.</li>
                    <li>Menyelenggarakan pendidikan, pelatihan dan penelitian di bidang kesehatan ginjal yang berstandar nasional.</li>
                    <li>Meningkatankan peran sosial eksternal rumah sakit di bidang pelayanan ginjal.</li>
                  </ul>
                </Grid.Col>

                <Grid.Col md={12} lg={4}>
                  <label className='text-2xl font-bold'>Nilai</label>
                  <ul className='list-none text-md mt-1 font-thin mb-12'>
                    <li>G : Gagasan inovatif di bidang pelayanan kesehatan.</li>
                    <li>I : Ikhlas dalam bekerja.</li>
                    <li>N : Niat membantu bagi yang membutuhkan</li>
                    <li>J : Jujur dalam bertindak.</li>
                    <li>A : Amanah melaksanakan perintah sesuai standar.</li>
                    <li>L : Landasan kekeluargaan.</li>
                  </ul>
                </Grid.Col>
              </Grid>
            </div>
          </div>
        </div>
        <div className='mx-[7vw] mt-14'>
          <div className={style.h2}>
            <div className='text-center'>
              <label className='text-3xl font-bold'>Biografi <b className='text-[#1E90FF]'>Pendiri</b></label>
            </div>
          </div>
          <div className='mt-10'>
            <Card />
          </div>
        </div>
      </div>
    </>
  )

}

export default CompanyProfile;
