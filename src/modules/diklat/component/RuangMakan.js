import { Carousel } from "@mantine/carousel";
import { Card, Group, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import style from '../assets/GalleryDiklat.module.css'
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import makan from "../assets/image/ruang makan1.jpg"
import makan2 from "../assets/image/ruang makan2.jpg"
import makan3 from "../assets/image/ruang makan3.png"

export default function RuangMakan() {
  const { hovered, ref } = useHover();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref} className='relative block group'>
            <Image
              src={makan2}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='Ruang Laktasi'
              width={1350}
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
                src={makan2}
                width={600}
                height={500}
                priority
                alt="Ruang Makan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={makan}
                width={600}
                height={500}
                priority
                alt="Ruang Makan"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={makan3}
                width={600}
                height={500}
                loading='lazy'
                alt="Ruang Makan"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Ruang Makan</Text>
        </Group>
      </Card>
    </>
  )
}