import ActiveClass from '@component/ActiveClass'
import ActiveLink from '@component/ActiveLink'
import { Menu } from '@mantine/core'
import style from '@styles/Nav.module.css'

export default function NavMenu() {
  return (
    <nav className={style.nav}>
      <ActiveLink activeClassName={'text-[#1E90FF]'} href='/profil/CompanyProfile'>
        <a className='flex items-center gap-2 transition-all hover:scale-105 hover:text-[#1E90FF]'>
          <span>Company Profile</span>
        </a>
      </ActiveLink>

      <ActiveLink activeClassName={'text-[#1E90FF]'} href='/dokter/Dokter'>
        <a className='flex items-center gap-2 transition-all hover:scale-105 hover:text-[#1E90FF]'>
          <span>Dokter</span>
        </a>
      </ActiveLink>

      <Menu withArrow transition={'slide-up'}>
        <ActiveClass activeClassName={'text-[#1E90FF]'} href='/pelayanan'>
          <Menu.Target>
            <menu className='flex cursor-pointer items-center gap-2 transition-all hover:scale-105 hover:text-[#1E90FF]'>
              <span>Pelayanan</span>
            </menu>
          </Menu.Target>
        </ActiveClass>

        <Menu.Dropdown>
          <Menu.Label>Pelayanan Rumah Sakit</Menu.Label>

          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/IGD'>
            <Menu.Item component='a'>Instalasi Gawat Darurat</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/HD'>
            <Menu.Item component='a'>Hemodialisis (HD)</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/RawatJalan'>
            <Menu.Item component='a'>Rawat Jalan</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/CAPD'>
            <Menu.Item component='a'>CAPD</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/RawatInap'>
            <Menu.Item component='a'>Rawat Inap</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/PelayananBedah'>
            <Menu.Item component='a'>Pelayanan Bedah</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/Radiologi'>
            <Menu.Item component='a'>Radiologi & USG</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/Laboratorium'>
            <Menu.Item component='a'>Laboratorium</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/Farmasi'>
            <Menu.Item component='a'>Farmasi</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/MCU'>
            <Menu.Item component='a'>Medical Check UP (MCU)</Menu.Item>
          </ActiveLink>
        </Menu.Dropdown>
      </Menu>

      <Menu withArrow transition={'slide-up'}>
        <ActiveClass activeClassName={'text-[#1E90FF]'} href='/informasi'>
          <Menu.Target>
            <menu className='flex cursor-pointer items-center gap-2 transition-all hover:scale-105 hover:text-[#1E90FF]'>
              <span>Informasi</span>
            </menu>
          </Menu.Target>
        </ActiveClass>

        <Menu.Dropdown>
          <Menu.Label>Informasi Rumah Sakit</Menu.Label>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/promo/Promo'>
            <Menu.Item component='a'>Promo & Paket Layanan</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/AlurPendaftaran'>
            <Menu.Item component='a'>Alur Pendaftaran</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/formulir'>
            <Menu.Item component='a'>Registrasi Online</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/Fasilitas'>
            <Menu.Item component='a'>Fasilitas</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/BudayaKeselamatanRS'>
            <Menu.Item component='a'>Budaya Keselamatan Rumah Sakit</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/BPJSKesehatan'>
            <Menu.Item component='a'>BPJS Kesehatan</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/Mitra'>
            <Menu.Item component='a'>Mitra & Rekan</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/gagalginjal'>
            <Menu.Item component='a'>Artikel & Informasi</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/EdukasiGinjal'>
            <Menu.Item component='a'>Edukasi</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/TataTertib'>
            <Menu.Item component='a'>Tata Tertib</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/LayananPengaduan'>
            <Menu.Item component='a'>Layanan Pengaduan</Menu.Item>
          </ActiveLink>
        </Menu.Dropdown>
      </Menu>

      <Menu withArrow transition={'slide-up'}>
        <ActiveClass activeClassName={'text-[#1E90FF]'} href='/diklat'>
          <Menu.Target>
            <menu className='flex cursor-pointer items-center gap-2 transition-all hover:scale-105 hover:text-[#1E90FF]'>
              <span>Diklat</span>
            </menu>
          </Menu.Target>
        </ActiveClass>

        <Menu.Dropdown>
          <Menu.Label>Informasi Diklat</Menu.Label>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/diklat/ProfilDiklat'>
            <Menu.Item component='a'>Profil Diklat</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/diklat/PelatihanCAPD'>
            <Menu.Item component='a'>Pelatihan CAPD</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/diklat/PelatihanHD'>
            <Menu.Item component='a'>Pelatihan Dialisis</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/diklat/SemuaAngkatan'>
            <Menu.Item component='a'>Lulusan Pelatihan Dialisis</Menu.Item>
          </ActiveLink>
          <ActiveLink activeClassName={'text-[#1E90FF]'} href='/diklat/AngkatanCAPD'>
            <Menu.Item component='a'>Lulusan Pelatihan CAPD</Menu.Item>
          </ActiveLink>
        </Menu.Dropdown>
      </Menu>

      <ActiveLink activeClassName={'text-[#1E90FF]'} href='/mutu/KebersihanTangan'>
        <a className='flex items-center gap-2 transition-all hover:scale-105 hover:text-[#1E90FF]'>
          <span>Indikator Mutu</span>
        </a>
      </ActiveLink>
    </nav>
  )
}