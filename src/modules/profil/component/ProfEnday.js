import { Grid, Text } from '@mantine/core'
import style from '../assets/Biografi.module.css'
import Border from '../../../component/border'
import Image from 'next/future/image';
import profenday from '../assets/image/Prof.Enday Sukandar.jpg'

function Bio5() {
  return (
    <>
      <Text className={style.h1}
      >Prof. Dr. H. Enday Sukandar, Sp.PD-KGH (Alm)</Text>
      <main className={style.wrapper}>
        <div className='w-[85vw] h-screen'>
          <Border />
          <Grid>
            <Grid.Col md={6} lg={4}>
              <Image className='lg:w-full rounded-md sm:w-full mr-6 object-cover'
                src={profenday}
                alt="Prof. Dr. H. Enday Sukandar, Sp.PD-KGH"
              />
            </Grid.Col>

            <Grid.Col md={6} lg={8}>
              <div className={style.h2}>

                <p className='text-md font-thin'>Prof. Enday merupakan seorang dokter senior di kalangan kedokteran Universitas Padjadjaran. Selain seorang guru besar, beliau juga sering melontarkan ide-ide serta penemuan beliau ke dalam sebuah buku yang sering dijadikan sebagai pedoman ilmu kedokteran khususnya di bidang Ginjal dan Hipertensi.</p>
                <br />
                <p className='text-md font-thin'>
                  Prof. Dr. H. Enday Sukandar dilahirkan di Garut, 4 Januari 1939. Lulus kedokteran umum pada tahun 1965. Ketertarikannya pada ilmu penyakit dalam membawa beliau untuk terus menggeluti bidang tersebut dan dibuktikan dengan diperolehnya gelar internist pada tahun 1972. Karier beliau tidak berhenti di situ saja, pda tahun 2002, beliau dikukuhkan sebagai Guru Besar Fakultas Kedokteran UNPAD. Keanggotaan profesi beliau sangat banyak, dan beliau sangat peduli terhadap penyakit ginjal dan hipertensi. Buku dan tulisan telah banyak dibuat oleh beliau untuk kepentingan masyarakat banyak.</p>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </main>
    </>
  )

}

export default Bio5;
