import { Carousel } from "@mantine/carousel";
import { Badge, Card, Group, List, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import style from '../assets/RawatInap.module.css'
import Image from "next/image";
import RanapVIP from '../assets/image/RanapVIP.jpg'
import RanapVIP1 from '../assets/image/vip1.jpg'
import RanapVIP2 from '../assets/image/vip2.jpg'
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

export default function VIP() {
  const { hovered, ref } = useHover();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref} className='relative block group'>
            <Image
              src={RanapVIP}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='ranap vip'
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
                src={RanapVIP}
                width={800}
                height={500}
                priority
                alt="Rawat Inap VIP"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={RanapVIP1}
                width={800}
                height={500}
                loading='lazy'
                alt="Rawat Inap VIP"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={RanapVIP2}
                width={800}
                height={500}
                loading='lazy'
                alt="Rawat Inap VIP"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Rawat Inap Kelas VIP</Text>
          <Badge color="yellow" variant="light">
            VIP
          </Badge>
        </Group>
        <Text className='text-md mt-3 font-[350] text-[#4B3F3F]'>
          <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
            <List.Item>1 tempat tidur.</List.Item>
            <List.Item>AC, TV Cable, Kulkas, Dispenser</List.Item>
            <List.Item>Kamar mandi</List.Item>
          </List>
          <br />
          Tarif 	Rp 800.000,-
        </Text>
      </Card>
    </>
  )
}