import { GridItem, Wrap } from "@chakra-ui/react";
import { BaseContent } from "../../BaseContent";
import { SectionContent } from "./SectionContent";
import { SectionGrid } from "./SectionGrid";
import { SectionParagraph } from "./SectionParagraph";
import { SectionWrapItem } from "./SectionWrapItem";

interface Props {
  description: string
}

export function Section({ description }: Props) {
  return (
    <BaseContent>
      <SectionContent>
        <SectionGrid>
          <GridItem colSpan={{ base: "auto", lg: 6 }} pb={{ base: "10", lg: 0 }}>
            <SectionParagraph title={description} />
          </GridItem>
          <GridItem colSpan={{ base: "auto", md: 5 }}>
            <Wrap spacing={{ base: 8, xl: 14 }} justify='center'>
              <SectionWrapItem number="50" title="países" />
              <SectionWrapItem number="60" title="línguas" />
              <SectionWrapItem number="27" title="cidades +100" icon />
            </Wrap>
          </GridItem>
        </SectionGrid>
      </SectionContent>
    </BaseContent>
  )
}