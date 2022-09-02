import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

export function CardBase(props: BoxProps) {
  return (
    <Box
      mx="auto"
      rounded="lg"
      shadow="md"
      bg={useColorModeValue("white", "gray.800")}
      w='full'
      {...props}
    />
  )
}