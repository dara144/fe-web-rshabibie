import { Col, Grid, Image, Title } from '@mantine/core';
import style from '../assets/News.module.css'
import { AiFillTag, AiOutlineClockCircle } from "react-icons/ai"
import { BsPersonFill } from "react-icons/bs";
import { FaComments } from 'react-icons/fa';
import PostList from './PostList'

export default function GagalGinjal() {
  return (
    <>
      <main className={style.wrapper}>
        <div style={{
          width: '85vw'
        }}>
          <Grid>
            <Grid.Col md={6} lg={8}>

              <AiFillTag className={style.tag} />
              <label className={style.label}>Artikel Kesehatan</label>

              <Title className={style.h1}>GAGAL GINJAL</Title>
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
                  src="/gagalginjal.jpg"
                  alt="Gagal Ginjal"
                />
              </div>
              <div className={style.h2}>
                <p className='text-lg font-bold mt-5'>
                  FUNGSI <b className='text-cyan-600'>GINJAL</b>
                </p>

                <p className='text-md font-thin mt-3'>
                  Ginjal adalah salah satu organ tubuh penting bagi tubuh kita. Setiap orang normal memiliki 2 buah ginjal yang terletak di daerah pinggang, di kiri dan kanan tulang belakang, tepat di bawah tulang rusuk terakhir.</p>

                <p className='text-md font-thin mt-3'>
                  Berfungsi membersihkan darah dari berbagai zat-zat hasil metabolisme tubuh dan berbagai racun yang tidak diperlukan oleh tubuh dalam bentuk produksi urine (air seni). Produksi urine di ginjal berlangsung terus menerus, dari menit ke menit. Bila jumlah urine di kandung kemih sudah cukup banyak maka akan timbul rangsangan untuk buang air kecil. Jumlah urine yang dikeluarkan setiap harinya berkisar antara 1-2 liter.</p>

                <p className='text-md font-thin mt-3'>
                  Selain fungsi tersebut, ginjal berfungsi mempertahankan kadar cairan tubuh dan elektrolit, mengatur tekanan darah, mengatur kadar kalsium pada tulang serta mengatur produksi sel darah merah.</p>

                <p className='text-md font-thin mt-3'>
                  Kelainan pada funsgi ginjal bisa disebabkan penyakit yang ringan, seperti infeksi saluran kemih yang kemudian dapat berkembang menjadi infeksi pada ginjal. Infeksi pada ginjal dapat menyebabkan gagal ginjal sehingga memerlukan pengobatan cuci darah.</p>

                <hr className='mt-5' />
                <p className='text-md mt-5'>
                  Apa yang <b className='text-cyan-600'>disebut Gagal Ginjal?</b>
                </p>

                <p className='text-md font-thin mt-3'>
                  Gagal ginjal adalah suatu keadaan dimana kedua gagal ginjal gagal menjalankan fungsinya. Pada tahap awal ginjal tidak menunjukkan gejala. Penderita baru merasakan adanya kelainan pada dirinya jika fungsi ginjal menurun menjadi 25% bahkan di bawah 10% pada penderita muda. Inilah sebabnya mengapa gagal ginjal disebut sebagai “silent killer”.
                </p>

                <hr className='mt-5' />
                <p className='text-md mt-5'>
                  Ada berapa <b className='text-cyan-600'>jenis Gagal Ginjal?</b>
                </p>

                <p className='text-md font-thin mt-3'>
                  Ada 2 jenis penyakit gagal ginjal, yaitu :</p>

                <ul className='list-decimal text-md font-thin mt-3 px-4'>
                  <li>Gagal Ginjal Akut
                    <p className='text-md font-thin mt-1 mb-3'>
                      Penurunan faal ginjal mendadak (akut) dengan ditandai produksi urine menurun. Bila dikelola dengan baik akan sembuh dengan sempurna.</p>
                  </li>
                  <li>Gagal Ginjal Kronis
                    <p className='text-md font-thin mt-1 mb-3'>
                      Keadaan dimana kedua fungsi gijal gagal menjalankan fungsinya secara perlahan dan tidak dapat disembuhkan. Dengan pengobatan yang teratur dapat menghambat memburuknya fungsi ginjal, sehingga tidak berkembang ke tahap Gagal Ginjal Terminal (GGT) yang memerlukan tindakan cuci darah atau transplantasi ginjal.</p>
                  </li>
                </ul>

                <hr className='mt-5' />
                <p className='text-md mt-5'>
                  Apa Penyebab <b className='text-cyan-600'>Gagal Ginjal?</b>
                </p>

                <ul className='list-decimal text-md font-thin mt-3 px-4'>
                  <li>Penyebab Gagal Ginjal Akut :</li>
                  <ul className='list-disc text-md font-thin mt-2 mb-3 px-4'>
                    <li>Infeksi, misalnya  infeksi saluran kemih.</li>
                    <li>Dehidrasi (kekeringan) disebabkan oleh muntaber, luka bakar dan lain-lain.</li>
                    <li>Keracunan akibat obat-obatan.</li>
                    <li>Sumbatan, misalnya batu ginjal, tumor, bekuan darah dan sebagainya.</li>
                    <li>Lain-lain, misalnya sumbatan akibat asam jengkol.</li>
                  </ul>
                  <li>Penyebab Gagal Ginjal Kronis :
                    <ul className='list-disc text-md font-thin mt-2 px-4'>
                      <li>Glomerulonefritis Kronik.</li>
                      <li>Kencing manis atau Diabetes.</li>
                      <li>Hipertensi</li>
                      <li>Batu Ginjal.</li>
                      <li>Pemakaian obat-obatnan tertentu dalam jangka waktu lama.</li>
                      <li>Lain-Lain, misalnya penyakit lupus dan polikistik.</li>
                    </ul>
                  </li>
                </ul>
                <hr className='mt-5' />

                <p className='text-md mt-5'>
                  Bagaimana <b className='text-cyan-600'>Gejalanya?</b></p>

                <p className='text-md font-thin mt-1 mb-3'>
                  Seseorang yang menderita gagal ginjal akan menunjukkan gejala sebagai berikut :</p>

                <ul className='list-decimal text-md font-thin mt-2 px-4'>
                  <li>Gejala Uremia
                    <p className='text-md font-thin mt-1 mb-3'>
                      Gejala ini terjadi karena ureum yang menumpuk dalam darah. Ureum adalah sisa metabolisme terutama protein yang harus dikeluarkan bersam air seni (urine)
                      <br />
                      <br />
                      Gejalanya : mual, nafsu makan yang menurun dan muntah-muntah, pernafasan berbau ureum, kadang disertai dengan luka pada lambung, pegal-pegal di tungkai bawah, rasa kesemutan dan gangguan konsentrasi</p>
                  </li>
                  <li>Tekanan Darah Tinggi (Hipertensi)
                    <p className='text-md font-thin mt-1 mb-3'>
                      Terjadi akibat terganggunya fungsi pengaturan tekanan darah karena gangguan hormon yang dihasilkan oleh ginjal, kaan tetapi hipertensi juga bisa menjadi penyebab kerusakan fungsi ginjal, misalnya pada penderita hipertensi menahun.</p>
                  </li>
                  <li>Anemia
                    <p className='text-md font-thin mt-1 mb-3'>
                      Ditandai dengan warna kulit dan wajah pucat, cepat lelah dan merasa lesu. Penyebabnya karena kekurangan hormon eritropoetin, keracunan sumsum tulang, dan pendarahan yang tidak tampak.</p>
                  </li>
                  <li>Gangguan Pengaturan Cairan Tubuh
                    <p className='text-md font-thin mt-1 mb-3'>
                      Adanya penumpukan cairan dalam tubuh seperti di paru-paru, perut, kaki, sehingga terjadi pembengkakan pada organ tubuh tersebut.</p>
                  </li>
                </ul>
                <hr className='mt-5' />

                <p className='text-md mt-5'>
                  Pemeriksaan <b className='text-cyan-600'>Apa Yang Diperlukan?</b>
                </p>

                <p className='text-md font-thin mt-1 mb-3'>
                  Pemeriksaan yang diperlukan untuk mengetahui gagal ginjal :</p>

                <ul className='list-disc text-md font-thin mt-2 px-4'>
                  <li>Pemeriksaan Fisik</li>
                  <li>Pemeriksaan Penunjang, meliputi :
                    <ul className='list-decimal text-md font-thin mt-2 px-4'>
                      <li>Pemeriksaan Laboratorium : pemeriksaan darah dan urine.</li>
                      <li>Pemeriksaan Lain sesuai dengan penyebabnya, misalnya : USG, biopsi ginjal, pemeriksaan nuklir, dan lain-lain.</li>
                    </ul>
                  </li>
                </ul>
                <hr className='mt-5' />

                <p className='text-md mt-5'>
                  Bagaimana <b className='text-cyan-600'>Penatalaksanaannya?</b>
                </p>

                <p className='text-md font-thin mt-1 mb-3'>
                  Penatalaksanaan gagal ginjal :</p>

                <ul className='list-decimal text-md font-thin mt-2 px-4'>
                  <li> Secara konservatif : melalui diet, obat-obatan dan kontrol yang teratur ke spesialis penyakit dalam konsultan ginjal hipertensi (nefrolog).</li>
                  <li>Melalu terapi ginjal pengganti (TGP) dengan cara dialysis (hemodialisis dan CAPD) dan transplantasi. Hal ini dilakukan bila dengan cara konservatif tidak berhasil dan penderita dinyatakan menderita Gagal Ginjal Terminal (GGT).</li>
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