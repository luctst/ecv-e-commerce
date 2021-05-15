import { useEffect } from 'react';
import { connect } from 'react-redux';

import MainArticles from "../components/Home/MainArticles";
import MainCollection from "../components/Home/MainCollection";
import Categories from "../components/Home/Categories";
import { fetchAllArticles } from '../store/articles/actions';
import { fetchAllCategory } from '../store/category/actions'

function Home({ fetchAllArticles, fetchAllCategory }) {
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
            <MainCollection/>
            <MainArticles/>
            <Categories/> 
        </>
    );
}

export default connect(
    null,
    { fetchAllArticles, fetchAllCategory }
    )
    (Home);