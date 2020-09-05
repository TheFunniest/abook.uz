import React from "react";
import "./styles.scss";
import Header from "../../components/Header";
import PageName from "../../components/PageName";
import DownloadApp from "../../components/DownloadApp";
// ICONS
import { ReactComponent as PhoneIcon } from "../../assets/images/phoneIcon.svg";
import { ReactComponent as MessageIcon } from "../../assets/images/messageIcon.svg";
import { ReactComponent as LocationIcon } from "../../assets/images/locationIcon.svg";

const Contact = () => {
  return (
    <>
      <Header dark />
      <PageName name="Контакты" />
      <div className="contact">
        <div className="container">
          <h2 className="contact-title">Контакты</h2>
          <p className="contact-text">
            С другой стороны консультация с широким активом позволяет выполнять
            важные задания по разработке новых предложений. Разнообразный и
            богатый опыт постоянный количественный рост и сфера нашей активности
            требуют определения и уточнения позиций, занимаемых участниками в
            отношении поставленных задач.
            <br /> ООО “Abook Web Shop”
          </p>

          <div className="contact-info">
            <div className="contact-info__item">
              <PhoneIcon />
              <p>+998 99 812 34 56</p>
            </div>
            <div className="contact-info__item">
              <MessageIcon />
              <p>info@abook.uz</p>
            </div>
            <div className="contact-info__item">
              <LocationIcon />
              <p>
                Ташкент, ул. Амир <br /> Темур, дом 123
              </p>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10210.450073721338!2d69.27980662133282!3d41.326062865105605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4a72a4ee0f%3A0xedd70afc9a4af8da!2z0JzQuNC90L7RgA!5e0!3m2!1sru!2s!4v1599296198221!5m2!1sru!2s&zoom=15"
            width="100%"
            height="230"
            aria-hidden="false"
            tabIndex="0"
            title="google maps"
          ></iframe>
        </div>
        <div className="container">
          <DownloadApp />
        </div>
      </div>
    </>
  );
};

export default Contact;
