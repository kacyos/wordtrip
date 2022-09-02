import { BannerContent } from "./BannerContent";
import { BannerImage } from "./BannerImage";
import { BannerTitle } from "./BannerTitle";
interface Props {
  title: string
  image: string
}

export function Banner({ title, image }: Props) {

  return (
    <BannerImage backgroundImage={image}>
      <BannerContent>
        <BannerTitle title={title} />
      </BannerContent>
    </BannerImage>
  )
}