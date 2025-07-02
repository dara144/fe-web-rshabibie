import { Card, Grid, Group, List, Modal, Text } from '@mantine/core'
import style from './assets/HD.module.css'
import Border from '@component/border'
import Image from 'next/future/image'
import hd from './assets/image/HD.jpg'
import { useState } from 'react'
import border from './assets/image/border.png'
import PHD from './assets/image/PHD.jpg'
import PHDAnak from './assets/image/PHDAnak.jpg'
import PHDAnak2 from './assets/image/PHDAnak2.jpg'
import HDICU1 from './assets/image/HDICU1.jpg'
import HDICU2 from './assets/image/HDICU2.jpg'
import HDICU4 from './assets/image/HDICU4.JPG'
import HDReg1 from './assets/image/HDReg1.jpg'
import HDReg2 from './assets/image/HDReg2.jpg'
import HDReg3 from './assets/image/HDReg3.jpg'
import HDReg4 from './assets/image/HDReg4.jpg'
import HDReg5 from './assets/image/HDReg5.jpg'
import HDReg6 from './assets/image/HDReg6.jpg'
import HDReg7 from './assets/image/HDReg7.jpg'
import HDReg8 from './assets/image/HDReg8.jpg'
import HDReg9 from './assets/image/HDReg9.jpg'
import HDVip1 from './assets/image/HDVip1.jpg'
import HDVip2 from './assets/image/HDVip2.jpg'
import HDVip3 from './assets/image/HDVip3.jpg'
import HDOvertime1 from './assets/image/HDOvertime1.jpg'
import { useInView } from 'react-intersection-observer'
import { BiSearch } from 'react-icons/bi'
import { useHover } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel'
function HD() {
  const [opened, setOpened] = useState(false);
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  const { ref: myRef2, inView: myImageIsVisible2 } = useInView()
  const { hovered: hovered1, ref: ref1 } = useHover();
  const { hovered: hovered2, ref: ref2 } = useHover();
  const { hovered: hovered3, ref: ref3 } = useHover();
  const { hovered: hovered4, ref: ref4 } = useHover();
  const { hovered: hovered5, ref: ref5 } = useHover();
  const { hovered: hovered6, ref: ref6 } = useHover();
  const { hovered: hovered7, ref: ref7 } = useHover();
  const [opened1, setOpened1] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [opened3, setOpened3] = useState(false);
  const [opened4, setOpened4] = useState(false);
  const [opened5, setOpened5] = useState(false);
  const [opened6, setOpened6] = useState(false);
  const [opened7, setOpened7] = useState(false);
  return (
    <>
      <Text className={style.h1}
      >Instalasi Dialisis</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <p className='text-md mt-3 font-thin'>Instalasi Dialisis RS Khusus Ginjal Ny. R.A. Habibie menyediakan layanan terapi pengganti ginjal bagi pasien dengan gangguan ginjal kronik maupun akut. Dengan dukungan tenaga medis profesional, peralatan modern, dan sistem pelayanan terpadu, kami memberikan dua jenis layanan utama: <b>Hemodialisis dan CAPD (Continuous Ambulatory Peritoneal Dialysis)</b>.
          </p>
        </div>
      </main>

      <div className={style.bg}>
        <div className={style.wrapper}>
          <div className={style.h2}>
            <Grid className='mb-2'>
              <Grid.Col md={12} lg={4} xl={3.5}>
                <div
                  ref={myRef}
                >
                  <Image className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                    src={hd}
                    alt="HD"
                    priority
                  />
                  <div
                    ref={myRef1}
                  >
                    <Image className={`${style.image} ${myImageIsVisible1 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                      src={PHD}
                      alt="Pelayanan HD"
                      priority
                    />
                  </div>
                  <div
                    ref={myRef2}
                  >
                    <Image className={`${style.image} ${myImageIsVisible2 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                      src={HDReg9}
                      alt="Pelayanan HD Khusus Anak"
                      priority
                    />
                  </div>
                </div>
              </Grid.Col>
              <Grid.Col md={12} lg={7} xl={8}>
                <p className='text-md px-5 mb-2'>LAYANAN<span className='text-[#1E90FF]'> HEMODIALISIS</span></p>
                <p className='text-md font-thin px-5'>
                  Hemodialisis dilakukan dengan menggunakan mesin dan dializer yang berfungsi untuk menyaring racun, kelebihan cairan, dan limbah dari dalam darah. Proses ini dilakukan secara berkala dan diawasi langsung oleh dokter dan perawat dialisis yang bersertifikat. <b>Fasilitas</b> kami dilengkapi dengan ruang perawatan yang nyaman, sistem pemantauan pasien secara real-time, dan standar kebersihan tinggi untuk mencegah infeksi.
                </p>
                <br />
                <br />
                <p className='text-md px-5 mb-2'>KEUNGGULAN HEMODIALISIS <span className='text-[#1E90FF]'> DI RSKG Ny. R. A. HABIBIE:</span></p>
                <ul className='list-disc text-md font-thin mt-3 px-14'>
                  <li>Dializer Single Use (dializer sekali pakai)</li>
                  <li>Ruang Isolasi Hemodialisis untuk pasien HbsAg positif, B 20 (HIV) positif,  infeksi paru (TBC dan Covid)</li>
                  <li>Ruangan Hemodialisis dengan ACH lebih dari 12 x / menit , yang aman  digunakan pasien dengan resiko penularan tinggi lewat udara</li>
                  <li>Ruang Hemodialisis untuk dewasa dan anak usia 5-18 tahun (VIP, Utama dan Reguler)</li>
                  <li>Adanya perawat asuh dimana satu perawat bertanggung jawab untuk 3 pasien agar dapat memonitoring dan membimbing kesehatan pasien secara komprehensif</li>
                  <li>Memberikan terapi Eritropoietin (Epo) rutin 1x/minggu untuk meningkatkan kadar hemoglobin bagi peserta BPJS yang menjalani HD rutin 2x/minggu</li>
                  <li>Melayani pasien umum, BPJS dan kontraktor</li>
                </ul>
                <br />
                <br />
                <p className='text-md px-5 mb-2'>JADWAL LAYANAN<span className='text-[#1E90FF]'> HEMODIALISIS:</span></p>
                <ul className='list-disc text-md font-thin mt-3 px-14'>
                  <li><b>Senin - Sabtu</b></li>
                  <li><b>Pukul 07.00 - 19.00 WIB</b></li>
                  <li>Dilayani dalam 2 shift sesuai jadwal yang telah ditentukan.</li>
                </ul>
              </Grid.Col>
            </Grid>
            <p className='text-md mt-5 font-thin mb-5'>Ruang Hemodialisa Rumah Sakit Khusus Ginjal Ny. R.A. Habibie memiliki beberapa jenis ruang hemodialisa, yaitu :</p>
            <Carousel slideSize="30%" slideGap="lg" loop align="start">
              <Carousel.Slide>
                <a ref={ref1} className='relative block group'>
                  <Image
                    src={HDICU1}
                    className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
                    alt='Hemodialisa ICU'
                    priority />
                  {hovered1 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' onClick={() => setOpened1(true)} />}
                </a>
                <Modal
                  size='90%'
                  opened={opened1}
                  onClose={() => setOpened1(false)}
                >
                  <Carousel className={style.carousel} slideSize="70%" slideGap="md" >
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDICU1}
                        width={800}
                        height={500}
                        priority
                        alt="Hemodialisa ICU"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDICU2}
                        width={800}
                        height={500}
                        loading='lazy'
                        alt="Hemodialisa ICU"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDICU4}
                        width={800}
                        loading='lazy'
                        alt="Hemodialisa ICU"
                      />
                    </Carousel.Slide>
                  </Carousel>
                </Modal>
                <div className='p-5'>
                  <Group position="center" mt="xs">
                    <Text weight={400}>Hemodialisa ICU</Text>
                  </Group>
                </div>
              </Carousel.Slide>

              <Carousel.Slide>
                <a ref={ref2} className='relative block group'>
                  <Image
                    src={HDReg1}
                    className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
                    alt='Hemodialisa Reguler'
                    priority />
                  {hovered2 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' onClick={() => setOpened2(true)} />}
                </a>
                <Modal
                  size='90%'
                  opened={opened2}
                  onClose={() => setOpened2(false)}
                >
                  <Carousel className={style.carousel} slideSize="70%" slideGap="md" >
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDReg1}
                        width={800}
                        height={500}
                        priority
                        alt="Hemodialisa Reguler"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDReg2}
                        width={800}
                        height={500}
                        priority
                        alt="Hemodialisa Reguler"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDReg8}
                        width={800}
                        height={500}
                        loading='lazy'
                        alt="Hemodialisa Reguler"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDReg9}
                        width={800}
                        height={500}
                        loading='lazy'
                        alt="Hemodialisa Reguler"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDReg4}
                        width={800}
                        height={500}
                        loading='lazy'
                        alt="Hemodialisa Reguler"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDReg5}
                        width={800}
                        height={500}
                        loading='lazy'
                        alt="Hemodialisa Reguler"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDReg6}
                        width={800}
                        height={500}
                        loading='lazy'
                        alt="Hemodialisa Reguler"
                      />
                    </Carousel.Slide>
                  </Carousel>
                </Modal>
                <div className='p-5'>
                  <Group position="center" mt="xs">
                    <Text weight={400}>Hemodialisa Reguler</Text>
                  </Group>
                </div>
              </Carousel.Slide>

              <Carousel.Slide>
                <a ref={ref3} className='relative block group'>
                  <Image
                    src={HDVip2}
                    className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
                    alt='Hemodialisa VIP'
                    priority />
                  {hovered3 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' onClick={() => setOpened3(true)} />}
                </a>
                <Modal
                  size='90%'
                  opened={opened3}
                  onClose={() => setOpened3(false)}
                >
                  <Carousel className={style.carousel} slideSize="70%" slideGap="md" >
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDVip1}
                        width={800}
                        height={500}
                        priority
                        alt="Hemodialisa VIP"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDVip2}
                        width={800}
                        height={500}
                        loading='lazy'
                        alt="Hemodialisa VIP"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDVip3}
                        width={800}
                        height={500}
                        loading='lazy'
                        alt="Hemodialisa VIP"
                      />
                    </Carousel.Slide>
                  </Carousel>
                </Modal>
                <div className='p-5'>
                  <Group position="center" mt="xs">
                    <Text weight={400}>Hemodialisa VIP</Text>
                  </Group>
                </div>
              </Carousel.Slide>

              <Carousel.Slide>
                <a ref={ref4} className='relative block group'>
                  <Image
                    src={HDOvertime1}
                    className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
                    alt='Hemodialisa ICU'
                    priority />
                  {hovered4 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' onClick={() => setOpened4(true)} />}
                </a>
                <Modal
                  size='90%'
                  opened={opened4}
                  onClose={() => setOpened4(false)}
                >
                  <Carousel className={style.carousel} slideSize="70%" slideGap="md" >
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDOvertime1}
                        width={800}
                        height={500}
                        priority
                        alt="Hemodialisa Overtime"
                      />
                    </Carousel.Slide>
                  </Carousel>
                </Modal>
                <div className='p-5'>
                  <Group position="center" mt="xs">
                    <Text weight={400}>Hemodialisa Overtime</Text>
                  </Group>
                </div>
              </Carousel.Slide>

              <Carousel.Slide>
                <a ref={ref5} className='relative block group'>
                  <Image
                    src={PHDAnak}
                    className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
                    alt='Hemodialisa ICU'
                    priority />
                  {hovered5 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' onClick={() => setOpened5(true)} />}
                </a>
                <Modal
                  size='90%'
                  opened={opened5}
                  onClose={() => setOpened5(false)}
                >
                  <Carousel className={style.carousel} slideSize="70%" slideGap="md" >
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={PHDAnak}
                        width={800}
                        height={500}
                        priority
                        alt="Hemodialisa Anak"
                      />
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={PHDAnak2}
                        width={800}
                        height={500}
                        priority
                        alt="Hemodialisa Anak"
                      />
                    </Carousel.Slide>
                  </Carousel>
                </Modal>
                <div className='p-5'>
                  <Group position="center" mt="xs">
                    <Text weight={400}>Hemodialisa Anak</Text>
                  </Group>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <a ref={ref6} className='relative block group'>
                  <Image
                    src={HDReg3}
                    className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
                    alt='Hemodialisa ICU'
                    priority />
                  {hovered6 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' onClick={() => setOpened6(true)} />}
                </a>
                <Modal
                  size='90%'
                  opened={opened6}
                  onClose={() => setOpened6(false)}
                >
                  <Carousel className={style.carousel} slideSize="70%" slideGap="md" >
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDReg3}
                        width={800}
                        height={500}
                        priority
                        alt="Hemodialisa Airborne"
                      />
                    </Carousel.Slide>
                  </Carousel>
                </Modal>
                <div className='p-5'>
                  <Group position="center" mt="xs">
                    <Text weight={400}>Hemodialisa Airborne</Text>
                  </Group>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <a ref={ref7} className='relative block group'>
                  <Image
                    src={HDReg7}
                    className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
                    alt='Hemodialisa ICU'
                    priority />
                  {hovered7 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' onClick={() => setOpened7(true)} />}
                </a>
                <Modal
                  size='90%'
                  opened={opened7}
                  onClose={() => setOpened7(false)}
                >
                  <Carousel className={style.carousel} slideSize="70%" slideGap="md" >
                    <Carousel.Slide>
                      <Image className={style.image}
                        src={HDReg7}
                        width={800}
                        height={500}
                        priority
                        alt="Hemodialisa Isolasi"
                      />
                    </Carousel.Slide>
                  </Carousel>
                </Modal>
                <div className='p-5'>
                  <Group position="center" mt="xs">
                    <Text weight={400}>Hemodialisa Isolasi</Text>
                  </Group>
                </div>
              </Carousel.Slide>
            </Carousel>
          </div>
        </div >
      </div >
    </>
  )

}

export default HD;
