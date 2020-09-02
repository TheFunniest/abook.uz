import React from 'react'
import './styles.scss'
import Header from '../../components/Header'
import PageName from '../../components/PageName'
import DownloadApp from '../../components/DownloadApp'
import AgreementText from '../../components/AgreementText'


const Agreement = () => {
    return (
        <>
            <Header dark/>
            <PageName name="Условия соглашения"/>
            <div className="agreement">
                    <div className="container">
                        <AgreementText/>
                        <DownloadApp/>
                    </div>
            </div>
        </>
    )
}

export default Agreement
