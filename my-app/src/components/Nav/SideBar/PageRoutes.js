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
    sidebarName: "Player Search",
    navbarName: "Player Search",
    icon: Public,
    component: General,
  },
  {
    path: "/gamehelp",
    sidebarName: "Game Help",
    navbarName: "Game Help",
    icon: Build,
    component: GameHelp,
  },
  {
    path: "/matchsearch",
    sidebarName: "Match Search",
    navbarName: "Match Search",
    icon: DirectionsCar,
    component: MatchSearch,
  }

];

export default PageRoutes;
