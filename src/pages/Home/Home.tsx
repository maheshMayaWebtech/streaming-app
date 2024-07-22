import { FC } from "react";
import BannerPage from "../../components/BannerPage/BannerPage";
import Suggestions from "../../components/Suggestions/Suggestions";
import useHome from "./useHome";

const MovieCarousel: FC = () => {
  const { moviesList } = useHome();

  return (
    <>
      <BannerPage />
      <Suggestions Heading={"Latest Release"} moviesList={moviesList} />
      <Suggestions Heading={"Continue Watching"} moviesList={moviesList} />
      <Suggestions Heading={"Trending in USA"} moviesList={moviesList} />
    </>
  );
};

export default MovieCarousel;
