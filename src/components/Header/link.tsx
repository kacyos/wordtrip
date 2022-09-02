import { Box, Link } from '@chakra-ui/react';
import { useRouter } from "next/router";
import { MdKeyboardArrowLeft } from 'react-icons/md';

export default function ActiveLink() {
  const router = useRouter()
  return (
    <>
      {router.asPath !== "/" &&
        <Link href="/" fontSize={32}>
          <MdKeyboardArrowLeft />
        </Link>
      }
    </>
  )
}