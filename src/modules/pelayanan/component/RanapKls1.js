import { Carousel } from "@mantine/carousel";
import { Badge, Card, Group, List, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import style from '../assets/RawatInap.module.css'
import Image from "next/image";
import RanapKelas1 from '../assets/image/RanapKls1.jpg'
import kls1bag1 from '../assets/image/kls1bag1.jpg'
import kls1bag2 from '../assets/image/kls1bag2.jpg'
import kls1bag3 from '../assets/image/kls1bag3.jpg'
import kls1bag4 from '../assets/image/kls1bag4.jpg'
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function Ranapkls1() {
  const { hovered: hovered1, ref: ref1 } = useHover();
  const [opened1, setOpened1] = useState(false);
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref1} className='relative block group'>
            <Image
              src={RanapKelas1}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='ranap kls1'
              priority
            />
            {hovered1 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' onClick={() => setOpened1(true)} />}
          </a>
        </Card.Section>
        <Modal
          size='90%'
          opened={opened1}
          onClose={() => setOpened1(false)}
        >
          <Carousel className={style.carousel} slideSize="70%" slideGap="md" >
            <Carousel.Slide>
              <Image className={style.image}
                src={kls1bag1}
                width={800}
                height={500}
                priority
                alt="Rawat Inap Kelas I"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kls1bag2}
                width={800}
                height={500}
                loading='lazy'
                alt="Rawat Inap Kelas I"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kls1bag3}
                width={800}
                height={500}
                loading='lazy'
                alt="Rawat Inap Kelas I"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kls1bag4}
                width={800}
                height={500}
                loading='lazy'
                alt="Rawat Inap Kelas I"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Rawat Inap Kelas I</Text>
          <Badge color="grape" variant="light">
            Kelas I
          </Badge>
        </Group>

        <Text className='text-md mt-3 font-[350] text-[#4B3F3F]'>
          <List className='list-disc text-md mt-3 mb-6 font-[350] text-[#4B3F3F]' withPadding>
            <List.Item>2 tempat tidur</List.Item>
            <List.Item>AC, TV Cable</List.Item>
            <List.Item>Kamar mandi</List.Item>
          </List>
        </Text>
      </Card>
    </>
  )
}