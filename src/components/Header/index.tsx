import React from "react";

import {
  chakra,
  Flex,
  HStack,
  Link,
  Image,
  Center,
  Box,
} from "@chakra-ui/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ActiveLink from "./link";

export default function header() {

  return (
    <chakra.header
      w="full"
      overflowY="hidden"
    >
      <chakra.div h="4.5rem" mx="auto" maxW="1200px">
        <Flex w="full" h="full" px="6" align="center">
          <Box position={"absolute"}>
            <ActiveLink />
          </Box>
          <Center w="full">
            <Link href="/">
              <HStack>
                <Image src="/images/logo.png" alt="Logo" />
              </HStack>
            </Link>
          </Center>
        </Flex>
      </chakra.div>
    </chakra.header>
  )
}