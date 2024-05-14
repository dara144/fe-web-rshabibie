import { Badge, Button, Card, Grid, Group, Text } from "@mantine/core";
import Image from "next/future/image";
import DokMCU from '../assets/image/DokMCU.png'
import HematologiMCU from '../assets/image/HematologiMCU.png'
import KolestrolMCU from '../assets/image/KolestrolMCU.png'
import SGOTMCU from '../assets/image/SGOTMCU.png'
import KreatininMCU from '../assets/image/KreatininMCU.png'
import DarahMCU from '../assets/image/DarahMCU.png'
import RontgenMCU from '../assets/image/RontgenMCU.png'
import USGMCU from '../assets/image/USGMCU.png'
import MakanMCU from '../assets/image/MakanMCU.png'
import { FiCheckSquare } from "react-icons/fi";

export default function PaketMCU() {
  return (
    <>
      <Grid className='place-content-center gap-5'>
        <Grid.Col md={12} lg={3.8} xl={3}>
          <Card shadow="sm" p="lg" radius="md" withBorder
            className='transition ease-in-out hover:scale-110 hover:shadow-2xl'>
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
                src={KreatininMCU}
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
                src={RontgenMCU}
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
            className='transition ease-in-out hover:scale-110 hover:shadow-2xl'>
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
                src={KreatininMCU}
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
                src={RontgenMCU}
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
            className='transition ease-in-out hover:scale-110 hover:shadow-2xl'>
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
                src={KreatininMCU}
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
                src={RontgenMCU}
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
    </>
  )
}