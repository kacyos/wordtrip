import { chakra } from "@chakra-ui/react";

interface Props {
  title: string
}

export function BannerText({ title }: Props) {
  return (
    <chakra.h2
      fontSize={{ base: "28px", lg: "48px" }}
      lineHeight={{ base: "42px", lg: "72px" }}
      fontWeight={600}
      color={"gray.100"}
    >
      {title}
    </chakra.h2>
  )
}