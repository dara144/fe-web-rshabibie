import { Text } from '@mantine/core'
import style from './assets/HakDanKewajiban.module.css'
import Border from '@component/border'

function HakDanKewajiban() {
  return (
    <>
      <Text className={style.h1}
      >Hak Dan Kewajiban</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <label className={style.label}>Hak Dan <b className='text-[#1E90FF]'>Kewajiban Pasien</b></label>
          <p className='text-md mt-3 font-thin'>Hak Pasien dalam <i>UU No.44/2009 tentang Rumah Sakit (Pasal 32 UU 44/2009)</i>, menyebutkan bahwa setiap pasien mempunyai hak sebagai berikut :</p>

          <div className={style.h2}>
            <ul className='list-decimal text-md mt-3 font-thin px-5'>
              <li>Memperoleh informasi mengenai tata tertib dan peraturan yang berlaku dirumah sakit.
              </li>
              <li>Memperoleh informasi tentang hak dan kewajiban pasien.
              </li>
              <li>Memperoleh layanan yang manusiawi, adil jujur, dan tanpa diskriminasi.</li>
              <li>Memperoleh layanan kesehatan yang bermutu sesuai dengan standar profesi dan standar prosedur operasional.
              </li>
              <li>Memperoleh layanan efektif dan efisien sehingga pasien terhindar dari kerugian fisik dan materi.</li>
              <li>Mengajukan pengaduan atas kualitas pelayanan yang didapatkan.</li>
              <li>Memilih dokter dan kelas perawatan sesuai dengan keinginannya dan peraturan yang berlaku di rumah sakit.</li>
              <li>Meminta konsultasi tentang penyakit yang dideritanya kepada dokter lain yang mempunyai SIP (Surat Izin Praktek) baik didalam maupun diluar rumah sakit.
              </li>
              <li>Memdapatkan perifasi dan kerahasiaan penyakit yang diderita berikut data-data medisnya.</li>
              <li>Memdapat informasi yang meliputi diagnosis dan tata cara tindakan medis, tujuan tindakan medis, alternatif tindakan, risiko dan komplikasi yang mungkin terjadi, dan prognosis terhadap tindakan yang dilakukan serta perkiraan biaya pengobatan.</li>
              <li>Memberikan persetujuan atau menolak atas tindakan yang dilakukan oleh tenaga kesehatan terhadap penyakit yang dideritanya.</li>
              <li>Didampingi keluarganya dalam keadaan kritis.</li>
              <li>Menjalankan ibadah sesuai agama atau kepercayaan yang dianutnya selama hal itu tidak mengganggu pasien lainnya.
              </li>
              <li>Memperoleh keamanan dan keselamatan dirinya selama dalam perawatan dirumah sakit.</li>
              <li>Mengajukan usul ,saran dan perbaikan atas perlakuan rumah sakit terhadap dirinya.</li>
              <li>Menolak pelayanan bimbingan rohani yang tidak sesuai dengan agama dan kepercayaan yang dianutnya.</li>
              <li>Menggugat dan/atau menuntut rumah sakit apabila rumah sakit apabila rumah sakit diduga memberikan pelayanan yang tidak sesuai dengan standar baik secara perdata ataupun pidana, dan</li>
              <li>Mengeluhkan pelayanan rumah sakit yang tidak sesuai dengan standar pelayanan melalui media cetak dan elektronik sesuai dengan ketentuan peraturan perundang-undangan.
              </li>
            </ul>

            <p className='text-md mt-5 font-thin'>Kewajiban Pasien diatur diantaranya dalam <i>UU No.29 tahun 2004 tentang Praktik Kedokteran</i> terutama <i>pasal 53 UU</i>, yang meliputi :</p>
            <ul className='list-decimal text-md mt-3 font-thin px-5 mb-12'>
              <li>Pasien dan keluarganya berkewajiban untuk menaati segala peraturan dan tata tertib Rumah Sakit.</li>
              <li>Pasien berkewajiban untuk mematuhi segala instruksi dokter dan perawat dalam pengobatannya.</li>
              <li>Pasien berkewajiban memberikan informasi dengan jujur dan selengkapnya tentang penyakit yang diderita kepada dokter yang merawat.</li>
              <li>Setiap pasien mempunyai kewajiban terhadap rumah sakit atas pelayanan yang diterimanya.</li>
              <li>Pasien dan/atau penanggungnya berkewajiban memenuhi hal-hal yang telat disepakati perjanjian yang telah dibuatnya.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )

}

export default HakDanKewajiban;
