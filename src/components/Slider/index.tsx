
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import styles from './slider.module.scss'
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import Link from "next/link";
import { api } from "../../services/api";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

type BannerProps = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function Slide() {
  let [banner, setBanner] = useState<BannerProps[]>([])
  useEffect(() => {
    api.get("/continents")
      .then(function (response) {
        const data = response.data
        setBanner(data)
      })
  }, [])
  return (
    <Container
      mx="auto"
      maxW="1200px"
      px={{ base: "0", sm: "0", md: "4" }}
    >
      <Box direction={{ base: 'column', lg: 'row' }} >
        <Box h={{ base: "250px", sm: "250px", md: "450px" }}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            className={styles.swiper}
          >
            {banner.map((b) => (
              <SwiperSlide className={styles.swiper_slide} key={b.slug}>
                <Flex
                  w={'full'}
                  h={'full'}
                  position="absolute"
                  justify={'center'}
                  alignItems={'center'}
                  _before={{
                    content: `""`,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    bg: "rgba(28, 20, 1, 0.35)",
                  }}
                >
                  <Stack
                    position="absolute"
                  >
                    <Link href={b.slug}>
                      <a>
                        <Heading
                          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                          color={'gray.100'} mb={5}
                          data-swiper-parallax="-300"
                        >
                          {b.title}
                        </Heading>
                        <Text
                          fontSize={{ base: 'md', lg: 'lg' }}
                          color={'gray.200'}
                          data-swiper-parallax="-300"
                        >
                          {b.subtitle}
                        </Text>
                      </a>
                    </Link>
                  </Stack>
                  <Image src={b.image} alt={b.title} />
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Container>
  )
}