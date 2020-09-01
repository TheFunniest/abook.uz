import React from "react";
import PageName from "../../components/PageName";
import Header from "../../components/Header";
import DownloadApp from "../../components/DownloadApp";
import AgreementText from '../../components/AgreementText'
import "./styles.scss";

const Agreement = () => {
  return (
    <>
      <Header dark={true} />
      <PageName name="Соглашение об использовании cookie-файлов" />
      <div className="agreement">
        <div className="container">
            <AgreementText/>
          <DownloadApp />
        </div>
      </div>
    </>
  );
};

export default Agreement;
