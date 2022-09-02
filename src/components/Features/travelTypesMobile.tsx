import { Center, Icon, Wrap, WrapItem } from '@chakra-ui/react'
import { MdFiberManualRecord } from "react-icons/md";

export function Mobile() {
  return (
    <Wrap spacing='30px' justify='center'>
      <WrapItem>
        <Center>
          <Icon as={MdFiberManualRecord} color='yellow.500' mr={1} />
          vida noturna
        </Center>
      </WrapItem>
      <WrapItem>
        <Center>
          <Icon as={MdFiberManualRecord} color='yellow.500' mr={1} />
          praia
        </Center>
      </WrapItem>
      <WrapItem>
        <Center>
          <Icon as={MdFiberManualRecord} color='yellow.500' mr={1} />
          moderno
        </Center>
      </WrapItem>
      <WrapItem>
        <Center>
          <Icon as={MdFiberManualRecord} color='yellow.500' mr={1} />
          clássico
        </Center>
      </WrapItem>
      <WrapItem>
        <Center>
          <Icon as={MdFiberManualRecord} color='yellow.500' mr={1} />
          e mais...
        </Center>
      </WrapItem>
    </Wrap>
  );
}