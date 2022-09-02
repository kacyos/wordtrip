import { chakra } from "@chakra-ui/react";

interface Props {
  subTitle: string
}

export function CardSubTitle({ subTitle }: Props) {
  return (
    <chakra.p
      fontFamily={'Barlow'}
      fontSize={'16px'}
      lineHeight={'26px'}
      fontWeight={'500'}
      color={'gray.400'}
    >
      {subTitle}
    </chakra.p>
  )
}