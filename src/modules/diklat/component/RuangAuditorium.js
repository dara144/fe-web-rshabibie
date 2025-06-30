import { Carousel } from "@mantine/carousel";
import { Card, Group, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import style from '../assets/GalleryDiklat.module.css'
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import auditorium from "../assets/image/auditorium.jpg"
import auditorium2 from "../assets/image/auditorium2.jpg"
import auditorium3 from "../assets/image/auditorium3.jpg"
import auditorium4 from "../assets/image/auditorium4.jpg"

export default function RuangAuditorium() {
  const { hovered, ref } = useHover();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref} className='relative block group'>
            <Image
              src={auditorium}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='Ruang auditorium'
              width={1060}
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
                src={auditorium}
                width={600}
                height={500}
                priority
                alt="Ruang auditorium"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={auditorium2}
                width={600}
                height={500}
                priority
                alt="Ruang auditorium"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={auditorium3}
                width={600}
                height={500}
                priority
                alt="Ruang auditorium"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={auditorium4}
                width={600}
                height={500}
                priority
                alt="Ruang auditorium"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Ruang Auditorium</Text>
        </Group>
      </Card>
    </>
  )
}