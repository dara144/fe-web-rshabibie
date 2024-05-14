import { Carousel } from "@mantine/carousel";
import { Badge, Card, Group, List, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import style from '../assets/RawatInap.module.css'
import Image from "next/image";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import RanapKelas3 from '../assets/image/RanapKls3.jpg'
import kls3bag1 from '../assets/image/ksl3bag1.jpg'
import kls3bag2 from '../assets/image/kls3bag2.jpg'
export default function RanapKls3() {
  const { hovered: hovered3, ref: ref3 } = useHover();
  const [opened3, setOpened3] = useState(false);
  return(
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <a ref={ref3} className='relative block group'>
            <Image
              src={RanapKelas3}
              className='rounded-md drop-shadow-lg object-cover transition ease-in delay-75 group-hover:scale-110 group-hover:opacity-5'
              alt='ranap kls3'
              priority />
            {hovered3 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' onClick={() => setOpened3(true)} />}
          </a>
        </Card.Section>
        <Modal
          size='90%'
          opened={opened3}
          onClose={() => setOpened3(false)}
        >
          <Carousel className={style.carousel} slideSize="70%" slideGap="md" >
            <Carousel.Slide>
              <Image className={style.image}
                src={RanapKelas3}
                width={800}
                height={500}
                priority
                alt="Rawat Inap Kelas III"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kls3bag1}
                width={800}
                height={500}
                loading='lazy'
                alt="Rawat Inap Kelas III"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={style.image}
                src={kls3bag2}
                width={800}
                height={500}
                loading='lazy'
                alt="Rawat Inap Kelas III"
              />
            </Carousel.Slide>
          </Carousel>
        </Modal>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Rawat Inap Kelas III</Text>
          <Badge color="green" variant="light">
            Kelas III
          </Badge>
        </Group>

        <Text className='text-md mt-3 font-[350] text-[#4B3F3F]'>
          <List className='list-disc text-md mt-3 mb-6 font-[350] text-[#4B3F3F]' withPadding>
            <List.Item>6 tempat tidur</List.Item>
            <List.Item>AC, TV</List.Item>
            <List.Item>Kamar mandi</List.Item>
          </List>
          <br />
          Tarif 	Rp 250.000,-
        </Text>
      </Card>
    </>
  )
}