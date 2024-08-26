import { Carousel } from "@mantine/carousel";
import { Badge, Card, Group, List, Modal, Text } from "@mantine/core";
import style from '../assets/RawatInap.module.css'
import Image from "next/image";
import RanapKelas2 from '../assets/image/RanapKls2.jpg'
import kls2bag1 from '../assets/image/kls2bag1.jpg'
import { BiSearch } from "react-icons/bi";
import { useHover } from "@mantine/hooks";
import { useState } from "react";

export default function RanapKls2() {
  const { hovered: hovered2, ref: ref2 } = useHover();
  const [opened2, setOpened2] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref2} className='relative block group'>
            <Image
              src={RanapKelas2}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='ranap kls2'
              priority
            />
            {hovered2 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' onClick={() => setOpened2(true)} />}
          </a>
        </Card.Section>
        <Modal
          size='90%'
          opened={opened2}
          onClose={() => setOpened2(false)}
        >
          <Carousel className={style.carousel} slideSize="70%" slideGap="md" >
            <Carousel.Slide>
              <Image className={style.image}
                src={RanapKelas2}
                width={800}
                height={500}
                priority
                alt="Rawat Inap Kelas II"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kls2bag1}
                width={800}
                height={500}
                loading='lazy'
                alt="Rawat Inap Kelas II"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Rawat Inap Kelas II</Text>
          <Badge color="blue" variant="light">
            Kelas II
          </Badge>
        </Group>

        <Text className='text-md mt-3 font-[350] text-[#4B3F3F]'>
          <List className='list-disc text-md mt-3 mb-6 font-[350] text-[#4B3F3F]' withPadding>
            <List.Item>3 tempat tidur</List.Item>
            <List.Item>AC, TV Cable</List.Item>
            <List.Item>Kamar mandi</List.Item>
          </List>
        </Text>
      </Card>
    </>
  )
}