import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./logo.webp";
import Navbar from "./Navbar";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to="/" className={styles.headerLogoLink}>
          <img className={styles.headerLogoLinkImg} src={logo} alt="Logo" />
        </Link>
      </div>
      <Navbar />
      <UserNav />
    </header>
  );
}
