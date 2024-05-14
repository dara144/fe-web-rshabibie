import { Button, Card, Grid, Group, Image, Input, Text } from "@mantine/core"
import style from './assets/DokterSpesialis.module.css'
import Border from '@component/border'
import { BsChevronDown } from "react-icons/bs";

function DokterUmum() {
  return (
    <>
      <Text className={style.h1}
      >Dokter Umum RSKG Ny. R.A. Habibie</Text>
      <main className={style.wrapper}>
        <div style={{
          width: '85vw'
        }}>
          <Border />
          <Grid>
          <Grid.Col md={12} lg={6.5} xl={5.5}>
              <div className='bg-sky-100 overflow-visible lg:h-screen md:h-[90vh] sm:h-[80vh] '>
                <br />
                <br />
                <div className="mx-60 sm:mx-44 my-12">
                  <Image 
                  src="/DokMCU.png" 
                  className="h-72 animate__animated animate__fadeInUp" 
                  alt='Dokter Spesialis'/>
                  <Card className="bg-white rounded-b-[2vw] shadow-xl ">
                    <div className=" text-center">
                      <label className="text-xl font-normal">dr. John Doe</label>
                      <div className="text-sm text-center mt-2 font-thin">Dokter Spesialis Hematologi Onkologi Medik
                        <br />
                        <br />
                        Jadwal Praktek :</div>
                      <br />
                      <ul className="list-none text-sm mb-2 font-thin">
                        <li>Senin - Jumat, Pukul 08.00-14.00 WIB</li>
                        <li>* Sabtu sesuai perjanjian</li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col md={12} lg={5} xl={6}>
              <Card withBorder
                className="shadow-lg rounded-lg lg:ml-[6vw] lg:mt-[27vh] mt-5">
                <Group mb="3vh">
                  <Text className="text-xl font-semibold m-auto">Informasi Jadwal <label className="text-cyan-500">Dokter Umum</label></Text>
                </Group>
                <div className="lg:mx-16">
                  <form>
                    <Input
                      component='select' rightSection={<BsChevronDown size={14} stroke={1.5} />} className="font-thin">
                      <option className="font-thin" value="">Pilih Dokter Umum..</option>
                      <option className="font-thin" value="dr. Dilla Khairat">dr. Dilla Khairat</option>
                      <option className="font-thin" value="dr. Amalia Pratiwi">dr. Amalia Pratiwi</option>
                      <option className="font-thin" value="dr. Barli Akbar Ramadhan">dr. Barli Akbar Ramadhan</option>
                      <option className="font-thin" value="dr. Dhia Ramadhani">dr. Dhia Ramadhani</option>
                      <option className="font-thin" value="dr. Elda Arini Hartono">dr. Elda Arini Hartono</option>
                      <option className="font-thin" value="dr. Esther Sylviani Sutedjo">dr. Esther Sylviani Sutedjo</option>
                      <option className="font-thin" value="dr. Ghita Fazagania">dr. Ghita Fazagania</option>
                      <option className="font-thin" value="dr. Irene Ranny Kristya N">dr. Irene Ranny Kristya N</option>
                      <option className="font-thin" value="dr. Ilda Nurul Ainun">dr. Ilda Nurul Ainun</option>
                      <option className="font-thin" value="dr. Melita Hendriani">dr. Melita Hendriani</option>
                      <option className="font-thin" value="dr. M. Ridho Kurnianda Adi">dr. M. Ridho Kurnianda Adi</option>
                      <option className="font-thin" value="dr. Nandya Meitadani">dr. Nandya Meitadani</option>
                      <option className="font-thin" value="dr. Nia Sylviani">dr. Nia Sylviani</option>
                      <option className="font-thin" value="dr. Nadhira Daniswara">dr. Nadhira Daniswara</option>
                      <option className="font-thin" value="dr. Ratih Prabandari">dr. Ratih Prabandari</option>
                      <option className="font-thin" value="dr. Ratu Rediani Utari">dr. Ratu Rediani Utari</option>
                      <option className="font-thin" value="dr. R. A. Vivi Yunita Sari">dr. R. A. Vivi Yunita Sari</option>
                      <option className="font-thin" value="drg. R. Yulia Puspitasari">drg. R. Yulia Puspitasari</option>
                      <option className="font-thin" value="dr. Vera Dianwari">dr. Vera Dianwari</option>
                      <option className="font-thin" value="dr. Wanda Zaneta">dr. Wanda Zaneta</option>
                    </Input>
                  </form>
                </div>

                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                  Cari Dokter
                </Button>
              </Card>
            </Grid.Col>
          </Grid>
        </div>
      </main>
    </>
  )
}

export default DokterUmum;