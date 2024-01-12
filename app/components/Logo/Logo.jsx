// next
import Link from "next/link";
import SVG from "react-inlinesvg";

import styles from "./Logo.module.css";

// ----------------------------------------------------------------------

function Logo({ settings }) {
  const { logo, title } = settings;

  return (
    <Link href="/" className={styles.logoLink}>
      <div className={styles.LogoContainer}>
        <SVG className={styles.Logo} src={logo.asset.url} />
        <span className={styles.logoTitle}>{title}</span>
      </div>
    </Link>
  );
}

export default Logo;
