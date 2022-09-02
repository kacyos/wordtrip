import { Flex, FlexProps } from "@chakra-ui/react";

export function BannerImage(props: FlexProps) {
  return (
    <Flex
      position={'relative'}
      w={'full'}
      h={{ base: "150px", lg: "500px" }}
      bgPos="center"
      bgSize="cover"
      {...props}
    />
  )
}