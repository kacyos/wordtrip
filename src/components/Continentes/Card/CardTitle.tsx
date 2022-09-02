import { chakra } from "@chakra-ui/react";

interface Props {
  title: string
}

export function CardTitle({ title }: Props) {
  return (
    <chakra.h3
      fontFamily={'Barlow'}
      fontSize={'20px'}
      lineHeight={'25px'}
      fontWeight={'600'}
      color={'gray.300'}
      mb={2}
    >
      {title}
    </chakra.h3>
  )
}