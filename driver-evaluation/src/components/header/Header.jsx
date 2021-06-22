import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div>Fleet Portal</div>
      {/* TODO replace with the logo img */}
      <div>Logo</div>
    </header>
  );
};

export default Header;
