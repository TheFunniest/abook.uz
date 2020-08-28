import React from "react";
import styles from "./styles.module.scss";

// COMPONENTS
import Header from "../../components/Header";
import MainPageText from "../../components/mainPageText";
import Statistics from "../../components/Statistics";
import Books from "../../components/Books";
import DonwloadApp from "../../components/DownloadApp";

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
          <DonwloadApp />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
