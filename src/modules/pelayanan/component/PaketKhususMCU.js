import { Button, Card, Grid } from "@mantine/core";
import Image from "next/future/image";
import Anak from '../assets/image/PaketAnak.png'
import BabySister from '../assets/image/PaketBabySister.png'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import style from '../assets/MCU.module.css'
import { useInView } from "react-intersection-observer";

export default function PaketKhususMCU() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()

  return (
    <>
      <div className="overflow-clip">
        <Grid className='place-content-between'>
          <Grid.Col md={12} lg={5.5} xl={5}>
            <div
              ref={myRef}
            >
              <Image
                src={Anak}
                className={`${style.image} ${myImageIsVisible ? style.animateShowImage : style.animateHiddenImage}`}
                alt='Paket Sekolah' />
            </div>
          </Grid.Col>
          <Grid.Col md={4} lg={5} xl={4.5}>
            <Card
              withBorder
              className='lg:mt-20 rounded-xl shadow-xl'>
              <Card.Section className='bg-[#53A8FB] p-2 mb-5 rounded-lg'>
                <p className='text-lg font-normal text-white text-center'>
                  Paket Sekolah</p>
              </Card.Section>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600  rounded-full text-xl absolute z-10 bottom-1 left-9' />Darah rutin
              </div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600  rounded-full text-xl absolute z-10 bottom-1 left-9' />Urine rutin
              </div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600  rounded-full text-xl absolute z-10 bottom-1 left-9' />Rontgent thorax
              </div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600  rounded-full text-xl absolute z-10 bottom-1 left-9' />Pemeriksaan bebas narkotika
              </div>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Pilih Paket
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
        <Grid className='place-content-between'>
          <Grid.Col md={12} lg={4.5} xl={3}>
            <div
              className="sm:ml-[10vw] lg:ml-2"
              ref={myRef1}
            >
              <Image
                src={BabySister}
                className={`${style.image} ${myImageIsVisible ? style.animateShowImage : style.animateHiddenImage}`}
                alt='Paket Baby Sister/ART' />
            </div>

          </Grid.Col>
          <Grid.Col md={4} lg={5} xl={4.5}>
            <Card
              withBorder
              className='mt-10 lg:mt-28 rounded-xl shadow-xl'>
              <Card.Section className='bg-[#1E90FF] p-2 mb-5 rounded-lg'>
                <p className='text-lg font-normal text-white text-center'>
                  Paket ART/Baby Sister</p>
              </Card.Section>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Darah rutin
              </div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Urine rutin
              </div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Rontgent thorax
              </div>
              <div className='flex text-md font-thin mt-2 px-16 relative'>
                <IoCheckmarkCircleOutline className='text-green-600 rounded-full text-xl absolute z-10 bottom-1 left-9' />Swab antigen SARS CoV-2
              </div>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Pilih Paket
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
        <br />
        <br />
      </div>
    </>
  )
}