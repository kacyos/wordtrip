import { useBreakpointValue } from "@chakra-ui/react";
import { BannerMobile } from "./BannerMobile";
import { BannerText } from "./BannerText";
import { BannerWeb } from "./BannerWeb";

interface Props {
  title: string
}

export function BannerTitle({ title }: Props) {
  const isBanner = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <>
      {isBanner ?
        <BannerMobile >
          <BannerText title={title} />
        </BannerMobile> :
        <BannerWeb >
          <BannerText title={title} />
        </BannerWeb>
      }
    </>
  )
}