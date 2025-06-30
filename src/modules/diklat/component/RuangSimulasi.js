import { Carousel } from "@mantine/carousel";
import { Card, Group, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import style from '../assets/GalleryDiklat.module.css'
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import simulasi1 from "../assets/image/ruang simulasi 1.jpg"
import simulasi2 from "../assets/image/ruang simulasi 2.jpg"
import simulasi3 from "../assets/image/ruang simulasi 3.jpg"
import simulasi4 from "../assets/image/ruang simulasi 4.jpg"
import simulasi5 from "../assets/image/Diklat2.jpg"
import simulasi6 from "../assets/image/ruang simulasi 6.jpg"

export default function RuangSimulasi() {
  const { hovered, ref } = useHover();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref} className='relative block group'>
            <Image
              src={simulasi1}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='Ruang simulasi'
              width={505}
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
                src={simulasi1}
                width={400}
                height={500}
                priority
                alt="Ruang simulasi"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={simulasi2}
                width={800}
                height={500}
                priority
                alt="Ruang simulasi"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={simulasi3}
                width={800}
                height={500}
                priority
                alt="Ruang simulasi"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={simulasi4}
                width={800}
                height={500}
                priority
                alt="Ruang simulasi"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={simulasi5}
                width={800}
                height={500}
                priority
                alt="Ruang simulasi"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={simulasi6}
                width={800}
                height={500}
                priority
                alt="Ruang simulasi"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Ruang Simulasi</Text>
        </Group>
      </Card>
    </>
  )
}