import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './VideoBanner.module.css';

interface Video {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'THE DARK BEAUTY',
    description: `Shadow Blitzstrike is a dynamic and elusive move executed with lightning-fast precision. The user channels dark`,
    videoUrl: 'https://res.cloudinary.com/dqcr5yn0b/video/upload/v1721641064/e86032ef-9397-4888-9d12-7246be9d81bb_1_dr1m1b.mp4'
  },
];

const VideoBanner: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={styles.videoContainer}>
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoFrame}>
            <video className={styles.videoBackground} autoPlay loop muted>
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}>
              <div className={styles.textContent}>
                <h1 className={styles.title}>{video.title}</h1>
                <p className={styles.description}>{video.description}</p>
                <button className={styles.watchButton}>Watch Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoBanner;
