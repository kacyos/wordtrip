import { Avatar } from "@chakra-ui/react";

interface Props {
  name: string;
  image: string;
}

export function CardAvatar({ name, image }: Props) {
  return (
    <Avatar size='sm' name={name} src={image} />
  )
}