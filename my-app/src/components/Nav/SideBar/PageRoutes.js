import {
  Build,
  DirectionsCar,
  Public,
} from "@material-ui/icons";
import General from "../../../pages/General";
import Carpool from "../../../pages/CarPool";
import Equipment from "../../../pages/Equipment";

const PageRoutes = [
  {
    path: "/general",
    sidebarName: "General",
    navbarName: "General",
    icon: Public,
    component: General,
  },
  {
    path: "/carpool",
    sidebarName: "Car Pool",
    navbarName: "Car Pool",
    icon: DirectionsCar,
    component: Carpool,
  },
  {
    path: "/equipment",
    sidebarName: "Equipment & Tools",
    navbarName: "Equipment & Tools",
    icon: Build,
    component: Equipment,
  }

];

export default PageRoutes;
