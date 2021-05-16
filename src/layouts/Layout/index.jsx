import './style.scss';
import React, { useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { fetchAllArticles } from '../../store/articles/actions';
import { fetchAllCategory } from '../../store/category/actions'
import { connect } from "react-redux";

const Layout = ({children, fetchAllArticles, fetchAllCategory}) => {

    useEffect(function () {
        (async function () {
            await Promise.all([
                fetchAllArticles(),
                fetchAllCategory()
            ])
        })()
    }, []);

    return (
        <>
            <Header/>
            <main className="wrapper">{children}</main>
            <Footer/>
        </>
    )
};

export default connect(
    null,
    {fetchAllArticles, fetchAllCategory}
)
(Layout);