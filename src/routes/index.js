import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Home from "../pages/Home";
import { DefaultLayout } from "../components/layout/DefaultLayout";
import Comedy from "../components/layout/category/comedy/comedy";
import { MultiCarousel } from "../components/Carousel";
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "test",
    component: MultiCarousel,
  },
  //   {
  //     path: "/he",
  //     component: Footer,
  //   },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
