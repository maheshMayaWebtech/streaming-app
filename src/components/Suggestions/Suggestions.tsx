import { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import movieData from "../../constants/data";
import styles from "./Suggestions.module.css";
import { Modal } from "../Modal/Modal";

const Suggestions: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const handleMovieClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.carouselContainer}>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Slider {...settings}>
        {movieData.map((movie) => (
          <div key={movie.id} className={styles.carouselItem} onClick={handleMovieClick}>
            <div className={styles.movieCard}>
              <img
                src={movie.thumbnail_horizontal}
                alt={movie.title}
                className={styles.movieImage}
              />
              <div className={styles.movieSmallDescription}>
                <div className={styles.movieTitle}>
                  {movie.title}
                  <div className={styles.movieRating}>Rating: {movie.rating}</div>
                </div>
                <div className={styles.duration}>
                  Duration: {movie.duration_minutes} mins
                </div>
              </div>
              <div className={styles.movieInfo}>
                <h3 className={styles.movieTitle}>{movie.title}</h3>
                <p className={styles.movieRating}>Rating: {movie.rating}</p>
                <div className={styles.movieDetails}>
                  <p><span>Director:</span> {movie.director}</p>
                  <p><span>Cast:</span> {movie.cast.map((c) => c.name).join(", ")}</p>
                  <p><span>Genre:</span> {movie.genre.join(", ")}</p>
                  <p><span>Synopsis:</span> {movie.synopsis}</p>
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
