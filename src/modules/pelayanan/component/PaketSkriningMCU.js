import { Button, Card, Grid, Title } from "@mantine/core";
import Image from "next/future/image";
import sederhana from '../assets/image/SkriningSederhana.jpg'
import rutin from '../assets/image/SkriningRutin.jpg'
import style from '../assets/MCU.module.css'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

export default function PaketSkriningMCU() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  return (
    <>
      <div className="overflow-clip">
        <Grid className="place-content-between">
          <Grid.Col md={4} lg={5} xl={5}>
            <Card
              withBorder
              className='mt-12 rounded-xl shadow-xl'>
              <Card.Section className='bg-[#53A8FB] p-2 mb-5 rounded-lg'>
                <Title className='text-lg font-normal text-white text-center items-center'>Skrining Ginjal Sederhana</Title>
              </Card.Section>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Gula darah sewaktu</div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Kreatinin</div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Urine rutin</div>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Pilih Paket
              </Button>
            </Card>
            <br />
          </Grid.Col>
          <Grid.Col md={12} lg={5} xl={4.5}>
            <div
              ref={myRef}
            >
              <Image
                src={sederhana}
                className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                alt='Paket Sekolah' />
            </div>
          </Grid.Col>

          <Grid.Col md={4} lg={5} xl={5}>
            <Card
              withBorder
              className='rounded-xl shadow-xl mt-7'>
              <Card.Section className='bg-[#53A8FB] p-2 mb-5 rounded-lg'>
                <Title className='text-lg font-normal text-white text-center items-center'>Skrining Ginjal Rutin</Title>
              </Card.Section>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Hematologi rutin
              </div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Gula darah sewaktu</div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Kreatinin</div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Ureum</div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Urine rutin</div>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Pilih Paket
              </Button>
            </Card>
            <br />
          </Grid.Col>
          <Grid.Col md={4} lg={5} xl={4.5}>
            <div
              ref={myRef1}
            >
              <Image
                src={rutin}
                className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                alt='Paket Sekolah' />
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </>
  )
}