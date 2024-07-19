import { FC } from "react";
import BannerPage from "../../components/BannerPage/BannerPage";
import Suggestions from "../../components/Suggestions/Suggestions";

const MovieCarousel: FC = () => {

  return (
    <>
    <BannerPage />
    <Suggestions Heading={"Latest Release"} />
    <Suggestions Heading={"Continue Watching"} />
    <Suggestions Heading={"Trending in USA"} />
    </>
  );
};

export default MovieCarousel;
