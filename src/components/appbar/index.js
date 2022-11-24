import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import AppbarDesktop from "./appbarDesktop"
import AppbarMobile from "./appbarMobile"

export default function Appbar() {
  const theme = useTheme()
  const verifyDispositivo = useMediaQuery(theme.breakpoints.down("md"))

  return <>{verifyDispositivo ? <AppbarMobile /> : <AppbarDesktop />}</>
}
