import { Image } from "@chakra-ui/react";

interface Props {
  name: string;
  image: string;
}
export function CardImage({ name, image }: Props) {
  return (
    <Image
      roundedTop="lg"
      w="full"
      h={44}
      fit="cover"
      src={image}
      alt={name}
    />
  )
}