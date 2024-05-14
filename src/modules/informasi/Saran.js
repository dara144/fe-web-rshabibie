import { Box, Button, Group, Text, Textarea, TextInput } from '@mantine/core'
import style from './assets/Saran.module.css'
import Border from '@component/border'

function Saran() {
  return (
    <>
      <Text className={style.h1}
      >Saran</Text>
      <main className={style.wrapper}>
        <div style={{
          width: '85vw'
        }}>
          <Border />
          <div className='h-screen'>
            <div className={style.h2}>
              <Box mt='md'>
                <form className='mx-[25vw]'>
                  {/* <div className='grid grid-cols-2 gap-10'> */}
                  <TextInput mb={15}
                    required="*"
                    label="Nama"
                  />
                  <Textarea
                    label="Pesan Saran"
                  />
                  <Group position="right" mt="md">
                    <Button className='px-5 mb-12 bg-[#1E90FF] hover:bg-white border border-[#1E90FF] hover:text-[#1E90FF] outline-[#1E90FF]  focus:outline-none focus:ring-2 focus:ring-offset-2' type='submit'>Kirim Pesan</Button>
                  </Group>
                  {/* </div> */}
                </form>
              </Box>

            </div>
          </div>
        </div>
      </main>
    </>
  )

}

export default Saran;
