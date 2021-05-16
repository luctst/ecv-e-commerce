import MainArticles from "../components/Home/MainArticles";
import MainCollection from "../components/Home/MainCollection";
import Categories from "../components/Home/Categories";

function Home() {
    return (
        <>
            <MainCollection/>
            <MainArticles/>
            <Categories/> 
        </>
    );
}

export default Home;