import Home from "../pages/Home";
import { MovieDetails } from "../components/layout/movieDetail/movieDetail";
import { DataContextProvider } from "../components/DataContext";
import WatchMovie from "../components/layout/watchMovie/WatchMovie";
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "detail/:id",
    component: MovieDetails,
  },
  {
    path: "data",
    component: DataContextProvider,
  },
  {
    path: "watch-movie/:id/tap/:tap",
    component: WatchMovie,
  },
  //   {
  //     path: "/he",
  //     component: Footer,
  //   },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
