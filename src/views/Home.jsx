// import { useState } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';

function Home(props) {
    // const [state, setState] = useState({
    //     test: true
    // });

    function parseClass(i) {
        let str = 'col-4 rounded-1 border '

        if (i === 0) return str.concat('border-primary');
        if (i === 1) return str.concat('border-warning');
        if (i === 2) return str.concat('border-dark')
    }

    return (
        <>
            <Header />
            <main className="container mt-5">
                <div className="row">
                    {
                        Object.keys(props.tasks).map((task, index) => {
                            return (
                                <div className={parseClass(index)} key={index}>
                                    <header>
                                        <p className="text-center">{task}</p>
                                    </header>
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
            </main>
        </>
    );
}

function mapStateToProps(state) {
    return {
        tasks: state.handleTasks.tasks
    }
}

export default connect(mapStateToProps)(Home);