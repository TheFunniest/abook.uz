import React from "react";
import Header from "../../components/Header";
import "./styles.scss";
import Rate from "@material-ui/lab/Rating";
import BooksSlider from "../../components/BooksSlider";

import StoreLinks from "../../components/StoreLinks";
import BookImg from "../../assets/images/book_img.png";
import { ReactComponent as Headphones } from "../../assets/images/headphones.svg";
import { ReactComponent as Glasses } from "../../assets/images/glasses.svg";



const Book = () => {
  return (
    <>
      <Header dark />
      <div className="book-banner">
        <div className="book-info">
          <h1 className="book-info__name">До встречи c тобой</h1>
          <p className="book-info__author">Джоджо Мойес</p>
        </div>
      </div>
      <div className="book-wrapper">
        <div className="container">
          <div className="book-section">
            <div className="book-cover">
              <img src={BookImg} alt="book" />
              <div className="book-icons">
                <div className="book-icons__item">
                  <Glasses />
                </div>
                <div className="book-icons__item">
                  <Headphones />
                </div>
              </div>
              <div className="book-rating">
                <p>Оцените книгу</p>
                <Rate size="medium" name="rating" />
              </div>
            </div>
            <div className="book-about">
              <Rate size="large" readOnly value={2.5} precision={0.5} />
              <div className="book-about__genres">
                <p>Романтика</p>
                <p>Драма</p>
              </div>
              <p className="book-about__text">
                5 часа. 3 минута{" "}
                <span style={{ marginLeft: 10, marginTop: 20 }}>2015 год</span>
              </p>
              <div className="book-about__links">
                <StoreLinks />
              </div>

              <div className="book-about__description">
                <p className="book-about__grey">Описание</p>

                <p className="book-about__text">
                  Лу Кларк знает, сколько шагов от автобусной остановки до ее
                  дома. Она знает, что ей очень нравится работа в кафе и что,
                  скорее всего, она не любит своего бойфренда Патрика. Но Лу не
                  знает, что вот-вот потеряет свою работу и что в ближайшем
                  будущем ей понадобятся все силы, чтобы преодолеть свалившиеся
                  на нее проблемы.
                  <br />
                  <br />
                  Уилл Трейнор знает, что сбивший его мотоциклист отнял у него
                  желание жить. И он точно знает, что надо сделать, чтобы
                  положить конец всему этому. Но он не знает, что Лу скоро
                  ворвется в его мир буйством красок. И они оба не знают, что
                  навсегда изменят жизнь друг друга.
                  <br />
                  <br />
                  Уже в первые месяцы после выхода в свет романа Джоджо Мойес
                  «До встречи с тобой» было продано свыше полумиллиона
                  экземпляров. Книга вошла в список бестселлеров «Нью-Йорк
                  таймс», переведена на 31 язык. Права на ее экранизацию купила
                  киностудия «Метро-Голдвин-Майер».
                  <br />
                  <br />
                </p>
              </div>

              <div className="book-about__specifications">
                <ul className="book-about__list">
                  <li>
                    <p className="book-about__grey">Цена:</p>
                    <span style={{
                      color: "#BC1717",
                      textDecoration: "line-through",
                      marginRight: 10
                      
                    }}>98 000 сум</span>

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
            <div className="book-owner">
                        <p className="book-owner__name">
                        Penguin Books
                        </p>
                        <p className="book-owner__count">
                        1488 книга
                        </p>
                        <button className="book-owner__share">
                        Поделится
                        </button>
                    </div>
          </div>
            <div className="book-slider">
                    <BooksSlider count={6} title="Другие книги этого автора" spaceBetween={25} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Book;
