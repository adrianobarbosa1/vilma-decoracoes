import { ListItemButton, ListItemIcon } from "@mui/material"
import { MyList } from "../../styles/appbar"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonIcon from "@mui/icons-material/Person"
import FavoriteIcon from "@mui/icons-material/Favorite"

export default function Actions() {
  return (
    <MyList type="row">
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
      </ListItemButton>
    </MyList>
  )
}
