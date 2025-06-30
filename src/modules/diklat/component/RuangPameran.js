import { Carousel } from "@mantine/carousel";
import { Card, Group, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import style from '../assets/GalleryDiklat.module.css'
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import pameran from "../assets/image/ruang pameran.jpg"
import pameran1 from "../assets/image/ruang pameran1.jpg"
import pameran2 from "../assets/image/ruang pameran2.jpg"

export default function RuangPameran() {
  const { hovered, ref } = useHover();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref} className='relative block group'>
            <Image
              src={pameran}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='Ruang Laktasi'
              height={1510}
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
                src={pameran1}
                width={600}
                height={500}
                priority
                alt="Ruang pameran"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={pameran2}
                width={600}
                height={500}
                priority
                alt="Ruang pameran"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={pameran}
                width={800}
                height={500}
                loading='lazy'
                alt="Ruang pameran"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Ruang Pameran</Text>
        </Group>
      </Card>
    </>
  )
}