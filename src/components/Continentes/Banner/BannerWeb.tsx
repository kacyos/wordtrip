import { Box, BoxProps } from "@chakra-ui/react";
import { BannerTitle } from "./BannerTitle";

export function BannerWeb(props: BoxProps) {
  return (
    <Box position={'absolute'} bottom={10} zIndex={1} {...props} />
  )
}