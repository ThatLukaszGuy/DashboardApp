// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  components: {
  },
  colors: {
    tailwindPink: {
      100: "#FFFFFF",
      200: "#FFFFFF",
      300: "#FFFFFF",
      400: "#FFFFFF",
      500: "#be185d",
      600: "#9d174d",
      700:"#831843",
      800:"#FFFFFF",

    },
    customBlue: {
        500: "#0c8cbf",
        600: "#0c8cbf"
    },
    customGray: {
      600: "#4f545c",
      700: "#36393f",
      800: '#2f3136',
      900: "#202225"
    }
  },
})