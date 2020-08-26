import React from "react";
import styles from "./styles.module.scss";

// COMPONENTS
import Header from "../../components/Header";
import MainPageText from "../../components/mainPageText";

const IndexPage = () => {
  return (
    <div className={styles.mainSection}>
      <div className="container">
        <Header />
        <MainPageText />
      </div>
    </div>
  );
};

export default IndexPage;
