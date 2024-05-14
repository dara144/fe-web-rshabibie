import { Text } from "@mantine/core"
import style from './assets/AlurPendaftaran.module.css'
import Border from '../../component/border'
import Alur from "./component/Alur";

function AlurPendaftaran() {
  return (
    <>
      <Text className={style.h1}
      >Tahapan Pendaftaran</Text>
      <main className={style.wrapper}>
        <Border />
        <Alur />
      </main>
    </>
  )
}

export default AlurPendaftaran;