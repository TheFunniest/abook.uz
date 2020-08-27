import React from "react";
import styles from "./styles.module.scss";

// COMPONENTS
import Header from "../../components/Header";
import MainPageText from "../../components/mainPageText";
import Statistics from "../../components/Statistics";
import Books from "../../components/Books";

const IndexPage = () => {
  return (
    <>
      <div className={styles.mainSection}>
        <div className="container">
          <Header />
          <MainPageText />
        </div>
      </div>
      <div className={styles.infoSection} id="statistics">
        <div className="container">
          <Statistics />
          <Books />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
