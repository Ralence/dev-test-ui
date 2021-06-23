import React from "react";
import logo from "../../assets/logo.png";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div>Fleet Portal</div>
      <img src={logo} alt="scania logo" width={30} />
    </header>
  );
};

export default Header;
