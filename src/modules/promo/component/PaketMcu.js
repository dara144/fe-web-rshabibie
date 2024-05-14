import ActiveLink from '@component/ActiveLink'
import { Badge, Button, Card, Grid, Group, Modal, Text } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import Image from 'next/future/image';
import paketanak from '../assets/image/PaketAnak1.png'
import paketbabysister from '../assets/image/PaketBabySister1.png'
import sederhana from '../assets/image/SkriningSederhana.jpg'
import rutin from '../assets/image/SkriningRutin.jpg'
import vaksin from '../assets/image/vaksin.jpg'
import DokMCU from '../assets/image/DokMCU.png'
import HematologiMCU from '../assets/image/HematologiMCU.png'
import KolestrolMCU from '../assets/image/KolestrolMCU.png'
import SGOTMCU from '../assets/image/SGOTMCU.png'
import kreatininMCU from '../assets/image/KreatininMCU.png'
import DarahMCU from '../assets/image/DarahMCU.png'
import RontgentMCU from '../assets/image/RontgenMCU.png'
import MakanMCU from '../assets/image/MakanMCU.png'
import USGMCU from '../assets/image/USGMCU.png'
import { AiFillTag } from 'react-icons/ai';
import { FiCheckSquare } from 'react-icons/fi';
import style from '../assets/Promo.module.css'

export default function MCU() {
  const { hovered, ref } = useHover();
  const { hovered: hovered1, ref: ref1 } = useHover();
  const { hovered: hovered2, ref: ref2 } = useHover();
  const { hovered: hovered3, ref: ref3 } = useHover();
  const { hovered: hovered4, ref: ref4 } = useHover();
  return (
    <main className={style.wrapper}>
      <Grid className={style.grid}>
        <Grid.Col md={11} lg={2.8}>
          <Card shadow="md" p="lg" radius="md" withBorder>
            <Card.Section>
              <ActiveLink activeClassName={'text-primary'} href='/pelayanan/HD'>
                <a ref={ref} className='relative block group'>
                  <Image className='drop-shadow-bject-cover transition ease-in delay-100 group-hover:scale-110 group-hover:opacity-5'
                    radius="md"
                    src={paketanak}
                    alt="Paket Sekolah"
                  />
                  {hovered && <label className='p-5 cursor-pointer absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-md font-medium text-[#1E90FF]'>
                    <AiFillTag className={style.tag} />
                    <tag className={style.label}>Paket Layanan MCU</tag>
                    <hr className='mt-1 mb-2' />
                    <label className='ml-[25px]'>Paket Sekolah</label>
                  </label>}
                </a>
              </ActiveLink>
            </Card.Section>
          </Card>
        </Grid.Col>

        <Grid.Col md={11} lg={2.8}>
          <Card shadow="md" p="lg" radius="md" withBorder>
            <Card.Section>
              <ActiveLink activeClassName={'text-primary'} href='/pelayanan/RawatJalan'>
                <a ref={ref1} className='relative block group'>
                  <Image className='object-cover transition ease-in delay-100  group-hover:scale-110 group-hover:opacity-5 text-cyan-600'
                    radius="md"
                    src={paketbabysister}
                    alt="Paket Baby Sister/ART"
                  />
                  {hovered1 && <label className='p-5 cursor-pointer absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-md font-medium text-[#1E90FF]'>
                    <AiFillTag className={style.tag} />
                    <tag className={style.label}>Paket Layanan MCU</tag>
                    <hr className='mt-1 mb-2' />
                    <label className='ml-[25px]'>Paket ART/Baby Sister</label>
                  </label>}
                </a>
              </ActiveLink>
            </Card.Section>
          </Card>
        </Grid.Col>

        <Grid.Col md={11} lg={2.8}>
          <Card shadow="md" p="lg" radius="md" withBorder>
            <Card.Section>
              <ActiveLink activeClassName={'text-primary'} href='/pelayanan/RawatInap'>
                <a ref={ref2} className='relative block group'>
                  <Image className='object-cover transition ease-in delay-100 group-hover:scale-110 group-hover:opacity-5'
                    radius="md"
                    src={sederhana}
                    alt="Paket Skrining Ginjal Sederhana"
                  />
                  {hovered2 && <label className='p-5 cursor-pointer absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-md font-medium text-[#1E90FF]'>
                    <AiFillTag className={style.tag} />
                    <tag className={style.label}>Paket Layanan MCU</tag>
                    <hr className='mt-1 mb-2' />
                    <label className='ml-[25px]'>Skrining Ginjal Sederhana</label>
                  </label>}
                </a>
              </ActiveLink>
            </Card.Section>
          </Card>
        </Grid.Col>

        <Grid.Col md={11} lg={2.8}>
          <Card shadow="md" p="lg" radius="md" withBorder>
            <Card.Section>
              <ActiveLink activeClassName={'text-primary'} href='/pelayanan/IGD'>
                <a ref={ref3} className='relative block group'>
                  <Image className='object-cover transition ease-in delay-100 group-hover:scale-110 group-hover:opacity-5'
                    radius="md"
                    src={rutin}
                    alt="Paket Skrining Ginjal Rutin"
                  />
                  {hovered3 && <label className='p-5 cursor-pointer absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-md font-medium text-[#1E90FF]'>
                    <AiFillTag className={style.tag} />
                    <tag className={style.label}>Paket Layanan MCU</tag>
                    <hr className='mt-1 mb-2' />
                    <label className='ml-[25px]'>Skrining Ginjal Rutin</label>
                  </label>}
                </a>
              </ActiveLink>
            </Card.Section>
          </Card>
        </Grid.Col>

        <Grid.Col md={6} lg={2.8}>
          <Card shadow="lg" radius="md" withBorder>
            <Card.Section>
              <a ref={ref4} className='relative block group'>
                <Image className='cursor-pointer drop-shadow-lg transition ease-in delay-100 group-hover:scale-110 group-hover:opacity-5'
                  radius="md"
                  src={vaksin}
                  alt="Vaksin"
                />
                {hovered4 && <label className='p-5 cursor-pointer absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-md font-medium text-[#1E90FF]' onClick={() => setOpened4(true)}>
                  <AiFillTag className={style.tag} />
                  <tag className={style.label}>Paket Layanan MCU</tag>
                  <hr className='mt-1 mb-2' />
                  <label className='absolute left-[46px]'>Pelayanan Vaksin</label>
                </label>}
              </a>
            </Card.Section>
          </Card>
        </Grid.Col>
      </Grid>

      <Grid className={style.grid}>
            <Grid.Col md={12} lg={3.8} xl={3}>
              <Card shadow="sm" p="lg" radius="md" withBorder
                className='transition ease-in-out delay-200 hover:scale-110 hover:shadow-2xl'>
                <Group position="apart" mt="md" mb="6vh">
                  <Text weight={600} size='lg'>BRONZE</Text>
                  <Badge color="orange" variant="light">
                    1
                  </Badge>
                </Group>

                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Konsultasi dokter MCU</label>
                  <Image
                    src={DokMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo1'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Hematologi rutin</label>
                  <Image
                    src={HematologiMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo2' />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2' />
                  <label className='px-16 mt-1'>Kolesterol total Trigliserida</label>
                  <Image
                    src={KolestrolMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo3'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16'>SGOT<br />
                    SGPT</label>
                  <Image
                    src={SGOTMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo4'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-3.5
                  right-0' />
                  <label className='px-16'>Kreatinin<br />
                    Asam Urat<br />
                    Urine Rutin</label>
                  <Image
                    src={kreatininMCU}
                    className='max-w-[38px] absolute z-10 right-5 top-3'
                    alt='logo5'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Gula Darah Puasa</label>
                  <Image
                    src={DarahMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo6'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Rontgen Thorax EKG</label>
                  <Image
                    src={RontgentMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo6'
                  />
                </div>

                <Button variant="light" color="blue" fullWidth mt="xl" radius="md">
                  Pilih Paket
                </Button>
              </Card>
            </Grid.Col>
            <Grid.Col md={12} lg={3.8} xl={3}>
              <Card shadow="sm" p="lg" radius="md" withBorder
                className='transition ease-in-out delay-200 hover:scale-110 hover:shadow-2xl'>
                <Group position="apart" mt="md" mb="6vh">
                  <Text weight={600} size='lg'>SILVER</Text>
                  <Badge color="gray" variant="light">
                    2
                  </Badge>
                </Group>

                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Konsultasi dokter MCU</label>
                  <Image
                    src={DokMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo1'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Hematologi rutin</label>
                  <Image
                    src={HematologiMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo2' />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2' />
                  <label className='px-16 mt-1'>Kolesterol total Trigliserida</label>
                  <Image
                    src={KolestrolMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo3'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16'>SGOT<br />
                    SGPT</label>
                  <Image
                    src={SGOTMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo4'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-3.5
                  right-0' />
                  <label className='px-16'>Kreatinin<br />
                    Asam Urat<br />
                    Urine Rutin</label>
                  <Image
                    src={kreatininMCU}
                    className='max-w-[38px] absolute z-10 right-5 top-3'
                    alt='logo5'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Gula Darah Puasa</label>
                  <Image
                    src={DarahMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo6'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Rontgen Thorax EKG</label>
                  <Image
                    src={RontgentMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo6'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Makan Pagi</label>
                  <Image
                    src={MakanMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo7'
                  />
                </div>

                <Button variant="light" color="blue" fullWidth mt="xl" radius="md">
                  Pilih Paket
                </Button>
              </Card>
            </Grid.Col>
            <Grid.Col md={12} lg={3.8} xl={3}>
              <Card shadow="sm" p="lg" radius="md" withBorder
                className='transition ease-in-out delay-200 hover:scale-110 hover:shadow-2xl'>
                <Group position="apart" mt="md" mb="6vh">
                  <Text weight={600} size='lg'>GOLD</Text>
                  <Badge color="yellow" variant="light">
                    3
                  </Badge>
                </Group>

                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Konsultasi dokter MCU</label>
                  <Image
                    src={DokMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo1'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Hematologi rutin</label>
                  <Image
                    src={HematologiMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo2' />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2' />
                  <label className='px-16 mt-1'>Kolesterol total Trigliserida</label>
                  <Image
                    src={KolestrolMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo3'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16'>SGOT<br />
                    SGPT</label>
                  <Image
                    src={SGOTMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo4'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-3.5
                  right-0' />
                  <label className='px-16'>Kreatinin<br />
                    Asam Urat<br />
                    Urine Rutin</label>
                  <Image
                    src={kreatininMCU}
                    className='max-w-[38px] absolute z-10 right-5 top-3'
                    alt='logo5'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Gula Darah Puasa</label>
                  <Image
                    src={DarahMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo6'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Rontgen Thorax EKG</label>
                  <Image
                    src={RontgentMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo6'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>USG Whole <i>abdomen</i></label>
                  <Image
                    src={USGMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo7'
                  />
                </div>
                <hr className='mb-3 mt-3' />
                <div className='flex text-lg font-thin relative'>
                  <FiCheckSquare className='text-green-600 text-2xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                  <label className='px-16 mt-3'>Makan Pagi</label>
                  <Image
                    src={MakanMCU}
                    className='max-w-[38px] absolute z-10 right-5'
                    alt='logo8'
                  />
                </div>

                <Button variant="light" color="blue" fullWidth mt="xl" radius="md">
                  Pilih Paket
                </Button>
              </Card>
            </Grid.Col>
          </Grid>
    </main >
  )
}