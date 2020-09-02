import React from "react";
import PageName from "../../components/PageName";
import Header from "../../components/Header";
import DownloadApp from "../../components/DownloadApp";
import AgreementText from '../../components/CookiesText'
import "./styles.scss";

const Cookies = () => {
  return (
    <>
      <Header dark={true} />
      <PageName name="Соглашение об использовании cookie-файлов" />
      <div className="cookies">
        <div className="container">
            <AgreementText/>
          <DownloadApp />
        </div>
      </div>
    </>
  );
};

export default Cookies;
