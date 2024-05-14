import ActiveLink from '@component/ActiveLink'
import { Carousel } from '@mantine/carousel'
import { Button, Card, Group, Text } from '@mantine/core'
import Image from 'next/future/image'
import nytuti from '../assets/image/Ny.-Tuti-Marini-Puspowardojo.jpg'
import nyjohana from '../assets/image/Ny.-Johana-Sunarti-Nasution.jpg'
import nysri from '../assets/image/Ny.-Sri-Soedarsono.jpg'
import profenday from '../assets/image/Prof.Enday Sukandar.jpg'
import profrully from '../assets/image/Prof.Rully.jpg'

export default function CardBio() {

  return (
    <>
      <Carousel
        withIndicators
        height={600}
        slidesToScroll={3}
        slideSize="33.333333%"
        slideGap='xl'
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%', slideGap: 'xl' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
        loop
        align="start"
      >
        <Carousel.Slide>
          <Card shadow="lg" p="lg" radius="md" withBorder className='transition ease-in-out delay-200 hover:scale-110 hover:shadow-2xl'>
            <Card.Section>
              <Image className='object-cover hover'
                src={nytuti}
                weight={300}
                alt="Ny.-Tuti-Marini-Puspowardojo"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Ny.Tuti Marini Puspowardojo</Text>
            </Group>

            <Text size="sm" color="dimmed">
              Ny.  R.A. Tuti Marini Puspowardojorini  Puspowardojo  adalah  figur  seorang ibu  Indonesia  yang  kerja  keras  dan  teladannya  sebagai  seorang ibu  rumah  tangga  patut  menjadi  inspirasi.[....]</Text>

            <ActiveLink activeClassName={'text-primary'} href='/profil/NyTutiMartini'>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Selengkapnya
              </Button>
            </ActiveLink>
          </Card>
        </Carousel.Slide>

        <Carousel.Slide>
          <Card shadow="lg" p="lg" radius="md" withBorder className='transition ease-in-out delay-200 hover:scale-110 hover:shadow-2xl'>
            <Card.Section>
              <Image className='object-cover hover'
                src={nysri}
                weight={300}
                alt="Ny.-Sri-Soedarsono"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Ny. Sri Soedarsono</Text>
            </Group>

            <Text size="sm" color="dimmed">
              Sri Soedarsono dialah Ny. Sri Soedarsonoirkan pada hari Minggu 8 Oktober 1938 di Pare-Pare, Sulawesi Selatan. Oleh orang tuanya, Alwi Abdul Djalil Habibie dan R.A. Tuti Marini Puspowardojo [....]</Text>

            <ActiveLink activeClassName={'text-primary'} href='/profil/NySriSoedarsono'>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Selengkapnya
              </Button>
            </ActiveLink>
          </Card>
        </Carousel.Slide>

        <Carousel.Slide>
          <Card shadow="lg" p="lg" radius="md" withBorder className='transition ease-in-out delay-200 hover:scale-110 hover:shadow-2xl'>
            <Card.Section>
              <Image className='object-cover hover'
                src={profrully}
                weight={300}
                alt="Prof. Dr. Rully MA Roesli, Sp.PD-KGH"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Prof. Dr. Rully MA Roesli, Sp.PD-KGH</Text>
            </Group>

            <Text size="sm" color="dimmed">
              Ada  saat  ketika  Prof. Dr. Rullyalam  profesinya  sebagai  seorang  dokter, Dr.  Rully  Marsis  Amirullah  Roesli  memainkan  peran  sebagai  orang  yang  menentukan  hidup  matinya [....]</Text>

            <ActiveLink activeClassName={'text-primary'} href='/profil/ProfRully'>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Selengkapnya
              </Button>
            </ActiveLink>
          </Card>
        </Carousel.Slide>

        <Carousel.Slide>
          <Card shadow="lg" p="lg" radius="md" withBorder className='transition ease-in-out delay-200 hover:scale-110 hover:shadow-2xl'>
            <Card.Section>
              <Image className='object-cover hover'
                src={nyjohana}
                height={320}
                weight={300}
                alt="Ny. Johana Sunarti Nasution"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Ny. Johana Sunarti Nasution </Text>
            </Group>

            <Text size="sm" color="dimmed">
              R.A. Tuti Puspowardojo adalah seorang priyayi asal Purworejo, Jawa Tengah. Sedangkan Alwi Abdul Djalil Habibie seorang lelaki muslim asal Gorontalo yang dikenal pria taat beragama. Karenanya, [....]</Text>

            <ActiveLink activeClassName={'text-primary'} href='/profil/NyJohana'>
              <Button className='mt-5'
                variant="light" color="blue" fullWidth radius="md">
                Selengkapnya
              </Button>
            </ActiveLink>
          </Card>
        </Carousel.Slide>

        <Carousel.Slide>
          <Card shadow="lg" p="lg" radius="md" withBorder className='transition ease-in-out delay-200 hover:scale-110 hover:shadow-2xl'>
            <Card.Section>
              <Image className='object-cover hover'
                src={profenday}
                weight={300}
                height={320}
                alt="Prof. Dr. H. Enday Sukandar, Sp.PD-KGH"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Prof. Dr. H. Enday Sukandar, Sp.PD-KGH</Text>
            </Group>

            <Text size="sm" color="dimmed">
              Prof. Enday merupakan seorang dokter senior di kalangan kedokteran Universitas Padjadjaran. Selain seorang guru besar, beliau juga sering melontarkan ide-ide serta penemuan beliau ke dalam sebuah buku yang sering dijadikan sebagai pedoman ilmu kedokteran khususnya di bidang Ginjal dan Hipertensi.</Text>

            <ActiveLink activeClassName={'text-primary'} href='/profil/ProfEnday'>
              <Button className='mt-5'
                variant="light" color="blue" fullWidth radius="md">
                Selengkapnya
              </Button>
            </ActiveLink>
          </Card>
        </Carousel.Slide>
      </Carousel>
    </>
  )
}
