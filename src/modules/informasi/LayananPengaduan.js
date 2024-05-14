import { Box, Button, Group, NumberInput, Radio, Text, Textarea, TextInput } from '@mantine/core'
import style from './assets/LayananPengaduan.module.css'
import Border from '@component/border'
import { useState } from 'react'
import axios from 'axios'

function LayananPengaduan() {
  const [posts, setPosts] = useState([])
  const [nama, setNama] = useState("")
  const [telpon, setTelpon] = useState(0)
  const [title, setTitle] = useState("")
  const [context, setContext] = useState("")
  const [saran, setSaran] = useState("")

  const client = axios.create({
    baseURL: "https://apiadmin.rshabibie.com/api/pelayanan"
  })

  const addPosts = async (nama, telpon, title, context, saran) => {
    let res = await client.post('', {
      name: nama,
      telpon: telpon,
      title: title,
      context: context,
      saran: saran
    });
    setPosts([res.data, ...posts]);
    setNama('')
    setTelpon('')
    setTitle('')
    setContext('')
    setSaran('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(nama, telpon, title, context, saran);
  };


  return (
    <>
      <Text className={style.h1}
      >Layanan Pengaduan</Text>
      <main className={style.wrapper}>

        <Border />
        <div className={style.h2}>
          <Box mt='md'>
            <form>
              <div className='grid grid-cols-2 gap-10'>
                <div>
                  <TextInput mb={15}
                    value={nama}
                    onChange={e => setNama(e.currentTarget.value)}
                    required="*"
                    label="Nama"
                  />
                  <NumberInput mb={15}
                    value={telpon}
                    pattern='[0-9]'
                    onChange={e => setTelpon(e)}
                    required="*"
                    label="Telepon Yang Bisa Di Hubungi"
                  />
                  <TextInput mb={15}
                    value={title}
                    onChange={e => setTitle(e.currentTarget.value)}
                    label="Perihal"
                    name="title"
                  />
                </div>
                <div>
                  <Radio.Group
                    value={context}
                    onChange={setContext}
                    label="Pilih Salah Satu"
                    withAsterisk>
                    <Radio label="Saran" value="saran" />
                    <Radio label="Pengaduan" value="pengaduan" />
                  </Radio.Group>
                  <Textarea
                    value={saran}
                    onChange={e => setSaran(e.currentTarget.value)}
                    label="Pesan"
                    name='saran'
                  />
                  <Group position="right" mt="md">
                    <Button className='px-5 mb-12 bg-[#1E90FF] hover:bg-white border border-[#1E90FF] hover:text-[#1E90FF] outline-[#1E90FF]  focus:outline-none focus:ring-2 focus:ring-offset-2' type='submit' onClick={handleSubmit}>Kirim Pesan</Button>
                  </Group>
                </div>
              </div>
            </form>
          </Box>
        </div>
      </main>
    </>
  )

}

export default LayananPengaduan;
