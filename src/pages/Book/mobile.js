import React from "react";

import Header from "../../components/Header";
import "./styles.scss";
import Rate from "@material-ui/lab/Rating";
import { findLang, secondsToHms } from "../../utils";

import StoreLinks from "../../components/StoreLinks";
import { ReactComponent as Headphones } from "../../assets/images/headphones.svg";
import { ReactComponent as Glasses } from "../../assets/images/glasses.svg";
import { ReactComponent as Share } from "../../assets/images/share.svg";

const mobileBook = ({ book }) => {
  // const isMobile = useMediaQuery({maxWidth: 320})

  return (
    <>
      <Header dark />
      <div>
        <div
          className="book-banner"
          style={{
            backgroundImage: `url(http://185.74.5.132:3050${book.data.cover_url})`,
          }}
        >
          <div className="container">
            <div className="book-info">
              <h1 className="book-info__name">{book.data.title}</h1>
              <p className="book-info__author">{book.data.author?.full_name}</p>
            </div>
          </div>
        </div>
        <div className="book-wrapper">
          <div className="container">
            <div className="book-section">
              <img
                src={`http://185.74.5.132:3050${book.data.cover_url}`}
                style={{ borderRadius: 20 }}
                alt="book"
              />
              <div className="book-desc">
                <Rate
                  size="large"
                  readOnly
                  value={book.data.vote?.rate || 0}
                  precision={0.5}
                />
                <div className="book-about__genres">
                  <span>
                    {book.data?.genres?.map((genre) => {
                      return genre.name_ru + ", ";
                    })}
                  </span>
                </div>
                <p className="book-about__text">
                  {secondsToHms(book.data.seconds)}
                </p>
                <p className="book-about__text">2015 год</p>
              </div>
            </div>
            <div className="book-icons">
              {book.data.is_ebook && (
                <div className="book-icons__item">
                  <a
                    href={`http://185.74.5.132:3050${book.data.demo_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Glasses />
                  </a>
                </div>
              )}
              {book.data.is_abook && (
                <div className="book-icons__item">
                  <a
                    href={`http://185.74.5.132:3050${book.data.demo_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Headphones />
                  </a>
                </div>
              )}
              <div className="book-icons__item">
                <Share />
              </div>
            </div>

            <div className="book-about">
              <div className="book-about__description">
                <p className="book-about__grey" style={{ marginBottom: 10 }}>
                  Описание
                </p>

                <p className="book-about__text" style={{ marginBottom: 15 }}>
                  {book.data.description}
                </p>
                <div className="book-about__links">
                  <StoreLinks />
                </div>
              </div>
              <div className="book-owner">
                <p className="book-owner__name">Penguin Books</p>
                <p className="book-owner__count">1488 книга</p>
              </div>
              <div className="book-about__specifications">
                <ul className="book-about__list">
                  <li>
                    <p className="book-about__grey">Цена:</p>
                    <span
                      style={{
                        color: "#BC1717",
                        textDecoration: "line-through",
                        marginRight: 10,
                      }}
                    >
                      98 000 сум
                    </span>

                    <span>55 000 сум</span>
                  </li>

                  <li>
                    <p className="book-about__grey">Скидка:</p>
                    <span>15%</span>
                  </li>
                  <li>
                    <p className="book-about__grey">Язык книги:</p>
                    <span>Узбекский, Русский</span>
                  </li>
                  <li>
                    <p className="book-about__grey">Читатель:</p>
                    <span>Абдурахмон Абдурашидов</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default mobileBook;
