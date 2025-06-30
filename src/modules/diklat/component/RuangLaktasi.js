import { Carousel } from "@mantine/carousel";
import { Card, Group, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import style from '../assets/GalleryDiklat.module.css'
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import laktasi from "../assets/image/laktasi.png"
import laktasi2 from "../assets/image/laktasi2.png"
import laktasi3 from "../assets/image/laktasi3.png"
import laktasi4 from "../assets/image/laktasi4.png"

export default function RuangLaktasi() {
  const { hovered, ref } = useHover();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref} className='relative block group'>
            <Image
              src={laktasi2}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='Ruang Laktasi'
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
                src={laktasi2}
                width={600}
                height={500}
                priority
                alt="Ruang Laktasi"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={laktasi}
                width={600}
                height={500}
                priority
                alt="Ruang Laktasi"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={laktasi3}
                width={600}
                height={500}
                loading='lazy'
                alt="Ruang Laktasi"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={laktasi4}
                width={600}
                height={500}
                loading='lazy'
                alt="Ruang Laktasi"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Ruang Laktasi</Text>
        </Group>
      </Card>
    </>
  )
}