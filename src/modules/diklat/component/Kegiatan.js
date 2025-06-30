import { Carousel } from "@mantine/carousel";
import { Card, Group, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import style from '../assets/GalleryDiklat.module.css'
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import kegiatan from "../assets/image/kegiatan ujian.jpg"
import kegiatan2 from "../assets/image/kegiatan ujian2.jpg"
import kegiatan3 from "../assets/image/kegiatan ujian3.jpg"
import kegiatan4 from "../assets/image/kegiatan simulasi.png"
import kegiatan5 from "../assets/image/kegiatan simulasi2.png"
import kegiatan6 from "../assets/image/kegiatan simulasi3.png"
import kegiatan7 from "../assets/image/kegiatan simulasi4.png"
import kegiatan8 from "../assets/image/kegiatan simulasi5.png"
import kegiatan9 from "../assets/image/kegiatan simulasi6.png"
import kegiatan10 from "../assets/image/HD.jpg"
import kegiatan11 from "../assets/image/HD2.jpg"
import kegiatan12 from "../assets/image/CAPD.jpg"
import kegiatan13 from "../assets/image/kegiatan ujian4.jpg"
import kegiatan14 from "../assets/image/kegiatan ujian5.jpg"

export default function Kegiatan() {
  const { hovered, ref } = useHover();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref} className='relative block group'>
            <Image
              src={kegiatan11}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='kegiatan'
              width={950}
              priority
            />
            {hovered && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' onClick={() => setOpened(true)} />}
          </a>
        </Card.Section>
        <Modal
          size='90%'
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <Carousel className={style.carousel} slideSize="70%" slideGap="md" >
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan}
                width={800}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan2}
                width={800}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan3}
                width={800}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan4}
                width={800}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan5}
                width={800}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan6}
                width={800}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan7}
                width={800}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan8}
                width={800}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan9}
                width={800}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan10}
                width={800}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan11}
                width={800}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan12}
                width={600}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan13}
                width={900}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kegiatan14}
                width={900}
                height={500}
                priority
                alt="kegiatan"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Kegiatan</Text>
        </Group>
      </Card>
    </>
  )
}