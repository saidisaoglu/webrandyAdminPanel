import Footer from "../Footer/Footer";
import TabTitle from "../TabTitle/TabTitle";
import styles from "./informations.module.scss";
export default function Informations() {
  return (
    <section className={styles.InformationsSection}>
      <TabTitle />
      <Footer />
    </section>
  );
}
