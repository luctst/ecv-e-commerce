// import { useState } from 'react';
import { connect } from 'react-redux';
import MainArticle from "../components/Home/MainArticle";
import Articles from "../components/Home/Articles";

function Home(props) {
    // const [state, setState] = useState({
    //     test: true
    // });

    function parseClass(i) {
        let str = 'col-4 rounded-1 border ';

        if (i === 0) return str.concat('border-primary');
        if (i === 1) return str.concat('border-warning');
        if (i === 2) return str.concat('border-dark')
    }

    return (
        <>
            <div>
                <MainArticle/>
                <Articles/>
                <div>
                    {
                        Object.keys(props.tasks).map((task, index) => {
                            return (
                                <div className={parseClass(index)} key={index}>
                                    <div>
                                        <p className="text-center">{task}</p>
                                    </div>
                                    <section>
                                        <ul>
                                            {
                                                props.tasks[task].map((item, y) => <li key={y} onClick={() => props.dispatch({ type: 'SWITCH_TASK', data: { columnIndex: index, item, itemIndex: y }})}>{item} </li>)
                                            }
                                        </ul>
                                    </section>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

function mapStateToProps(state) {
    return {
        tasks: state.handleTasks.tasks
    }
}

export default connect(mapStateToProps)(Home);