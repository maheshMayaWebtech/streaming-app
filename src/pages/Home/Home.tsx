import { FC } from "react";
import BannerPage from "../../components/BannerPage/BannerPage";
import Suggestions from "../../components/Suggestions/Suggestions";
import useHome from "./useHome";
import Features from "@/components/Features/Features";
import Categories from "@/components/Categories/Categories";
import VideoBanner from "@/components/VideoBanner/VideoBanner";

const MovieCarousel: FC = () => {
  const { moviesList } = useHome();

  return (
    <>
      <BannerPage />
      <Suggestions Heading={"Latest Release"} moviesList={moviesList} />
      <Features />
      <Suggestions Heading={"Continue Watching"} moviesList={moviesList} />
      <Categories />
      <VideoBanner />
      <Suggestions Heading={"Trending in USA"} moviesList={moviesList} />
    </>
  );
};

export default MovieCarousel;
