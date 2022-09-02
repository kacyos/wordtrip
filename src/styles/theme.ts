import { extendTheme }from '@chakra-ui/react'
import { mode, Styles } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: `Poppins, sans-serif`,
      color: mode('gray.800', 'gray.50')(props),
      bg: mode('gray.100', '#1D1D1D')(props),
      lineHeight: 'base',
    }
  }),
}

export const theme = extendTheme({ 
  config,
  styles,
    colors: {
    gray: {
      "400": "#999999",
      "300": "#47585B",
      "200": "#DADADA",
      "100": "#F5F8FA",
    },
    yellow: {
      "500": "#FFBA08",
    }
  },
   fonts: {
      heading: `Poppins, sans-serif`,
      body: `Poppins, sans-serif`,
    },
})