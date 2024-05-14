import { Badge, Box, Card, Grid, Group, List, Modal, Text } from '@mantine/core'
import style from './assets/RawatInap.module.css'
import Border from '@component/border'
import VIP from './component/RanapVIP'
import Kelas1 from './component/RanapKls1'
import Kelas2 from './component/RanapKls2'
import Kelas3 from './component/RanapKls3'
function RawatInap() {
  return (
    <>
      <Text className={style.h1}
      >Rawat Inap</Text>
      <main className={style.wrapper}>
        <div style={{
          width: '85vw'
        }}>
          <Border />

          <div className={style.h2}>
            <p className='text-md mt-5 font-thin mb-5'>Ruang Rawat Inap Rumah Sakit Khusus Ginjal Ny. R.A. Habibie  terbagi atas ruang perawatan Reguler dan Ruang Rawat Intensif. Rumah Sakit Khusus Ginjal Ny. R.A. Habibie memiliki beberapa jenis ruang perawatan, yaitu :</p>
            <Grid className='mb-2'>
              <Grid.Col className='mb-5' md={12} lg={3} xl={3}>
                <VIP />
              </Grid.Col>

              <Grid.Col className='mb-5' md={12} lg={3} xl={3}>
                <Kelas1 />
              </Grid.Col>

              <Grid.Col className='mb-5' md={12} lg={3} xl={3}>
                <Kelas2 />
              </Grid.Col>

              <Grid.Col className='mb-5' md={12} lg={3} xl={3}>
                <Kelas3 />
              </Grid.Col>
            </Grid>

            <p className='text-md mt-5 font-[350] text-[#4B3F3F]'><label className='text-red-500'>*</label> Setiap ruang rawat inap RSKG Ny.R.A. Habibie dilengkapi fasilitas free Wi-Fi.</p>
          </div>
        </div>
      </main>
    </>
  )

}

export default RawatInap;
