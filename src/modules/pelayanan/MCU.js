import { Text } from '@mantine/core'
import style from './assets/MCU.module.css'
import Border from '@component/border'
import ModalMCU from './component/ModalMCU';
import PaketKhususMCU from './component/PaketKhususMCU';
import PaketSkriningMCU from './component/PaketSkriningMCU';
import PaketMCU from './component/PaketMCU';
import PelayananMCU from './component/PelayananMCU';
function MCU() {
  return (
    <>
      <Text className={style.h1}
      >MCU</Text>
      <main className={style.wrapper}>
        <div style={{
          width: '85vw'
        }}>
          <Border />

          <ModalMCU />

        </div>
      </main>

      {/* Paket Sekolah & Paket ART */}
      <div className='rounded-tl-[15vh] bg-slate-50 overflow-visible mt-12'>
        <div className={style.wrapper}>
          <PaketKhususMCU />
        </div>
      </div>

      {/* Paket Skrinig Ginjal Rutin & Skrining Ginjal Sederhana */}
      <div className='w-[85vw] ml-[7vw]'>
        <div className={style.h2}>
          <PaketSkriningMCU />
        </div>
      </div>

      {/* Paket BRONZE, SILVER, GOLD */}
      <div className={style.wrapper}>
        <div className={style.h2}>
          <br />
          <br />
          <br />
          <PaketMCU />
        </div>
      </div>
      <hr className='mt-20' />

      {/* Pelayanan MCU & Jam Pelayanan */}
      <div className={style.h2}>
        <PelayananMCU />
      </div>
    </>
  )

}

export default MCU;
