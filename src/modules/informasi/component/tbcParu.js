import { Col, Grid, Image, Title } from '@mantine/core';
import style from '../assets/News.module.css'
import { AiFillTag, AiOutlineClockCircle } from "react-icons/ai"
import { BsPersonFill } from "react-icons/bs"
import { FaComments } from 'react-icons/fa'
import PostList from './PostList'

export default function TbcParu() {
  return (
    <>
      <main className={style.wrapper}>
        <div style={{
          width: '85vw'
        }}>
          <Grid>
            <Grid.Col md={9} lg={8}>

              <AiFillTag className={style.tag} />
              <label className={style.label}>Artikel Kesehatan</label>

              <Title className={style.h1}>TBC PADA PARU-PARU</Title>
              <div className='grid grid-cols-2 mb-2 max-w-full'>
                <Image
                  src="/border.png"
                  alt="border"
                />
                <Image
                  src="/border.png"
                  alt="border"
                />

              </div>
              <Grid>
                <Col span={3} order={2} orderSm={1} orderLg={3}> <AiOutlineClockCircle className={style.tag} /><label className={style.label}>14 November 2018
                </label>
                </Col>
                <Col span={3} order={3} orderSm={1} orderLg={2}><BsPersonFill className={style.tag} />
                  <label className={style.label}>By. Admin</label>
                </Col>
                <Col span={3} order={1} orderSm={3} orderLg={1}>
                  <FaComments className={style.tag} /><label className={style.label}>0</label>
                </Col>
              </Grid>

              <div className='mt-6'>
                <Image
                  radius="md"
                  src="/tbcparu.jpg"
                  alt="TBC Pada Paru"
                />
              </div>
              <div className={style.h2}>
                <p className='text-md font-thin'>
                  <strong>TBC (Tuberculosis)</strong> adalah penyakit menular langsung yang disebabkan oleh kuman TB (Mycobacterium Tuberculosis). Sebagian besar kuman TB menyerang paru, tetapi dapat juga mengenai organ tubuh lainnya. Kuman TB dapat mati dengan sinar matahari langsung, tetapi dapat bertahan hidup beberapa jam di tempat yang gelap dan lembab.
                </p>

                <p className='mt-5 text-xl font-semibold'>
                  Bagaimana <b className='text-cyan-600'>Penularannya?</b>
                </p>

                <p className='text-md font-thin mt-3'>
                  Melalui pernafasan ketika seseorang menghirup udara yang mengandung kuman TB dari orang lain yang bersin atau batuk.
                </p>

                <p className='text-md mt-5'>
                  Faktor yang Mempengaruhi Seseorang Dapat Mengidap TBC :
                </p>
                <ul className='list-disc text-md font-thin mt-3 px-4'>
                  <li>Daya tahan tubuh yang rendah atau mengidap HIV/AIDS,</li>
                  <li>Gizi buruk.</li>
                </ul>

                <p className='text-md mt-5'>
                  Gejala TBC Paru :
                </p>

                <ul className='list-decimal text-md font-thin mt-3 px-4'>
                  <li>Gejala Umum : Batuk terus menerus selama 3 minggu atau lebih.</li>
                  <li>Gejala lain yang sering dijumpai : </li>
                  <ul className='list-disc text-md font-thin mt-2 px-4'>
                    <li>Batuk Berdahak, kadang berdarah.</li>
                    <li>Batuk darah.</li>
                    <li>Sesak nafas dan nyeri dada.</li>
                    <li>Badan lemah, rasa kurang enak badan.</li>
                    <li>Demam meriang lebih dari sebulan.</li>
                    <li>Berkeringat malam walaupun tanpa kegiatan.</li>
                    <li>Nafsu makan menurun</li>
                    <li>Berat badan menurun.</li>
                  </ul>
                </ul>

                <p className='text-md mt-5'>
                  Komplikasi Pada Penderita TBC Paru
                </p>

                <ul className='list-decimal text-md font-thin mt-2 px-4'>
                  <li>Batuk darah yang dapat mengakibatkan kematian.</li>
                  <li> Penyebaran infeksi ke organ lain seperti otak, tulang, persendian, dsb. </li>
                  <li>Penyakit Jantung-Paru.</li>
                </ul>

                <p className='text-md mt-5'>
                  Perjalanan Penyakit TBC Paru Yang Tidak Diobati.
                </p>

                <ul className='list-decimal text-md font-thin mt-2 px-4'>
                  <li>50% penderita TBC Paru meninggal setelah 5 tahun.</li>
                  <li>25% akan sembuh sendirinya dengan daya tahan tubuh yang tinggi.</li>
                  <li>25% merupakan &quot;penyakit kronis&quot; yang tetap berpotensi untuk menula.</li>
                </ul>

                <hr className='mt-5' />

                <p className='mt-5 text-xl font-semibold'>
                  Bagaimana Mencapai <b className='text-cyan-600'>Keberhasilan Pengobatan?</b>
                </p>

                <ul className='list-decimal text-md font-thin mt-2 px-4'>
                  <li> Ingatkan penderita untuk selalu minum obat sesuai anjuran.</li>
                  <li>Bawa penderita untuk kontrol kembali sesuai waktu yang telah ditetapkan.</li>
                  <li>Amati efek samping berat yang mungkin ditimbulkan akibat pemberian OAT seperti air seni yang berwarna seperti teh, mata berwarna kekuningan. Bila dijumpai kelainan-kelainan tersebut segera bawa penderita untuk kontrol.</li>
                  <li>Penderita TBC Paru tidak boleh meludah sembarangan</li>
                  <li>Penderita dianjurkan untuk makan secara teratur dengan menu tinggi kalori dan protein dalam porsi cukup dan membiasakan melakukan perilaku hidup bersih dan sehat.</li>
                  <li>Bila kedua orang tua terkena TBC, anak-anak harus screening TBC.</li>
                </ul>
              </div>
            </Grid.Col>

            <Grid.Col md={6} lg={4}>
              <div className={style.h3}>
                <i>Post Terakhir</i>
                <hr />
                <PostList />
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </main>
    </>
  )
}