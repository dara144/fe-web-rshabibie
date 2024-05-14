import ActiveLink from '@component/ActiveLink'
import { Carousel } from '@mantine/carousel';
import { Button, Card, Group, Modal, Text } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillTag } from 'react-icons/ai';
import style from '../assets/News.module.css'

export default function NewsSmall() {
  const { hovered, ref } = useHover();
  const { hovered: hovered1, ref: ref1 } = useHover();
  const { hovered: hovered2, ref: ref2 } = useHover();
  const { hovered: hovered3, ref: ref3 } = useHover();
  const { hovered: hovered4, ref: ref4 } = useHover();
  const { hovered: hovered5, ref: ref5 } = useHover();
  const [opened, setOpened] = useState(false);
  const [opened1, setOpened1] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [opened3, setOpened3] = useState(false);
  const [opened4, setOpened4] = useState(false);
  const [opened5, setOpened5] = useState(false);
  return (
    <main className={style.wrapper}>
      <Carousel slideSize="70%" height={530} align='start' slideGap="md" withControls={false} loop>
        <Carousel.Slide>
          <Card shadow="lg" p="lg" radius="md" withBorder className='transition ease-in-out hover:scale-110 hover:shadow-2xl'>
            <Card.Section>
              <Image className='lg:max-w-sm object-cover hover'
                src="/tbcparu.jpg"
                loading='lazy'
                width={500}
                height={300}
                alt="TBC Pada Paru"
              />
            </Card.Section>

            <Group mt="md" mb="xs">
              <Text weight={500} className='items-center'>TBC Pada Paru-Paru</Text>
            </Group>

            <Text size="sm" color="dimmed">
              TBC (Tuberculosis) adalah penyakit menular langsung yang disebabkan oleh kuman TB (Mycobacterium Tuberculosis). Sebagian besar kuman TB [....]</Text>

            <ActiveLink activeClassName={'text-primary'} href='/informasi/tbcParu'>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Selengkapnya
              </Button>
            </ActiveLink>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="lg" p="lg" radius="md" withBorder className='transition ease-in-out hover:scale-110 hover:shadow-2xl'>
            <Card.Section>
              <Image className='lg:max-w-sm object-cover hover'
                src="/gagalginjal.jpg"
                loading='lazy'
                width={500}
                height={300}
                alt="Gagal GInjal"
              />
            </Card.Section>

            <Group mt="md" mb="xs">
              <Text weight={500}>Gagal Ginjal</Text>
            </Group>

            <Text size="sm" color="dimmed">
              Gagal ginjal adalah suatu keadaan dimana kedua gagal ginjal gagal menjalankan fungsinya. Pada tahap awal ginjal tidak menunjukkan gejala. [....]</Text>

            <ActiveLink activeClassName={'text-primary'} href='/informasi/gagalginjal'>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Selengkapnya
              </Button>
            </ActiveLink>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="lg" p="lg" radius="md" withBorder className='transition ease-in-out hover:scale-110 hover:shadow-2xl'>
            <Card.Section>
              <Image className='lg:max-w-sm object-cover hover'
                src="/ckd.png"
                loading='lazy'
                width={500}
                height={300}
                alt="Chronic Kidney Disease (CKD)"
              />
            </Card.Section>

            <Group mt="md" mb="xs">
              <Text weight={500}>Chronic Kidney Disease (CKD)</Text>
            </Group>

            <Text size="sm" color="dimmed">
              CKD atau Gagal ginjal kronik merupakan suatu kondisi dimana ginjal mengalami penurunan fungsi secara bertahap yang mengakibatkan [....]</Text>

            <ActiveLink activeClassName={'text-primary'} href='/informasi/ckd'>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Selengkapnya
              </Button>
            </ActiveLink>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="lg" p="lg" radius="md" withBorder className='transition ease-in-out hover:scale-110 hover:shadow-2xl'>
            <Card.Section>
              <Image className='lg:max-w-sm object-cover hover'
                src="/digihealth.png"
                loading='lazy'
                width={500}
                height={300}
                alt="DigiHealth RSKG"
              />
            </Card.Section>

            <Group mt="md" mb="xs">
              <Text weight={500}>DigiHealth RSKG</Text>
            </Group>

            <Text size="sm" color="dimmed">
              Download apk aplikasi mobile pasien https://ufile.io/08xu9.</Text>

            <ActiveLink activeClassName={'text-primary'} href='/informasi/digiHealthRSKG'>
              <Button className='mt-20'
                variant="light" color="blue" fullWidth radius="md">
                Selengkapnya
              </Button>
            </ActiveLink>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="lg" radius="md" withBorder>
            <Card.Section>
              <a ref={ref} className='relative block group'>
                <Image
                  src="/FHipertensi.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="Hipertensi"
                  className='cursor-pointer drop-shadow-lg transition ease-in delay-100 group-hover:scale-110 group-hover:opacity-5'
                  radius="md"
                />
                {hovered && <label className='p-5 cursor-pointer absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-md font-medium text-cyan-500' onClick={() => setOpened(true)}>
                  <AiFillTag className={style.tag} />
                  <tag className={style.label}>Informasi Kesehatan</tag>
                  <hr className='mt-1 mb-2' />
                  <label className='absolute left-[46px]'>Hipertensi</label>
                </label>}
              </a>
              <Modal
                size='md'
                opened={opened}
                onClose={() => setOpened(false)}
              >
                <Image
                  src="/FHipertensi.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="Hipertensi"
                />
              </Modal>
            </Card.Section>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="lg" radius="md" withBorder>
            <Card.Section>
              <a ref={ref1} className='relative block group'>
                <Image
                  className='cursor-pointer drop-shadow-lg transition ease-in delay-100 group-hover:scale-110 group-hover:opacity-5'
                  radius="md"
                  src="/Ftbc.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="tbc"
                />
                {hovered1 && <label className='p-5 cursor-pointer absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-md font-medium text-cyan-500' onClick={() => setOpened1(true)}>
                  <AiFillTag className={style.tag} />
                  <tag className={style.label}>Informasi Kesehatan</tag>
                  <hr className='mt-1 mb-2' />
                  <label className='absolute left-[46px]'>Tuberculosis (TBC)</label>
                </label>}
              </a>
              <Modal
                size='md'
                opened={opened1}
                onClose={() => setOpened1(false)}
              >
                <Image
                  src="/Ftbc.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="tbc"
                />
              </Modal>
            </Card.Section>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="lg" radius="md" withBorder>
            <Card.Section>
              <a ref={ref2} className='relative block group'>
                <Image
                  className='cursor-pointer drop-shadow-lg transition ease-in delay-100 group-hover:scale-110 group-hover:opacity-5'
                  radius="md"
                  src="/Fkolestrol.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="kolesterol"
                />
                {hovered2 && <label className='p-5 cursor-pointer absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-md font-medium text-cyan-500' onClick={() => setOpened2(true)}>
                  <AiFillTag className={style.tag} />
                  <tag className={style.label}>Informasi Kesehatan</tag>
                  <hr className='mt-1 mb-2' />
                  <label className='absolute left-[46px]'>Kolesterol</label>
                </label>}
              </a>
              <Modal
                size='md'
                opened={opened2}
                onClose={() => setOpened2(false)}
              >
                <Image
                  src="/Fkolestrol.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="kolesterol"
                />
              </Modal>
            </Card.Section>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="lg" radius="md" withBorder>
            <Card.Section>
              <a ref={ref3} className='relative block group'>
                <Image
                  className='cursor-pointer drop-shadow-lg transition ease-in delay-100 group-hover:scale-110 group-hover:opacity-5'
                  radius="md"
                  src="/FCegahStroke.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="cegah stroke"
                />
                {hovered3 && <label className='p-5 cursor-pointer absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-md font-medium text-cyan-500' onClick={() => setOpened3(true)}>
                  <AiFillTag className={style.tag} />
                  <tag className={style.label}>Informasi Kesehatan</tag>
                  <hr className='mt-1 mb-2' />
                  <label className='absolute left-[46px]'>Cegah Stroke</label>
                </label>}
              </a>
              <Modal
                size='md'
                opened={opened3}
                onClose={() => setOpened3(false)}
              >
                <Image
                  src="/FCegahStroke.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="cegah stroke"
                />
              </Modal>
            </Card.Section>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="lg" radius="md" withBorder>
            <Card.Section>
              <a ref={ref4} className='relative block group'>
                <Image
                  className='cursor-pointer drop-shadow-lg transition ease-in delay-100 group-hover:scale-110 group-hover:opacity-5'
                  radius="md"
                  src="/FPangan.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="pangan"
                />
                {hovered4 && <label className='p-5 cursor-pointer absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-md font-medium text-cyan-500' onClick={() => setOpened4(true)}>
                  <AiFillTag className={style.tag} />
                  <tag className={style.label}>Informasi Kesehatan</tag>
                  <hr className='mt-1 mb-2' />
                  <label className='absolute left-[46px]'>Pangan Fungsional</label>
                </label>}
              </a>
              <Modal
                size='md'
                opened={opened4}
                onClose={() => setOpened4(false)}
              >
                <Image
                  src="/FPangan.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="pangan"
                />
              </Modal>
            </Card.Section>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="lg" radius="md" withBorder>
            <Card.Section>
              <a ref={ref5} className='relative block group'>
                <Image
                  className='cursor-pointer drop-shadow-lg transition ease-in delay-100 group-hover:scale-110 group-hover:opacity-5'
                  radius="md"
                  src="/FCegahAnemia.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="cegah anemia"
                />
                {hovered5 && <label className='p-5 cursor-pointer absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-md font-medium text-cyan-500' onClick={() => setOpened5(true)}>
                  <AiFillTag className={style.tag} />
                  <tag className={style.label}>Informasi Kesehatan</tag>
                  <hr className='mt-1 mb-2' />
                  <label className='absolute left-[46px]'>Cegah Anemia</label>
                </label>}
              </a>
              <Modal
                size='md'
                opened={opened5}
                onClose={() => setOpened5(false)}
              >
                <Image
                  src="/FCegahAnemia.jpg"
                  width={500}
                  height={800}
                  loading='lazy'
                  alt="cegah anemia"
                />
              </Modal>
            </Card.Section>
          </Card>
        </Carousel.Slide>
      </Carousel>
    </main>
  )
}