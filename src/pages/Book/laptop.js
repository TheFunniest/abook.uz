import React from "react";
import Header from "../../components/Header";
import "./styles.scss";
import Rate from "@material-ui/lab/Rating";
import BooksSlider from "../../components/BooksSlider";
import { useMediaQuery } from "react-responsive";
import StoreLinks from "../../components/StoreLinks";
import { ReactComponent as Headphones } from "../../assets/images/headphones.svg";
import { ReactComponent as Glasses } from "../../assets/images/glasses.svg";
import { findLang, secondsToHms } from "../../utils";

const LaptopBook = ({ book }) => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const isTablet = useMediaQuery({ minWidth: 425, maxWidth: 1024 });


  console.log(!book.loaded, "loaded")

  return (
    <>
      <Header dark />
      <div
        className="book-banner"
        style={{
          backgroundImage: `url(http://185.74.5.132:3050${book.data.cover_url})`,
        }}
      >
        <div className="book-info">
          <h1 className="book-info__name">{book.data.title}</h1>
          <p className="book-info__author">{book.data.author?.full_name}</p>
        </div>
      </div>
      <div className="book-wrapper">
        <div className="container">
          <div className="book-section">
            <div className="book-cover">
              <img
                src={`http://185.74.5.132:3050${book.data.cover_url}`}
                alt="book"
              />
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
              </div>
              <div className="book-rating">
                <p>Оцените книгу</p>
                <Rate size="medium" name="rating" />
              </div>
            </div>
            <div className="book-about">
              <Rate
                size="large"
                readOnly
                value={book.data.vote?.rate || 0}
                precision={0.5}
              />
              <div className="book-about__genres">
                {book.data?.genres?.map((genre) => {
                  return <p key={genre.id}>{genre.name_ru}</p>;
                })}
              </div>
              <p className="book-about__text">
                {secondsToHms(book.data.seconds)}
                <span style={{ marginLeft: 10, marginTop: 20 }}>2015 год</span>
              </p>
              <div className="book-about__links">
                <StoreLinks />
              </div>

              <div className="book-about__description">
                <p className="book-about__grey">Описание</p>

                <p className="book-about__text">{book.data.description}</p>
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
                    <span>{findLang(book.data.findLang)}</span>
                  </li>
                  <li>
                    <p className="book-about__grey">Читатель:</p>
                    <span>Абдурахмон Абдурашидов</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="book-owner">
              <p className="book-owner__name">Penguin Books</p>
              <p className="book-owner__count">1488 книга</p>
              <button className="book-owner__share">Поделится</button>
            </div>
          </div>
          <div className="book-slider">
            <BooksSlider
              count={isDesktop ? 6 : isTablet ? 3 : 2}
              title="Другие книги этого автора"
              spaceBetween={25}
              books={{
                loading: !book.loaded,
                data: book.data.author?.books,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LaptopBook;
