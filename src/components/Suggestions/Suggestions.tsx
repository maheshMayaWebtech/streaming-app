import { Movie } from "@/pages/Home/useHome";
import { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Modal } from "../Modal/Modal";
import styles from "./Suggestions.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  PiNumberOneBold,
  PiNumberTwoBold,
  PiNumberThreeBold,
  PiNumberFourBold,
  PiNumberFiveBold,
  PiNumberSixBold,
  PiNumberSevenBold,
  PiNumberEightBold,
  PiNumberNineBold,
} from "react-icons/pi";

interface SuggestionsProps {
  Heading: string;
  moviesList: Movie[];
  numberEnabled: boolean;
}

const Suggestions: FC<SuggestionsProps> = ({ Heading, moviesList, numberEnabled = false }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const numberMap: { [key: number]: JSX.Element } = {
    1: <PiNumberOneBold />,
    2: <PiNumberTwoBold />,
    3: <PiNumberThreeBold />,
    4: <PiNumberFourBold />,
    5: <PiNumberFiveBold />,
    6: <PiNumberSixBold />,
    7: <PiNumberSevenBold />,
    8: <PiNumberEightBold />,
    9: <PiNumberNineBold />,
  };

  const handleMovieClick = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.carouselContainer}>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className={styles.titleSection}>
        <div className={styles.leftPart}>
          <span>
            <BsLightningChargeFill />
          </span>
          {Heading}
        </div>
        <div className={styles.rightPart}>View All &rarr;</div>
      </div>
      <Slider {...settings}>
        {moviesList.map((movie, index) => (
          <div
            key={movie.id}
            className={styles.carouselItem}
            onClick={handleMovieClick}
          >
            <div className={styles.movieCard}>
              {numberEnabled && <div className={styles.numbers}>{numberMap[index + 1]}</div>}
              <img
                src={movie.thumbnail_horizontal}
                alt={movie.title}
                className={styles.movieImage}
              />
              <div className={styles.movieSmallDescription}>
                <div className={styles.movieTitle}>
                  {movie.title}
                  <div className={styles.movieRating}>
                    Rating: {movie.rating}
                  </div>
                </div>
                <div className={styles.duration}>
                  Duration: {movie.duration_minutes} mins
                </div>
              </div>
              <div className={styles.movieInfo}>
                <div className={styles.playButton}>
                  <FaPlayCircle />
                </div>
                <div className={styles.bottomDetails}>
                  <h3 className={styles.movieTitle}>{movie.title}</h3>
                  <p className={styles.movieRating}>Rating: {movie.rating}</p>
                  <div className={styles.movieDetails}>
                    <p>
                      <span>Director:</span> {movie.director}
                    </p>
                    <p>
                      <span>Cast:</span>{" "}
                      {movie.cast.map((c) => c.name).join(", ")}
                    </p>
                    <p>
                      <span>Genre:</span> {movie.genre.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Suggestions;
