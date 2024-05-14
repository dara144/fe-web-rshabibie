import { Text } from '@mantine/core'
import style from './assets/TataTertib.module.css'
import Border from '@component/border'

function TataTertib() {
  return (
    <>
      <Text className={style.h1}
      >Tata Tertib</Text>
      <main className={style.wrapper}>

        <Border />

        <div className={style.h2}>
          <label className={style.label}>
            TATA TERTIB PASIEN <b className='text-[#1E90FF]'>RAWAT INAP & HEMODIALISA</b>
          </label>
          <p className='text-md mt-3'>Demi ketertiban, keamanan dan keberhasilan perawatan pasien, mohon diperhatikan hal - hal sebagai berikut :</p>
          <ul className='list-decimal text-md mt-3 font-thin px-5'>
            <li>Data Pribadi Pasien dan Penanggung jawab Pasien</li>
            <ul className='list-disc text-md mt-2 mb-3 font-thin px-5'>
              <li>Nama, Umur, Agama danPekerjaan.</li>
              <li>Alamat Lengkap dan Nomor Telepon.</li>
              <li>Alamat Lengkap dan Nomor Telepon keluarga / penanggungjawab yang dapat dihubungi.</li>
            </ul>

            <li>Perlengkapan Pasien</li>
            <ul className='list-disc text-md mt-2 mb-3 font-thin px-5'>
              <li>Pasien diharap membawa perlengkapan pribadi seperti sikat dan pasta gigi, sabun mandi, pakaian pribadi secukupnya.</li>
              <li>Lemari kecil disediakan untuk menyimpan perlengkapan pribadi, pakaian kotor dan alat rumah sakit seperti pispot dan urinial.</li>
              <li>Tidak diperbolehkan membawa barang - barang berharga.</li>
              <li>Rumah Sakit tidak bertanggung jawab atas hilangnya uang, perhiasan dan barang lainnya milik pasien.</li>
            </ul>

            <li>Jam Kunjungan</li>
            <ul className='list-disc text-md mt-2 mb-3 font-thin px-5'>
              <li>Waktu Kunjungan</li>
              <ul className='list-none text-md mt-2 mb-3 font-thin '>
                <li>Hari Biasa/ Minggu/ Libur :</li>
                <li>Pkl. 10.00 s.d 11.00 WIB</li>
                <li>Pkl. 17.00 s.d 18.00 WIB</li>
              </ul>
              <li>Pasien dalam keadaan gawat dapat dikunjungi diluar jam kunjungan dengan izin kepala bagian atau perawat jaga.</li>
              <li>Makanan yang dibawa dari rumah untuk pasien yang sedang diet harap diberitahukan atau dilaporkan kepada perawat.</li>
              <li>Anak di bawah usia 12 ( duabelas ) tahun TIDAK diperbolehkan berkunjung Ke Ruangan Perawatan.</li>
              <li>Pasien tidak diperbolehkan keluar dari lingkungan RS. Khusus Ginjal Ny. RA. Habibie selama masih dalam perawatan.</li>
            </ul>

            <li>Penunggu Pasien</li>
            <ul className='list-disc text-md mt-2 mb-3 font-thin px-5'>
              <li>Pasien gawat atau selesai operasi boleh ditunggu oleh 1 (satu) orang dengan seizing kepala bagian atau perawat jaga.</li>
              <li>Penunggu pasien tidak diperbolehkan membawa peralatan tidur.</li>
              <li>Penunggu pasien tidak diperbolehkan tidur-tiduran atau menggelar tikar / alas untuk tidur di lantai ruang perawatan atau sepanjang koridor dan tidak diperbolehkan tidur di tempat tidur pasien.</li>
              <li>Penunggu pasien harus menjaga kebersihan dan kerapihan ruangan perawatan.</li>
            </ul>

            <li>Pasien Pulang / Keluar Rumah Sakit</li>
            <ul className='list-disc text-md mt-2 mb-3 font-thin px-5'>
              <li>Setelah pasien dinyatakan boleh pulang oleh dokter yang merawat, wajib menyelesaikan administrasi dan menyerahkan kartu kuning tanda pulang serta serah terima obat dan surat control dokter kepada perawat.</li>
              <li>Penyelesaian administrasi dilakukan di bagian kasir.</li>
              <li>Batas penyelesaian administrasi jam 15.00 WIB, lewat dari jam 15.00 WIB  dianggap tambah 1 hari.</li>
              <li>Rumah Sakit tidak bertanggungjawab terhadap barang - barang yang tertinggal.</li>
            </ul>

            <li>Pengurusan Jenazah</li>
            <ul className='list-disc text-md mt-2 mb-3 font-thin px-5'>
              <li>Serah terima jenazah dilaksanakan di kamar jenazah.</li>
              <li>Jenazah dapat dibawa pulang sesudah 2 (dua) jam meninggal dan di tempatkan di kamar jenazah.</li>
              <li>Rumah Sakit dapat membantu pengurusan ambulance jenazah untuk keperluan dalam dan luarkota.</li>
              <li>Ambulance Jenazah milik Rumah Sakit hanya melayani pengantaran jenazah dalam kota.</li>
            </ul>
          </ul>

          <hr className='mt-6' />
        </div>

        <div className={style.h2}>
          <label className={style.label}>
            HEMODIALISA <b className='text-[#1E90FF]'>(CUCI DARAH)</b>
          </label>
          <p className='text-md mt-3'>Demi ketertiban,keamanan dan keberhasilan perawatan pasien, mohon diperhatikan hal-hal sebagai berikut :</p>
          <ul className='list-decimal text-md mt-2 mb-3 font-thin px-5'>
            <li>Seluruh pasien tidak diperkenankan membawa barang-barang berharga dan uang yang berlebihan karena Rumah Sakit tidak bertanggung jawab atas kehilangan barang-barang tersebut.</li>
            <li>Seluruh pasien diwajibkan untuk mendaftarkan ke Bagian Registrasi Lt.1 dengan menyerahkan kartu pasien untuk kemudian diberi nomor urut, kami tidak akan melayani pasien tanpa bukti pendaftaran dari bagian Registrasi Lt.1</li>
            <li>Seluruh pasien wajib membawa kartu pasien, apabila kartu pasien tersebut tidak dibawa akan dikenakan denda sebesar Rp.5.000,- dan apabila kartu pasien tersebut hilang akan dikenakan biaya sebesar Rp.15.000.- .</li>
            <li>Pasien dan keluarga dapat menggunakan locker untuk menyimpan barang-barang.</li>
            <li>Pada saat penusukan keluarga pasien harus menunggu diluar.</li>
            <li>Penunggu pasien hanya 1 (satu)orang dan tidak diperkenankan duduk ditempat tidur.</li>
            <li>Anak usia ~12 tahun tidak diperkenankan memasuki ruangan hemodialisis.</li>
            <li>Bagi pasien yang membatalkan hemodialisis, wajib memberitahukan 1 (satu ) hari sebelumnya. Pembatalan secara mendadak dikenakan denda sebesar Rp.125.000.-</li>
            <li>Bagi pasien shift pagi yang datang jam 08.30 WIB keatas, dan pasien shift siang yang  datang jam 13.30 WIB keatas akan dikenakan denda sebesar Rp.125.000.-</li>
            <li>Bagi pasien HD yang datang diluar jadwal rutin termasuk overtime (diluar jam kerja) harus melalui instalasi gawat darurat RSKG Ny. R.A Habibie sesuai dengan ketentuan yang berlaku.</li>
            <li>Bagi pasien baru HD (cuci darah) & Operasi</li>
          </ul>

          <hr className='mt-6' />
        </div>

        <div className={style.h2}>
          <label className={style.label}>
            *DALAM KOTA BANDUNG
          </label>
          <ul className='list-decimal text-md mt-2 mb-5 font-thin px-5'>
            <li>Surat rujukan untuk hemodialisa/operasi dari dokter di RS setempat di Bandung dan telah dilegalisasi petugas BPJS Kesehatan di RS tersebut. (untuk RSHS harus ada surat keterangan penuh).</li>
            <li>Traveling Dialisis + hasil laboratorium.</li>
            <li>Kartu JKN BPJS Kesehatan + hasil laboratorium.</li>
            <li>Bagi pasien peserta JKN diluar Kota Bandung yang rutin Hemodialisis.</li>
          </ul>

          <label className={style.label}>
            *LUAR KOTA BANDUNG
          </label>

          <ul className='list-decimal text-md mt-2 mb-3 font-thin px-5'>
            <li>Surat rujukan untuk Hemodialisis/operasi dari dokter di RS setempat.</li>
            <li>Surat pengantar dari BPJS Kesehatan center di RS tersebut.</li>
            <li>Traveling Hemodialisis + Hasil Laboratorium.</li>
            <li>Kartu BPJS Kesehatan + KTP pasien.</li>
            <li>Bagi pasien peserta JKN diluar Kota Bandung yang rutin Hemodialisis.</li>
          </ul>


          <hr className='mt-6' />


          <ul className='list-disc text-md mt-2 mb-12 font-thin px-5'>
            <li>Untuk pengambilan obat kronis 7-23 hari dapat dilakukan di Instalasi Farmasi RSKG Ny.R.A.Habibie, jadi pasien tidak perlu lagi mengambil obat di apotek luar. Resep tidak perlu di Acc petugas BPJS, untuk pengambilan obat rutin tetap per minggu atau seminggu sekali ketika HD (diluar obat kronis).</li>
            <li>Untuk pasien rutin RSKG Ny.R.A.Habibie perpanjangan surat rujukan dapat dilakukan di RSKG Ny.R.A.Habibie Bagian Registrasi, jadi pasien tidak perlu memperpanjang rujukan lagi ke PPK/Puskesmas.</li>
            <li>Untuk pengambilan obat yang diresepkan di poli harus sama dengan tanggal SEP datang ke Poli. Jika tidak sama, pengambilan obat tidak akan dilayani oleh Instalasi Farmasi.</li>
            <li>Untuk pengambilan obat rutin dan konsultasi dilakukan di hari selain hari Hemodialisis.</li>
            <li>Untuk pemeriksaan laboratorium pasien diwajibkan melakukan pembayaran terlebih dahulu di bagian kasir.</li>
            <li>Untuk pasien yang akan mengambil darah, wajib menyerahkan formulir  permintaan darah yang telah dilegalisir oleh PMI. Tanpa formulir tersebut kami akan membebankan biaya transfusi darah kepada yang bersangkutan  sesuai dengan tarif PMI yang berlaku.</li>
            <li>Peserta JKN BPJS Kesehatan  yang membutuhkan transfusi darah wajib menyerahkan surat Egibilitas Pelayanan (SEP) warna merah beserta sample darah dan formulir permintaan yang telah ditandatangani oleh dokter ke bagian kasir.</li>
            <li>Pasien dan keluarga pasien wajib untuk menjaga kebersihan, keindahan dan kerapihan rumah sakit.</li>
            <li>Pasien & keluarga pasien dilarang :</li>
            <ul className='list-decimal text-md mt-2 mb-3 font-thin px-5'>
              <li>Membuka jendela ruangan (AC Menyala).</li>
              <li>Mencuci perlengkapan pribadi.</li>
              <li>Merokok di lingkungan Rumah Sakit.</li>
            </ul>
            <li>Pasien Wajib Mengetahui Ketentuan Tarif dan Ketentuan lainnya yang dapat dilihat di papan pengumuman setiap lantai.</li>
          </ul>
        </div>
      </main>
    </>
  )

}

export default TataTertib;
