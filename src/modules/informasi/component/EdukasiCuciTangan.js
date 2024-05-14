import { Col, Grid, Image, Title } from '@mantine/core';
import style from '../assets/News.module.css'
import { AiFillTag, AiOutlineClockCircle } from "react-icons/ai"
import { BsPersonFill } from "react-icons/bs";
import { FaComments } from 'react-icons/fa';
import EdukasiList from './EdukasiList';

export default function EdukasiCuciTangan() {
  return (
    <>
      <main className={style.wrapper}>
        <div style={{
          width: '85vw'
        }}>
          <Grid>
            <Grid.Col md={9} lg={8}>

              <div className='flex'>
                <AiFillTag className={style.tag} />
                <label className={style.label}>Edukasi</label>
              </div>

              <Title className={style.h1}>Pentingnya Cuci Tangan Dengan Sabun Dan Cara Tepat melakukannya</Title>
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
                <Col span={3} order={2} orderSm={1} orderLg={3}> <AiOutlineClockCircle className={style.tag} /><label className={style.label}>5 Oktober 2022</label>
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
                  src="/EdukasiCuciTangan.jpg"
                  alt="Cuci Tangan"
                />
              </div>
              <div className={style.h2}>
                <p className='text-md font-thin mt-3'>Cuci tangan dengan sabun adalah cara terbaik untuk menghentikan penyebaran kuman dibandingkan hanya dengan memakai air saja. Kebiasaan sederhana ini terbukti efektif dalam menurunkan risiko berbagai penyakit. Oleh karena itu, penting untuk mengetahui cara mencuci tangan yang benar.<br />
                  <br />
                  Penyebaran kuman melalui tangan sering menyebabkan penyakit. Oleh karena itu, untuk meningkatkan kesadaran masyarakat akan pentingnya mencuci tangan, setiap tanggal 15 Oktober diperingati sebagai Hari Cuci Tangan Pakai Sabun Sedunia.
                  <br />
                  <br />
                  Selain meningkatkan kesadaran, peringatan ini bertujuan untuk mencegah masyarakat terserang penyakit dan menyebarkan kuman ke orang lain, serta menurunkan tingkat kematian akibat penyakit menular.</p>

                <hr className='mt-5' />

                <p className='text-xl font-bold mt-5 mb-5'>
                  LANGKAH MUDAH MENCUCI TANGAN <b className='text-[#1E90FF]'>DENGAN SABUN YANG BENAR</b>
                </p>

                <video className="span13 padingvideo" autoPlay="autoplay" loop="loop" muted="muted" >
                  <source src="/cucitangan.mp4" type="video/mp4" />
                </video>

                <p className='text-md font-thin mt-3'>Cuci tangan menjadi salah langkah efektif untuk melindungi diri dan keluarga Anda dari penyakit. Menurut studi, membiasakan diri mencuci tangan menggunakan sabun bisa mengurangi jumlah penderita diare sebesar 23–40% dan penyakit pernapasan sebesar 16–21%.
                  <br />
                  <br />
                  Berikut ini adalah langkah mudah mencuci tangan dengan sabun yang benar :</p>

                <ul className='list-disc text-md font-thin mt-3 px-4'>
                  <li>Basuh tangan dengan air bersih.</li>
                  <li>Gunakan sabun ke seluruh bagian tangan, mulai dari telapak dan punggung tangan, sela-sela jari, hingga area di bawah kuku.</li>
                  <li>Gosokkan tangan selama 20 detik.</li>
                  <li>Bilas tangan dengan air hingga bersih, lalu keringkan.</li>
                </ul>

                <hr className='mt-5' />

                <p className='text-xl font-bold mt-5'>
                  PILIH SABUN UNTUK <b className='text-[#1E90FF]'>MENCUCI TANGAN</b>
                </p>
                <p className='text-md font-thin mt-3'>Segala jenis sabun sebenarnya dapat Anda gunakan untuk mencuci tangan, tetapi sabun antibakteri atau antiseptik cenderung lebih sering digunakan. Terkadang, jenis sabun ini bisa menimbulkan iritasi kulit bagi orang yang memiliki kulit sensitif.
                  <br />
                  <br />
                  Untuk menyiasatinya, Anda bisa menggunakan pelembap yang mengandung petroleum jelly setelah selesai mencuci tangan dengan sabun guna mencegah kulit menjadi kering dan mengembalikan kelembapan kulit tangan.
                  <br />
                  <br />
                  Jika sabun dan air mengalir tidak tersedia, Anda bisa menggunakan tisu basah antibakteri dan hand sanitizer dengan kandungan alkohol setidaknya 60% untuk membunuh kuman di tangan.</p>

                <hr className='mt-5' />

                <p className='text-xl font-bold mt-5'>
                  BAHAYA TIDAK <b className='text-[#1E90FF]'>MENCUCI TANGAN</b>
                </p>
                <p className='text-md font-thin mt-3'>Umumnya, setiap orang terkadang sering menyentuh mata, hidung, dan mulut tanpa disadari. Padahal, hal tersebut justru membuat kuman dengan mudah masuk ke dalam tubuh melalui ketiga area yang disentuh tadi.
                  <br />
                  <br />
                  Selain itu, ketika Anda makan tanpa mencuci tangan, kuman yang berada di tangan juga bisa masuk ke minuman dan makanan, baik saat Anda menyiapkan makanan atau saat mengonsumsinya. Bila dibiarkan terus menerus, kebiasaan tidak mencuci tangan bisa menyebabkan diare, infeksi saluran pernapasan, serta infeksi kulit dan mata.</p>

                <ul className='list-disc text-md font-thin mt-3 px-4'>
                  <li>Memiliki tekanan darah tinggi.</li>
                  <li>Punya anggota keluarga lain dengan riwayat penyakit ginjal.</li>
                  <li>Berusia lanjut, di atas 65 tahun.</li>
                  <li>Penelitian menunjukkan bahwa kondisi ini lebih sering dialami orang keturunan Afrika-Amerika, Hispanik, Asia, dan Indian Amerika.</li>
                </ul>

                <hr className='mt-5' />

                <p className='text-xl font-bold mt-5'>
                  PENTINGNYA CUCI TANGAN <b className='text-[#1E90FF]'>DENGAN SABUN</b>
                </p>
                <p className='text-md font-thin mt-3'>
                  Anda diharuskan mencuci tangan dengan sabun setiap saat, terutama pada berbagai kondisi berikut ini:
                </p>

                <ul className='list-disc text-md font-thin mt-3 px-4'>
                  <li>Sebelum dan sesudah makan.</li>
                  <li>Sebelum, selama, dan setelah menyiapkan makanan.</li>
                  <li>Sebelum dan sesudah merawat seseorang yang sedang sakit.</li>
                  <li>Sebelum dan sesudah merawat luka.</li>
                  <li>Sebelum dan setelah mengganti popok bayi.</li>
                  <li>Setelah menggunakan toilet.</li>
                  <li>Setelah bersin atau batuk.</li>
                  <li>Setelah menyentuh sampah.</li>
                  <li>Setelah menyentuh atau membersihkan kotoran hewan.</li>
                </ul>

                <p className='text-md font-thin mt-3'>
                  Setelah mengetahui pentingnya mencuci tangan dengan sabun, ada baiknya Anda mulai mempraktikkannya. Jangan lupa untuk mengajarkan cuci tangan yang benar kepada Si Kecil dan juga anggota keluarga lainnya.
                  <br />
                  <br />
                  Cuci tangan dengan benar tidak sekadar untuk memperingati Global Handwashing Day saja, tetapi jadikan cuci tangan sebagai kebiasaan sehari-hari untuk menghindarkan Anda dan keluarga dari penyakit.
                  <br />
                  <br />
                  Itulah pentingnya cuci tangan dengan sabun yang tepat. Namun, jika Anda atau anggota keluarga mengalami keluhan, seperti diare atau pilek, yang tidak kunjung membaik, periksakan diri Anda atau anggota keluarga ke dokter guna memperoleh penanganan yang tepat.</p>
              </div>
            </Grid.Col>

            <Grid.Col md={6} lg={4}>
              <div className={style.h3}>
                <i>Artikel Edukasi</i>
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