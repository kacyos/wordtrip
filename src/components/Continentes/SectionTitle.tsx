import { chakra } from "@chakra-ui/react";

interface QtdCidadeProps {
  qtdCidadeProps: number
}

export function SectionTitle({ qtdCidadeProps }: QtdCidadeProps) {
  return (
    <chakra.h2
      fontSize={{ base: "24px", lg: "36px" }}
      lineHeight={{ base: "36px", lg: "54px" }}
      fontWeight="500"
      color={'gray.300'}
    >
      Cidades +{qtdCidadeProps}
    </chakra.h2>
  )
}