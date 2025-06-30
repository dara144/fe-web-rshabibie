import { Image, Text } from '@mantine/core'
import style from './assets/Fasilitas.module.css'
import CardSection from './component/card'
import Border from '@component/border'

function Fasilitas() {
  return (
    <>
      <Text className={style.h1}
      >Fasilitas Dan Layanan RSKG</Text>
      <main className={style.wrapper}>

        <Border />
        <CardSection />

      </main>
    </>
  )

}

export default Fasilitas;
