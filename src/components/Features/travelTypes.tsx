import { chakra, Flex, GridItem, Icon, SimpleGrid } from "@chakra-ui/react";
import { Beach, Classic, Earth, Modern, Nightlife } from "./icons";

export function TravelTypes() {
  const Feature = (props: any) => {
    return (
      <GridItem textAlign="center">
        <Flex
          alignItems="center"
          justifyContent="center"
          mb={8}
        >
          <Icon
            boxSize={20}
            fill="currentColor"
            aria-hidden="true"
            as={props.icon}
          >
          </Icon>
        </Flex>
        <chakra.h3
          mb={2}
          fontSize={'24px'}
          fontWeight="600"
          lineHeight="36px"
          color={"gray.300"}
        >
          {props.title}
        </chakra.h3>
      </GridItem>
    );
  };

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
      spacing={20}
    >
      <Feature
        title="vida noturna"
        textAlign="center"
        icon={Nightlife}
      />
      <Feature
        title="praia"
        textAlign="center"
        icon={Beach}
      />
      <Feature
        title="moderno"
        textAlign="center"
        icon={Modern}
      />
      <Feature
        title="clássico"
        textAlign="center"
        icon={Classic}
      />
      <Feature
        title="e mais..."
        textAlign="center"
        icon={Earth}
      />
    </SimpleGrid>
  )
}