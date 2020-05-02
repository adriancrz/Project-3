import {
  Build,
  DirectionsCar,
  Public,
} from "@material-ui/icons";
import General from "../../../pages/General";
import GameHelp from "../../../pages/GameHelp";
import MatchSearch from "../../../pages/MatchSearch";

const PageRoutes = [
  {
    path: "/general",
    sidebarName: "General",
    navbarName: "General",
    icon: Public,
    component: General,
  },
  {
    path: "/gamehelp",
    sidebarName: "Game Help",
    navbarName: "Game Help",
    icon: DirectionsCar,
    component: GameHelp,
  },
  {
    path: "/matchsearch",
    sidebarName: "Match Search",
    navbarName: "Match Search",
    icon: Build,
    component: MatchSearch,
  }

];

export default PageRoutes;
