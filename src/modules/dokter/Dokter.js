import { Text } from '@mantine/core'
import style from './assets/DokterSpesialis.module.css'
import Border from '@component/border'
import Image from 'next/future/image';
import jadwalDokter from '../dokter/assets/image/JadwalDokter.jpg'

function Dokter() {
  return (
    <>
      <Text className={style.h1}>Jadwal Dokter RSKG Ny. R.A. Habibie</Text>
      <main className={style.wrapper}>
        <Border />
        <Image
          src={jadwalDokter}
          blurDataURL={jadwalDokter}
          alt='Jadwal Dokter'
          className={`${style.image}`} />
      </main>
    </>
  )
}

export default Dokter
