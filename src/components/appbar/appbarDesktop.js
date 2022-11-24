import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search"

export default function AppbarDesktop({ verifyDispositivo }) {
  return (
    <AppbarContainer>
      <AppbarHeader>Vilma Decorações</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Inicio" />
        <ListItemText primary="Categorias" />
        <ListItemText primary="Produtos" />
        <ListItemText primary="Contato" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </AppbarContainer>
  )
}
