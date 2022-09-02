import React from "react";
import {
  chakra,
  Box,
  Divider,
  Center,
  Stack,
  Container,
  useBreakpointValue
} from "@chakra-ui/react";
import { Mobile } from "./travelTypesMobile";
import { TravelTypes } from "./travelTypes";

export function Features() {

  const isFeatures = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Container mx="auto" maxW="1200px">
      <Box direction={{ base: 'column', lg: 'row' }}>
        <Stack
          flex={1}
          pt={{ base: "10", md: "14", lg: "24" }}
          pb={{ base: "8", sm: "10" }}
          w="auto"
          justifyContent="center"
          alignItems="center"
        >
          {isFeatures ?
            <Mobile />
            :
            <TravelTypes />
          }
          <Center py={{ base: "35px", sm: "45px" }}>
            <Divider w={'90px'} borderBottomWidth={2} bg={"gray.300"} />
          </Center>
          <Box textAlign={"center"}>
            <chakra.h3
              fontSize={{ base: "20px", sm: "20px", md: "36px", lg: "36px" }}
              // fontSize={'36px'}
              fontWeight="500"
              lineHeight={{ base: "30px", sm: "30px", md: "54px", lg: "54px" }}
              color={"gray.300"}
            >
              <chakra.span display="block">Vamos nessa?</chakra.span>
              <chakra.span
                display="block"
              >
                Então escolha seu continente
              </chakra.span>
            </chakra.h3>
          </Box>
        </Stack>
      </Box >
    </Container >
  )
}