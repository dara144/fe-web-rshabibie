import ActiveLink from "@component/ActiveLink";
import style from '../assets/IndikatorMutu.module.css'

export default function Link() {
  return (
    <>
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/KebersihanTangan'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Kebersihan Tangan</span>
          </a>
        </ActiveLink>
      </div>
      <hr className="my-3" />
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/PenggunaanAPD'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Penggunaan APD</span>
          </a>
        </ActiveLink>
      </div>
      <hr className="my-3" />
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/IdentifikasiPasien'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Identifikasi Pasien</span>
          </a>
        </ActiveLink>
      </div>
      <hr className="my-3" />
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/WaktuTungguRajal'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Waktu Tunggu Rawat Jalan</span>
          </a>
        </ActiveLink>
      </div>
      <hr className="my-3" />
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/TundaOPElektif'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Penundaan Operasi Elektif</span>
          </a>
        </ActiveLink>
      </div>
      <hr className="my-3" />
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/WaktuVisiteDokter'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Waktu Visite Dokter</span>
          </a>
        </ActiveLink>
      </div>
      <hr className="my-3" />
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/LaporHasilKritisLab'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Pelaporan Hasil Kritis Laboratorium</span>
          </a>
        </ActiveLink>
      </div>
      <hr className="my-3" />
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/PatuhFornas'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Kepatuhan Penggunaan Formularium Nasional</span>
          </a>
        </ActiveLink>
      </div>
      <hr className="my-3" />
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/PatuhCP'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Kepatuhan Terhadap Alur Klinis ( <i>Clinical Pathway</i> )</span>
          </a>
        </ActiveLink>
      </div>
      <hr className="my-3" />
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/RisikoJatuh'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Kepatuhan Upaya Pencegahan Risiko Pasien Jatuh</span>
          </a>
        </ActiveLink>
      </div>
      <hr className="my-3" />
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/WaktuTanggapKomplain'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Kecepatan Waktu Tanggap Komplain</span>
          </a>
        </ActiveLink>
      </div>
      <hr className="my-3" />
      <div className="mb-2">
        <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/KepuasanPasien'>
          <a className='hover:text-[#1E90FF]'>
            <span className={style.span}>Kepuasan Pasien</span>
          </a>
        </ActiveLink>
      </div>
    </>
  )
}