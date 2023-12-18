import AllInformationsJs from "../../../informations";
import styles from "../Navbar/Navbar.module.scss";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <img src={AllInformationsJs.Navbar.BurgerIcon} alt="" />
        </li>
        <li className={styles.WebrandyLogo}>
          <img src={AllInformationsJs.Navbar.WebrandyLogo} alt="" />
          <h1>
            <a href="/">{AllInformationsJs.Navbar.WebrandyTitle}</a>
          </h1>
        </li>
        <li className={styles.ProfilePhotos}>
          <img src={AllInformationsJs.Navbar.ProfilePhotos} alt="" />
        </li>
      </ul>
    </nav>
  );
}
