import { FC } from 'react';
import styles from './Features.module.css';

interface Feature {
  icon: string;
  title: string;
  subTitle: string;
}

const featureData: Feature[] = [
  {
    icon: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721629019/yt_rpl1qi.png",
    title: "FLEXIBLE",
    subTitle: "Flexible streaming allows users to customize their viewing experience"
  },
  {
    icon: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721629019/thumbIcon_bajjly.png",
    title: "SUPER FAST QUALITY",
    subTitle: "Flexible streaming allows users to customize their viewing experience"
  },
  {
    icon: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721629019/mastercard_ltbse1.png",
    title: "WATCH FROM ANYWHERE",
    subTitle: "Flexible streaming allows users to customize their viewing experience"
  },
  {
    icon: "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721629019/arrow_kz7gev.png",
    title: "DOWNLOAD AND GO",
    subTitle: "Flexible streaming allows users to customize their viewing experience"
  },
];

const Features: FC = () => {
  return (
    <div className={styles.mainFeature}>
      <div className={styles.title}>STREAMIO IS SUPERIOR LIVE <br /> TV STREAMING</div>
      <div className={styles.featureCards}>
        {featureData.map((feature, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardIcon}>
              <img src={feature.icon} alt="ytLogo" className={styles.cardLogo} />
            </div>
            <div className={styles.cardTitle}>{feature.title}</div>
            <div className={styles.cardSubTitle}>{feature.subTitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
