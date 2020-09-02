import React from "react";
import styles from "./styles.module.scss";
import { useMediaQuery } from "react-responsive";

// IMAGES
import mainSectionBg from "../../assets/images/mainSectionBg.jpg";
import mainSectionBGMobile from "../../assets/images/mainSectionBgMobile.jpg";

// COMPONENTS
import Header from "../../components/Header";
import MainPageText from "../../components/mainPageText";
import Statistics from "../../components/Statistics";
import Books from "../../components/Books";
import DonwloadApp from "../../components/DownloadApp";
import Order from "../../components/Order";
import Partners from "../../components/Partners";

const IndexPage = () => {
  const isMobile = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <div
        className={styles.mainSection}
        style={{
          backgroundImage: `url(${
            isMobile ? mainSectionBg : mainSectionBGMobile
          })`,
        }}
      >
        <Header />
        <div className="container">
          <MainPageText />
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className="container">
          <Statistics />
          <Books />
          <DonwloadApp />
        </div>
      </div>
      <Order />
      <Partners />
    </>
  );
};

export default IndexPage;
