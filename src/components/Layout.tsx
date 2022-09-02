import { chakra } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <chakra.main pb={10}>
        {children}
      </chakra.main>
    </>

  )
}