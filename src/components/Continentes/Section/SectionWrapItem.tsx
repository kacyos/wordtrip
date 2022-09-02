import { Box, WrapItem, Text, Icon, Flex } from "@chakra-ui/react";
import { MdInfoOutline } from "react-icons/md";
import { SectionIcon } from "./SectionIcon";

interface Props {
  number: string;
  title: string;
  icon?: true;
}

export function SectionWrapItem({ number, title, icon }: Props) {
  return (
    <WrapItem>
      <Box textAlign={'center'}>
        <Text
          fontSize={{ base: "24px", lg: "48px" }}
          lineHeight={{ base: "36px", lg: "72px" }}
          fontWeight={'600'}
          color={'yellow.500'}
        >
          {number}
        </Text>
        <Flex justify="center" align="center">
          <Text
            fontSize={{ base: "18px", lg: "24px" }}
            lineHeight={{ base: "27px", lg: "36px" }}
            fontWeight={{ base: "400", lg: "600" }}
            color={'gray.300'}
          >
            {title}
          </Text>
          {icon && <SectionIcon />}
        </Flex>
      </Box>
    </WrapItem>
  )
}