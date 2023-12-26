import Home from "../pages/Home";
import { MovieDetails } from "../components/layout/movieDetail/movieDetail";
import { DataContextProvider } from "../components/DataContext";
import WatchMovie from "../components/layout/watchMovie/WatchMovie";
import MovieSearch from "../components/layout/MovieSearch/MovieSearch";

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
    path: "watch-movie/:id/tap/:taps",
    component: WatchMovie,
  },
  {
    path: "/search",
    component: MovieSearch,
  },

  //   {
  //     path: "/he",
  //     component: Footer,
  //   },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
