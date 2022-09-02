import { Box, Center, Flex } from "@chakra-ui/react";
import { CardAvatar } from "./CardAvatar";
import { CardBase } from "./CardBase";
import { CardContent } from "./CardContent";
import { CardImage } from "./CardImage";
import { CardSubTitle } from "./CardSubTitle";
import { CardTitle } from "./CardTitle";

interface Props {
  id?: number;
  cidade: string;
  pais: string;
  image: string;
  imageBandeira: string;
}


export function Card(props: Props) {
  return (
    <CardBase>
      <CardImage image={props.image} name={props.cidade} />
      <CardContent>
        <Flex justifyContent="space-between">
          <Box>
            <CardTitle title={props.cidade} />
            <CardSubTitle subTitle={props.pais} />
          </Box>
          <Flex>
            <Center>
              <CardAvatar name={props.pais} image={props.imageBandeira} />
            </Center>
          </Flex>
        </Flex>
      </CardContent>
    </CardBase>
  )
}