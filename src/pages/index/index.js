import React from "react";
import styles from "./styles.module.scss";
import { useMediaQuery } from "react-responsive";
import { Element } from "react-scroll";

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
          <Element name="statistics">
            <Statistics />
          </Element>
          <Element name="new_books">
            <Books />
          </Element>
          <Element name="download">
            <DonwloadApp />
          </Element>
        </div>
      </div>
      <Element name="order">
        <Order />
      </Element>
      <Element name="partners">
        <Partners />
      </Element>
    </>
  );
};

export default IndexPage;
