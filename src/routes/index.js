import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Home from "../pages/Home";
import { DefaultLayout } from "../components/layout/DefaultLayout";
import Comedy from "../components/layout/category/comedy/comedy";
import MovieDetails from "../components/layout/movieDetail/movieDetail";
import { MultiCarousel } from "../components/Carousel";
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
    path: "watch-movie/:id",
    component: WatchMovie,
  },
  //   {
  //     path: "/he",
  //     component: Footer,
  //   },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
