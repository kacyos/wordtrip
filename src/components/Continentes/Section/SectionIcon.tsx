import { Icon } from "@chakra-ui/react";
import { MdInfoOutline } from "react-icons/md";

export function SectionIcon() {
  return (
    <Icon
      as={MdInfoOutline}
      ml={1}
      color={"#b9b9b9"}
      fontSize={{ base: "18px", lg: "24px" }}
    />
  )
}