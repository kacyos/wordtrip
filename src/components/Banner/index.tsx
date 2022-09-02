import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Container,
} from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      w={'full'}
      backgroundImage={'/images/background.png'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Container mx="auto" maxW="1200px">
        <Box direction={{ base: 'column', lg: 'row' }}>
          <Flex
            py={{ base: "10", sm: "16" }}
            mx="auto"
          >
            <Box
              w={{ base: "full", xl: 10 / 12 }}
              mx="auto"
              pr={{ md: 20 }}
            >
              <chakra.h2
                fontSize={{ base: "20px", sm: "36px" }}
                fontWeight="500"
                lineHeight={{ base: "30px", sm: "54px" }}
                color={"gray.100"}
                mb={6}
              >
                <chakra.span display="block">5 Continentes,</chakra.span>
                <chakra.span
                  display="block"
                  color={"gray.100"}
                >
                  infinitas possibilidades.
                </chakra.span>
              </chakra.h2>
              <chakra.p
                fontSize={{ base: "14px", sm: "20px" }}
                color={"gray.200"}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </chakra.p>
            </Box>
            <Box w={{ base: "full", md: 9 / 12 }} mx="auto"
              d={[
                "none",
                "none",
                "none",
                "block",
                "block",
              ]}
            >
              <Image
                alt={'Login Image'}
                objectFit={'cover'}
                src={'/images/airplane.png'}
                mb={'-6.4rem'}
                float={'right'}
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Flex>
  )
}