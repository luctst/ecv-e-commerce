import './style.scss';
import React, { useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { fetchAllArticles } from '../../store/articles/actions';
import { fetchAllCategory } from '../../store/category/actions';
import { logUser, populateUser } from '../../store/users/actions';

import { decode } from 'jsonwebtoken';
import { connect } from "react-redux";
import api from "../../api";

const Layout = ({children, fetchAllArticles, fetchAllCategory, populateUser }) => {

    useEffect(function () {
        (async function () {
            await Promise.all([
                fetchAllArticles(),
                fetchAllCategory()
            ]);
            if (localStorage.getItem('accessToken')) {
                const jwtData = decode(localStorage.getItem('accessToken'));
                const userId = parseInt(jwtData.sub);
                api.get(`/users/${userId}`)
                    .then(userData => populateUser(userData.data));
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