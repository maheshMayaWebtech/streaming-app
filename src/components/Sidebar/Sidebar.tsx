import { FC } from 'react';
import styles from './Sidebar.module.css';
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { TiHome } from "react-icons/ti";
import { PiTelevisionFill } from "react-icons/pi";
import { MdMovie, MdOutlineSportsBaseball } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";

const sidebarItems = [
  { icon: CgProfile, label: 'My Space' },
  { icon: CiSearch, label: 'Search' },
  { icon: TiHome, label: 'Home' },
  { icon: PiTelevisionFill, label: 'Television' },
  { icon: MdMovie, label: 'Movie' },
  { icon: MdOutlineSportsBaseball, label: 'Sports' },
  { icon: BiSolidCategory, label: 'Category' },
];

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <img src="/logoSmall.png" alt="logoSmall" width={30} />
      </div>
      {sidebarItems.map((item, index) => (
        <div key={index} className={styles.sidebarItem}>
          <item.icon className={styles.icon} />
          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
