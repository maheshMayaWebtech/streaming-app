import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Categories.module.css";

interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Kids and Family",
    imageUrl:
      "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721640429/kids_fojv4b.jpg",
  },
  {
    id: 2,
    name: "Web and TV Series",
    imageUrl:
      "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721640429/webseries_zh4gvt.jpg",
  },
  {
    id: 3,
    name: "Action",
    imageUrl:
      "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721640428/action_rv2ahg.jpg",
  },
  {
    id: 4,
    name: "Comedy",
    imageUrl:
      "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721640428/comedy_dspxon.jpg",
  },
  {
    id: 5,
    name: "Drama",
    imageUrl:
      "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721640684/drama_k7bv3z.jpg",
  },
  {
    id: 6,
    name: "Horror",
    imageUrl:
      "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721640428/horror_gc7cwh.png",
  },
  {
    id: 7,
    name: "Science Fiction",
    imageUrl:
      "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721640428/scifi_j1sfck.jpg",
  },
  {
    id: 8,
    name: "Documentary",
    imageUrl:
      "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721640429/docu_oehon6.jpg",
  },
];

const Categories: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
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
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows: false
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>Explore Categories</h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className={styles.carouselItem}>
            <div className={styles.categoryCard}>
              <img
                src={category.imageUrl}
                alt={category.name}
                className={styles.categoryImage}
              />
              <div className={styles.overlay}>
                <button className={styles.viewMoreButton}>
                  <FaArrowRight />
                </button>
              </div>
              <div className={styles.categoryName}>{category.name}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
