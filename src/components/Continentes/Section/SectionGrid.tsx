import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

export function SectionGrid(props: SimpleGridProps) {
  return (
    <SimpleGrid
      alignItems="center"
      columns={{ base: 1, lg: 11 }}
      gap={{ base: 0, lg: 20 }}
      {...props}
    />
  )
}