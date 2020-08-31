import React from 'react'
import "./styles.scss"
import Header from '../../components/Header'
import PageName from '../../components/PageName'
import Filter from '../../components/Filter'
import BooksList from '../../components/BooksList'
import DonwloadApp from '../../components/DownloadApp'

const NewBooks = () => {
    return (
        <div>
            <Header dark={true}/>
            <PageName name="Новинки и бестселлеры"/>
            <div className="newbooks-wrapper">
                <div className="container">
                <Filter/>
                <BooksList/>
                <DonwloadApp/>
                </div>
            </div>
        </div>
    )
}

export default NewBooks
