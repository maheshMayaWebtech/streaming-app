import { FC } from "react";
import BannerPage from "../../components/BannerPage/BannerPage";
import Suggestions from "../../components/Suggestions/Suggestions";

const MovieCarousel: FC = () => {

  return (
    <>
    <BannerPage />
    <Suggestions />
    </>
  );
};

export default MovieCarousel;
