import { Col, Grid, Image, Title } from '@mantine/core';
import style from '../assets/News.module.css'
import { AiFillTag, AiOutlineClockCircle } from "react-icons/ai"
import { BsPersonFill } from "react-icons/bs";
import { FaComments } from 'react-icons/fa';
import PostList from './PostList'
import EdukasiList from './EdukasiList';
import Link from 'next/link'

export default function CKD() {
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

              <Title className={style.h1}>Chronic Kidney Disease (CKD)</Title>
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
                  src="/CKD.png"
                  alt="CKD RSKG"
                />
              </div>
              <div className={style.h2}>

                <p className='text-md font-thin mt-3'>
                  CKD atau <Link href='/informasi/gagalginjal' className='text-cyan-500'>Gagal ginjal kronik</Link> merupakan suatu kondisi dimana ginjal mengalami penurunan fungsi secara bertahap yang mengakibatkan penimbunan sisa metabolisme dan dapat menyebabkan gangguan keseimbangan cairan sehingga diperlukan adanya perawatan atau transplantasi ginjal/ penggantian ginjal.</p>

                <p className='text-lg mt-5'>
                  PENYEBAB
                </p>

                <ul className='list-decimal text-md font-thin mt-3 px-4'>
                  <li>Ginetik : gagal ginjal oleh polikistik.</li>
                  <li>Penyakit lain : hipertensi, DM, infeksi ginjal.</li>
                  <li>Obat- obatan tertentu yang dikonsumsi secara jangka panjang.</li>
                  <li>Gaya hidup ( minuman bersoda dan alkohol).</li>
                </ul>

                <p className='text-md font-thin mt-3'>Penyakit gagal ginjal ini biasanya disebabkan oleh penyakit lain yang bersifat sistemik seperti hipertensi( tekanan darah tinggi), diabetes mellitus ( kencing manis), terjadinya infeksi, batu saluran kencing.</p>

                <p className='text-lg mt-5'>
                  GEJALA
                </p>

                <p className='text-md font-thin mt-3'>Pada tahap awal, CKD mungkin tidak memberikan gejala, itulah mengapa tes GFR perlu dilakukan sebelum terlambat. Ketika CKD semakin parah (moderat) atau lebih buruk, gejala-gejala mulai berkembang. Gejala pada awalnya cenderung tidak spesifik, seperti merasa lelah, lemas dan tidak enak badan. Ketika semakin parah CKD dapat ditandai dengan :</p>

                <ul className='list-disc text-md font-thin mt-3 px-4'>
                  <li>Kesulitan berpikir.</li>
                  <li>Nafsu makan yang buruk.</li>
                  <li>Penurunan berat badan.</li>
                  <li>Kulit kering dan gatal.</li>
                  <li>Kram otot.</li>
                  <li>Retensi cairan yang menyebabkan kaki membengkak.</li>
                  <li>Bengkak di sekitar mata, terutama setelah bangun pagi.</li>
                  <li>Kebutuhan untuk buang air kecil lebih sering dari biasanya.</li>
                  <li>Menjadi pucat karena anemia.</li>
                </ul>

                <p className='text-md font-thin mt-3'>Jika fungsi ginjal terus menurun maka akan terjadi ketidakseimbangan mineral dan kimiawi dalam aliran darah yang menimbulkan berbagai gejala, termasuk penipisan atau fraktur tulang karena gangguan kalsium dan fosfat.</p>

                <hr className='mt-5' />

                <p className='text-lg mt-5'>
                  TAHAPAN <b className='text-cyan-600'>GAGAL GINJAL KRONIS</b>
                </p>

                <p className='text-md font-thin mt-3'>Gagal ginjal kronis diklasifikasikan menjadi lima tahap yaitu :</p>

                <ul className='list-decimal text-md font-thin mt-3 px-4'>
                  <li>Pada tahap 1 dan 2, tidak muncul gejala yang jelas. Pada tahap ini ginjal masih mungkin untuk bekerja dengan baik sampai mencapai sepersepuluh kemampuan fungsional ginjal. Dokter biasanya mendiagnosis seseorang mengalami gagal ginjal kronis ketika orang tersebut memiliki :
                    <ul className='list-disc text-md font-thin mt-3 mb-3 px-4'>
                      <li>tekanan darah tinggi.</li>
                      <li>kadar kreatinin dan protein yang tinggi dalam darah.</li>
                      <li>riwayat keluarga dengan penyakit ginjal.</li>
                      <li>terlihat kerusakan ginjal pada pemeriksaan MRI atau CT scan.</li>
                    </ul>
                    <li>Pada tahap 3 gagal ginjal kronis, selain munculnya masalah di atas, pasien juga mengalami anemia. Kondisi ini berarti bahwa tubuh tidak dapat memproduksi sel darah merah yang mencukupi. Selain itu, penyakit tulang juga bisa terjadi.</li>
                    <li>Pada gagal ginjal kronis tahap 4, pasien harus berada di daftar tunggu untuk melakukan transplantasi ginjal. Sambil menunggu prosedur transplantasi ginjal, pasien harus menjalani perawatan dialisis secara rutin.</li>
                    <li>Tahap 5 gagal ginjal kronis artinya ginjal benar-benar tidak lagi berfungsi.</li>
                  </li>
                </ul>

                <p className='text-lg mt-5'>
                  MENCEGAH DAN <b className='text-cyan-600'>MENGOBATI CKD</b>
                </p>

                <p className='text-md font-thin mt-3'>Pencegahan CKD adalah dengan mengelola berbagai kondisi yang menjadi penyebabnya. Misalnya, kontrol gula darah bagi penderita diabetes, kontrol tekanan darah bagi penderita hipertensi. Obat-obatan hipertensi dari kelompok yang disebut Angiotensin Converting Enzyme inhibitor (ACE inhibitor) atau Angiotensin Receptor Blocker (ARB) selain menurunkan tekanan darah juga memiliki efek perlindungan ekstra pada ginjal. Setelah CKD berkembang, selain mengatasi penyebabnya, pengobatan juga diperlukan untuk mengurangi risiko penyakit kardiovaskuler. Penderita CKD memiliki peningkatan risiko penyakit kardiovaskuler seperti penyakit jantung, stroke, dan penyakit pembuluh darah perifer. Penderita CKD bahkan dua puluh kali lebih mungkin untuk meninggal akibat masalah kardiovaskuler yang terkait dibandingkan dari gagal ginjal.</p>
                <ul className='list-decimal text-md font-thin mt-3 mb-3 px-4'>
                  <li>Perubahan gaya hidup ( pola makan sehat atau teratur, hindari minuman soda atau minuman keras).</li>
                  <li>Kontrol tensi, kurangi konsumsi garam dan kontrol gula darah</li>
                </ul>
              </div>


            </Grid.Col>

            <Grid.Col md={6} lg={4}>
              <div className={style.h3}>
                <i>Post Terakhir</i>
                <hr />
                <PostList />

                <i>Edukasi</i>
                <hr />
                <EdukasiList />
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </main>
    </>
  )
}