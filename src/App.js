import { ThemeProvider } from "@mui/system"
import { Button, Container } from "@mui/material"
import { useEffect } from "react"
import theme from "./styles/theme"
import Appbar from "./components/appbar"

function App() {
  useEffect(() => {
    document.title = "Vilma Decorações"
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#FFF",
        }}
      >
        <Appbar />
        <Button variant="contained">Test1</Button>
      </Container>
    </ThemeProvider>
  )
}

export default App
