import './style.scss';
import React, { useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { fetchAllArticles } from '../../store/articles/actions';
import { fetchAllCategory } from '../../store/category/actions';
import { populateUser } from '../../store/users/actions';

import { decode } from 'jsonwebtoken';
import { connect } from "react-redux";

const Layout = ({children, fetchAllArticles, fetchAllCategory, populateUser }) => {

    useEffect(function () {
        (async function () {
            await Promise.all([
                fetchAllArticles(),
                fetchAllCategory()
            ])

            if (localStorage.getItem('accessToken')) {
                const jwtData = decode(localStorage.getItem('accessToken'));
                populateUser({ email: jwtData.email, userId: parseInt(jwtData.sub) });
            }
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
    {fetchAllArticles, fetchAllCategory, populateUser }
)
(Layout);