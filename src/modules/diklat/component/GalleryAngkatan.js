import { Carousel } from "@mantine/carousel";
import { Card, Group, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import style from '../assets/GalleryDiklat.module.css'
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import angkatan from "../assets/image/Peserta Diklat.jpg"
import angkatan2 from "../assets/image/fotokegiatan.png"
import angkatan3 from "../assets/image/Peserta Diklat2.jpg"
import angkatan4 from "../assets/image/Peserta Diklat3.jpg"
import angkatan5 from "../assets/image/Peserta Diklat4.jpg"
import angkatan6 from "../assets/image/Peserta Diklat5.jpg"
import angkatan7 from "../assets/image/Peserta Diklat6.jpg"

export default function GalleryAngkatan() {
  const { hovered, ref } = useHover();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref} className='relative block group'>
            <Image
              src={angkatan7}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='Ruang angkatan'
              width={730}
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
                src={angkatan}
                width={800}
                height={500}
                priority
                alt="Ruang angkatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={angkatan2}
                width={800}
                height={500}
                priority
                alt="Ruang angkatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={angkatan3}
                width={800}
                height={500}
                priority
                alt="Ruang angkatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={angkatan4}
                width={800}
                height={500}
                priority
                alt="Ruang angkatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={angkatan5}
                width={800}
                height={500}
                priority
                alt="Ruang angkatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={angkatan6}
                width={800}
                height={500}
                priority
                alt="Ruang angkatan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={angkatan7}
                width={800}
                height={500}
                priority
                alt="Ruang angkatan"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Angkatan</Text>
        </Group>
      </Card>
    </>
  )
}