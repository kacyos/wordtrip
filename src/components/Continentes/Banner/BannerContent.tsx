import { BoxProps, Container } from "@chakra-ui/react";

export function BannerContent(props: BoxProps) {
  return (
    <Container
      mx="auto"
      maxW="1200px"
      _after={{
        content: `""`,
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: "0",
        left: "0",
        right: "0",
        bg: "rgba(28, 20, 1, 0.35)",
      }}
      {...props}
    />
  )
}