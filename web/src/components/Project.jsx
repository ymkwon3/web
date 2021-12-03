import { useEffect, useState, useRef } from 'react';
import '../css/App.css';
import '../css/Project.css';
function App(props) {
    let cardRef = useRef([]);
    const handleCardClick = (idx) => {
        if (cardRef.current[idx].style.transform !== 'rotateY(180deg)') {
            cardRef.current[idx].style.transform = 'rotateY(180deg)';
        } else {
            cardRef.current[idx].style.transform = 'rotateY(0deg)';
        }
    }
    return (
        <>
            <div className="subTitle">
                프로젝트
            </div>
            <div className="project-box flex-row" onClick={() => handleCardClick(0)} ref={(e) => cardRef.current[0] = e}>
                <div className="project-card project-card-front flex-row" style={{ justifyContent: "space-around" }}>
                    <div className="project-title">
                        Project Name
                    </div>
                    <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt="" />
                </div>
                <div className="project-card project-card-back flex-column">
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
            </div>

            <div className="project-box flex-row" onClick={() => handleCardClick(1)} ref={(e) => cardRef.current[1] = e}>
                <div className="project-card project-card-front flex-row" style={{ justifyContent: "space-around" }}>
                    <div className="project-title">
                        Project Name2
                    </div>
                    <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt="" />
                </div>
                <div className="project-card project-card-back flex-column">
                    <div className="flex-column">
                        <div className="project-title">
                            Project Name2
                        </div>
                        <br />
                        <div className="content">
                            내용내용내용내용내용내용내용
                            <br />
                            내용내용내용내용내용내용내용
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;