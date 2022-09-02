import { Box, BoxProps } from "@chakra-ui/react";

export function SectionContent(props: BoxProps) {
  return (
    <Box py={{ base: 10, lg: 20 }} {...props} />
  )
}