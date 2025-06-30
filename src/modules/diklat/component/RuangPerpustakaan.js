import { Carousel } from "@mantine/carousel";
import { Card, Group, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import style from '../assets/GalleryDiklat.module.css'
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import perpus from "../assets/image/ruang perpus1.jpg"
import perpus2 from "../assets/image/ruang perpus2.jpg"
import perpus3 from "../assets/image/ruang perpus3.jpg"
import perpus4 from "../assets/image/ruang perpus4.jpg"
import perpus5 from "../assets/image/ruang perpus.jpg"

export default function RuangPerpustakaan() {
  const { hovered, ref } = useHover();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref} className='relative block group'>
            <Image
              src={perpus4}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='Ruang Laktasi'
              height={455}
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
                src={perpus2}
                width={600}
                height={500}
                priority
                alt="Ruang perpus"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={perpus3}
                width={600}
                height={500}
                priority
                alt="Ruang perpus"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={perpus4}
                width={800}
                height={500}
                loading='lazy'
                alt="Ruang perpus"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={perpus5}
                width={600}
                height={500}
                loading='lazy'
                alt="Ruang perpus"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={perpus}
                width={600}
                height={500}
                loading='lazy'
                alt="Ruang perpus"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Ruang Perpustakaan</Text>
        </Group>
      </Card>
    </>
  )
}