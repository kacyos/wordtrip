import { Flex, FlexProps, Stack } from "@chakra-ui/react";
import { BannerTitle } from "./BannerTitle";

export function BannerMobile(props: FlexProps) {
  return (
    <Flex
      align="center"
      pos="relative"
      justify="center"
      boxSize="full"
      zIndex={1}
      {...props}
    />
  )
}