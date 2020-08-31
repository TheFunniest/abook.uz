import React from 'react'
import "./styles.scss"
import BookCard from '../BookCard'

const BooksList = () => {
    return (
        <div className="booksList-wrapper">
            <ul className="books-list">
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard/>
                </li>
                <li className="books-list__item">
                    <BookCard loading={true}/>
                </li>
                <li className="books-list__item">
                    <BookCard loading={true}/>
                </li>
                <li className="books-list__item">
                    <BookCard loading={true}/>
                </li>
                <li className="books-list__item">
                    <BookCard loading={true}/>
                </li>
                <li className="books-list__item">
                    <BookCard loading={true}/>
                </li>
                <li className="books-list__item">
                    <BookCard loading={true}/>
                </li>
            </ul>
        </div>
    )
}

export default BooksList
