import { useEffect, useState } from 'react';
import '../css/App.css';
import '../css/Project.css';
function App(props) {
    return (
        <>
            <div className="subTitle">
                프로젝트
            </div>
            <div className="project-card flex-row" style={{ justifyContent: "space-around" }}>
                <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt="" />
                <div className="flex-column">
                    <div className="project-title">
                        Project Name
                    </div>
                    <br />
                    <div className="content">
                        내용내용내용내용내용내용내용
                        <br />
                        내용내용내용내용내용내용내용
                    </div>
                </div>
            </div>
            <div className="project-card flex-row">
                a
            </div>
            <div className="project-card flex-row">
                a
            </div>
        </>
    );
}

export default App;