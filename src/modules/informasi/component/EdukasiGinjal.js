import { Col, Grid, Image, List, Title } from '@mantine/core';
import style from '../assets/News.module.css'
import { AiFillTag, AiOutlineClockCircle } from "react-icons/ai"
import { BsPersonFill } from "react-icons/bs";
import { FaComments } from 'react-icons/fa';
import EdukasiList from './EdukasiList';

export default function EdukasiGinjal() {
  return (
    <>
      <main className={style.wrapper}>
        <Grid className='mt-5'>
          <Grid.Col md={9} lg={8}>
            <AiFillTag className={style.tag} />
            <label className={style.label}>Edukasi</label>
            <Title className={style.h1}>Penyakit Ginjal</Title>
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
                src="/EdukasiGinjal.jpg"
                alt="Penyakit Ginjal"
              />
            </div>
            <div className={style.h2}>
              <p className='text-xl font-bold mt-5'>
                PENGERTIAN <b className='text-[#1E90FF]'>PENYAKIT GINJAL</b>
              </p>
              <p className='text-md font-thin mt-3'>Gagal ginjal adalah salah satu kondisi medis yang rentan terjadi sehingga patut diwaspadai. Ginjal adalah dua buah organ yang berbentuk seperti kacang merah yang berada di kedua sisi tubuh bagian belakang atas, tepatnya di bawah tulang rusuk manusia. Fungsi ginjal di antaranya untuk menghasilkan renin yang merupakan enzim untuk mengatur tekanan darah. Senyawa eritropoeting yang berfungsi untuk menstimulasi produksi sel darah merah juga dihasilkan melalui ginjal.
                <br />
                <br />
                Selain itu, organ ini juga berfungsi untuk menyaring ampas metabolisme tubuh. Bahkan ginjal yang sehat bisa menjaga kadar garam dan mineral tetap seimbang dalam tubuh. Hal yang tidak kalah penting, ginjal mampu menghasilkan senyawa aktif dari vitamin D agar kesehatan tulang tetap terjaga.
                <br />
                <br />
                Ketika ginjal mengalami gangguan, maka sisa-sisa metabolisme tubuh akan menyebabkan terjadinya pembengkakan pada bagian pergelangan kaki, muntah-muntah, sesak napas dan kurang tidur. Jika tidak segera ditangani, penyakit ginjal ini pun merupakan kondisi yang cukup berbahaya lho!</p>

              <hr className='mt-5' />

              <p className='text-xl font-bold mt-5'>
                JENIS <b className='text-[#1E90FF]'>PENYAKIT GINJAL</b>
              </p>
              <p className='text-md font-thin mt-3'>Penyakit ginjal sendiri terdiri dari berbagai jenis yang berbeda. Berikut ini jenis penyakit ginjal yang sering terjadi :</p>

              <List className='list-decimal text-md mt-3 font-semibold'>
                <List.Item>Penyakit Ginjal Kronis</List.Item>
                <List className='list-none text-md mt-3 mb-5 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Keadaan dimana kedua fungsi gijal gagal menjalankan fungsinya secara perlahan dan tidak dapat disembuhkan. Dengan pengobatan yang teratur dapat menghambat memburuknya fungsi ginjal, sehingga tidak berkembang ke tahap Gagal Ginjal Terminal (GGT) yang memerlukan tindakan cuci darah atau transplantasi ginjal.</List.Item>
                </List>
                <List.Item>Penyakit Ginjal Akut</List.Item>
                <List className='list-none text-md mt-3 mb-5 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Penurunan faal ginjal mendadak (akut) dengan ditandai produksi urine menurun. Bila dikelola dengan baik akan sembuh dengan sempurna.</List.Item>
                </List>
                <List.Item>Batu Ginjal</List.Item>
                <List className='list-none text-md mt-3 mb-5 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Kondisi ini ditandai dengan terbentuknya benda padat atau kerikil pada salah satu atau kedua ginjal. Biasanya, kondisi ini terjadi akibat tingginya kadar mineral tertentu dalam urine.</List.Item>
                </List>
                <List.Item>Infeksi Ginjal</List.Item>
                <List className='list-none text-md mt-3 mb-5 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Kondisi ini ditandai dengan terbentuknya benda padat atau kerikil pada salah satu atau kedua ginjal. Biasanya, kondisi ini terjadi akibat tingginya kadar mineral tertentu dalam urine.</List.Item>
                </List>
                <List.Item>Penyakit Ginjal Polikistik</List.Item>
                <List className='list-none text-md mt-3 mb-5 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Penyakit ginjal polikistik atau Polycystic Kidney Disease (PKD) merupakan kondisi kelainan genetik yang menyebabkan munculnya kista pada ginjal.</List.Item>
                </List>
              </List>
              <hr className='mt-5' />

              <p className='text-xl font-bold mt-5'>
                PENYEBAB <b className='text-[#1E90FF]'>PENYAKIT GINJAL</b>
              </p>
              <p className='text-md font-thin mt-3'>Ada banyak hal yang menyebabkan seseorang mengalami penyakit ginjal. Mulai dari tekanan darah tinggi, riwayat penyakit diabetes, adanya gangguan pada penyaringan ginjal, hingga riwayat keluarga dengan batu ginjal atau ginjal polikistik.
                <br />
                <br />
                Namun tidak hanya itu, gaya hidup yang kurang sehat, seperti terlalu banyak mengonsumsi alkohol, kurang berolahraga, memiliki pola makan tinggi garam dan gula, serta jarang mengonsumsi air putih menjadi pemicu lain seseorang rentan mengalami kondisi ini.</p>

              <hr className='mt-5' />

              <p className='text-xl font-bold mt-5'>
                FAKTOR RISIKO <b className='text-[#1E90FF]'>PENYAKIT GINJAL</b>
              </p>
              <p className='text-md font-thin mt-3'>Pengidap diabetes lebih berisiko tinggi terkena penyakit ginjal. Bisa dikatakan, diabetes adalah penyebab utama kondisi ini. Namun, risiko penyakit ginjal juga meningkat pada individu dengan kondisi berikut :
              </p>

              <ul className='list-disc text-md font-thin mt-3 px-4'>
                <li>Memiliki tekanan darah tinggi.</li>
                <li>Punya anggota keluarga lain dengan riwayat penyakit ginjal.</li>
                <li>Berusia lanjut, di atas 65 tahun.</li>
                <li>Penelitian menunjukkan bahwa kondisi ini lebih sering dialami orang keturunan Afrika-Amerika, Hispanik, Asia, dan Indian Amerika.</li>
              </ul>

              <hr className='mt-5' />

              <p className='text-xl font-bold mt-5'>
                GEJALA <b className='text-[#1E90FF]'>PENYAKIT GINJAL</b>
              </p>
              <p className='text-md font-thin mt-3'>
                Nyatanya, gejala penyakit ginjal yang muncul pada tiap pengidap akan dirasakan berbeda. Hal ini disebabkan oleh perbedaan jenis penyakit ginjal yang dialami. Bahkan, beberapa diantaranya tidak menunjukkan gejala apapun di awal kondisi ini terjadi.
                <br />
                <br />
                Oleh karena itu, sebaiknya ketahui lebih banyak gejala kesehatan yang terkait dengan penyakit ginjal. Berikut tanda dan gejala awalyang patut diwaspadai :</p>

              <ul className='list-disc text-md font-thin mt-3 px-4'>
                <li>Kamu akan mengalami kondisi kelelahan, kurang berenergi, bahkan kesulitan untuk berkonsentrasi.</li>
                <li>Mengalami gangguan tidur.</li>
                <li>Perubahan pada kesehatan kulit yang menjadi lebih kering dan gatal.</li>
                <li>Terdapat darah dalam urine.</li>
                <li>Urine yang berbusa dan memiliki bau menyengat. Tidak hanya itu, urine juga memiliki warna yang sangat gelap.</li>
                <li>Mengalami bengkak terus-menerus di area mata.</li>
                <li>Pergelangan kaki dan kaki yang mengalami pembengkakan.</li>
                <li>Mengalami penurunan nafsu makan.</li>
                <li>Lebih sering mengalami nyeri atau kram otot.</li>
              </ul>

              <hr className='mt-5' />

              <p className='text-xl font-bold mt-5'>
                DIAGNOSIS <b className='text-[#1E90FF]'>PENYAKIT GINJAL</b>
              </p>
              <p className='text-md font-thin mt-3'>
                Segera kunjungi rumah sakit terdekat ketika kamu mengalami beberapa gangguan kesehatan terkait dengan penyakit ginjal. Ada beberapa pemeriksaan yang bisa kamu lakukan untuk mengetahui kondisi ginjal, seperti :</p>

              <ul className='list-disc text-md font-thin mt-3 px-4'>
                <li>Tes darah, biasanya tes ini dilakukan untuk menyaring limbah dari darah dengan perkiraan laju filtrasi glomerulus atau eGFR.</li>
                <li>Tes urine juga bisa dilakukan untuk mengetahui kondisi kesehatan ginjal.</li>
                <li>Biopsi ginjal merupakan prosedur dimana dokter akan mengambil sampel jaringan dari ginjal untuk dilakukan pemeriksaan secara detail di laboratorium.</li>
                <li>USG dilakukan untuk mendapatkan gambaran mengenai kondisi ginjal saat itu dan mendeteksi adanya gangguan lain, seperti tumor atau kista.</li>
              </ul>

              <hr className='mt-5' />

              <p className='text-xl font-bold mt-5'>
                PENGOBATAN <b className='text-[#1E90FF]'>PENYAKIT GINJAL</b>
              </p>
              <p className='text-md font-thin mt-3'>
                Penanganan penyakit ginjal juga akan disesuaikan dengan jenisnya. Namun, umumnya pengobatan dilakukan untuk meringankan gejala dan menurunkan kondisi menjadi lebih buruk. Ada beberapa pengobatan yang bisa dilakukan, seperti :</p>

              <ul className='list-disc text-md font-thin mt-3 px-4'>
                <li>Penggunaan obat-obatan.</li>
                <li>Perubahan gaya hidup dengan lebih rutin berolahraga, menghindari minuman alkohol, membatasi asupan garam dan gula, serta memenuhi kebutuhan cairan setiap harinya.</li>
                <li>Penghancuran batu ginjal untuk mengatasi batu ginjal yang besar.</li>
                <li>Cuci darah yang berlangsung selama 3-5 jam dengan dilakukan berkisar 3 kali per minggu.</li>
                <li>Tindakan operasi untuk mengangkat batu ginjal atau ginjal polikistik dan transplantasi ginjal. </li>
              </ul>

              <hr className='mt-5' />

              <p className='text-xl font-bold mt-5'>
                KOMPLIKASI <b className='text-[#1E90FF]'>PENYAKIT GINJAL</b>
              </p>
              <p className='text-md font-thin mt-3'>
                Penyakit ginjal yang terjadi dalam jangka panjang dapat berdampak negatif hampir ke setiap bagian dari tubuh. Komplikasi yang bisa terjadi meliputi :</p>

              <ul className='list-disc text-md font-thin mt-3 px-4'>
                <li>Retensi cairan, yang dapat menyebabkan pembengkakan di lengan dan kaki, tekanan darah tinggi, atau cairan di paru-paru (edema paru).</li>
                <li>Peningkatan mendadak kadar kalium dalam darah (hiperkalemia), yang dapat mengganggu fungsi jantung.</li>
                <li>Anemia.</li>
                <li>Penyakit jantung. </li>
                <li>Tulang lemah dan peningkatan risiko patah tulang.</li>
                <li>Penurunan gairah seks, disfungsi ereksi atau penurunan kesuburan.</li>
                <li>Kerusakan pada sistem saraf pusat, yang dapat menyebabkan kesulitan berkonsentrasi, perubahan kepribadian, atau kejang.</li>
                <li>Penurunan respon imun, yang membuat pengidapnya lebih rentan terhadap infeksi.</li>
                <li>Perikarditis, peradangan pada selaput mirip kantung yang menyelubungi jantung Anda (perikardium).</li>
                <li>Komplikasi kehamilan yang membawa risiko bagi ibu dan janin yang sedang berkembang.</li>
                <li>Kerusakan permanen pada ginjal (penyakit ginjal stadium akhir), yang pada akhirnya membutuhkan dialisis atau transplantasi ginjal untuk bertahan hidup.</li>
              </ul>

              <hr className='mt-5' />

              <p className='text-xl font-bold mt-5'>
                PENCEGAHAN <b className='text-[#1E90FF]'>PENYAKIT GINJAL</b>
              </p>
              <p className='text-md font-thin mt-3'>
                Segeralah lakukan diagnosis pada kondisi batu ginjal tersebut dengan mendatangi dokter untuk melakukan beberapa tes. Lakukan tes urine terlebih dahulu untuk memeriksa infeksi dan batuan yang terdapat di dalam urine.
                <br />
                <br />
                Serta lakukan tes darah agar memastikan ginjal berfungsi dengan baik. Ada pun langkah pencegahan untuk mengurangi risiko terkena penyakit ini, seperti:</p>

              <ul className='list-disc text-md font-thin mt-3 px-4'>
                <li><b>Ikuti petunjuk sebelum mengonsumsi obat-obatan yang dijual bebas.</b> Saat menggunakan pereda nyeri yang dijual bebas, seperti aspirin, ibuprofen dan acetaminophen, ikuti petunjuk pada kemasannya. Terlalu banyak atau terlalu sering mengonsumsinya dapat menyebabkan kerusakan ginjal.</li>
                <li><b>Pertahankan berat badan ideal.</b> Jika kamu telah memiliki berat badan yang ideal, pertahankan dengan rutin berolahraga dan pola makan sehat. Apabila kamu perlu menurunkan berat badan, bicarakan dengan dokter tentang cara diet sehat.</li>
                <li><b>Jangan merokok.</b> Merokok dapat merusak ginjal dan memperburuk kerusakan ginjal yang sudah ada. .</li>
                <li><b>Kelola kondisi medis dengan baik.</b> Jika kamu mengidap penyakit atau kondisi yang meningkatkan risiko penyakit ginjal, konsultasikan dengan dokter untuk mengendalikannya.</li>
              </ul>
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
      </main>
    </>
  )
}