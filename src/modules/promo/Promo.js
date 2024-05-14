import style from './assets/Promo.module.css'
import Border from '@component/border'
import { Text } from '@mantine/core'
import MCU from './component/PaketMcu'
export default function PromoRS() {
  return (
    <>
      <Text className={style.h1}
      >Promo & Paket Layanan</Text>
      <main className={style.wrapper}>
        <Border />
        <MCU />
      </main>
    </>
  )
}