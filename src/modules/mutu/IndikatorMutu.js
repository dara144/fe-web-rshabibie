import { Grid, ScrollArea, Text } from '@mantine/core';
import style from './assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './component/Link';
// import KebersihanTangan from './component/KebersihanTangan'
export default function Mutu() {
  return (
    <>
      <Text className={style.h1}
      >Indikator Mutu RS Khusus Ginjal Ny. R.A Habibie</Text>
      <main className={style.wrapper}>
        <Border />
        <Grid>
          <Grid.Col md={3} lg={3}>
            <div className='h-screen overflow-clip mt-5 bg-white'>
              <ScrollArea style={{
                height: '100vh'
              }}>
                <Link />
              </ScrollArea>
            </div>
          </Grid.Col>
          <Grid.Col md={9} lg={9}>
            <div className='m-5'>
              {/* <KebersihanTangan /> */}
            </div>
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}