// MovieCarousel.tsx

import React from 'react';
import Slider from 'react-slick';
import movieDetails from '../../constants/movieDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './index.module.css'; 

const MovieCarousel: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, 
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                {movieDetails.map((movie) => (
                    <div key={movie.id} className={styles.carouselItem}>
                        <img
                            src={movie.imageUrl}
                            alt={movie.title}
                            className={styles.carouselImage}
                        />
                        <div className={styles.gradientOverlay}></div>
                        <div className={styles.carouselCaption}>
                            <img
                                src={movie.logoUrl}
                                alt={`${movie.title} logo`}
                                className={styles.carouselLogo}
                            />
                            <p>{movie.title} ({movie.year})</p>
                            <div className={styles.tags}>
                                {movie.tags.map((tag, index) => (
                                    <span key={index} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieCarousel;
