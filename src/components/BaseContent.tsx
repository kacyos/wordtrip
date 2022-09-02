import { Box, BoxProps, Container } from "@chakra-ui/react";

export function BaseContent(props: BoxProps) {
  return (
    <Container mx="auto" maxW="1200px" >
      <Box direction={{ base: 'column', lg: 'row' }}  {...props} />
    </Container>
  )
}