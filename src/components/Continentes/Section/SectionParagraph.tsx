import { chakra } from "@chakra-ui/react";

interface Props {
  title: string
}

export function SectionParagraph({ title }: Props) {
  return (
    <chakra.p
      fontSize={{ base: "14px", lg: "24px" }}
      lineHeight={{ base: "21px", lg: "36px" }}
      fontWeight={'400'}
      color={'gray.300'}
      textAlign={'justify'}
    >
      {title}
    </chakra.p>
  )
}