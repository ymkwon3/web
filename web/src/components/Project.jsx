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
            <div className="row-line"/>
            <div className="project-box flex-row" onClick={() => handleCardClick(0)} ref={(e) => cardRef.current[0] = e}>
                <div className="project-card project-card-front flex-row" style={{ justifyContent: "space-around" }}>
                    <div className="project-title">
                        CLOUD NINE
                    </div>
                    <img className="img-shadow" src="images/cloudnine.jpg" alt="" />
                </div>
                <div className="project-card project-card-back flex-column">
                    <div className="flex-column">
                        <div className="project-title">
                            CLOUD NINE 고객부, 관리부
                        </div>

                        <div className="project-date">
                            2021-06 ~ 2021-08
                        </div>
                        
                        <div className="content">
                            SpringBoot 기반의 자동차 방문정비 업체의 웹사이트입니다.
                            <br /><br />
                            프론트엔드 개발을 진행했으며 설계된 디자인이 없어 틀을 잡아가며 개발을 진행했습니다.
                            <br /><br />
                            고객부 주요 기능 : 문의하기, 서비스 신청, 서비스 이력, 회원
                            <br />
                            관리부 주요 기능 : 사용자 관리, 정보 조회, 일정, 이력, 문의, 이벤트, 상품, 단가표 관리
                            <br /><br />
                            처음 진행한 웹 개발 외주이며 웹 개발에 흥미를 가지게 해준 프로젝트입니다.
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-box flex-row" onClick={() => handleCardClick(1)} ref={(e) => cardRef.current[1] = e}>
                <div className="project-card project-card-front flex-row" style={{ justifyContent: "space-around" }}>
                    <div className="project-title">
                        포트폴리오 웹사이트
                    </div>
                    <img className="img-shadow" src="images/web.jpg" alt="" />
                </div>
                <div className="project-card project-card-back flex-column">
                    <div className="flex-column">
                        <div className="project-title">
                            포트폴리오 웹사이트
                        </div>

                        <div className="project-date">
                            2021-12 ~ 개발 중
                        </div>
                        
                        <div className="content">
                            React.js 기반의 포트폴리오 웹사이트 입니다.
                            <br /><br />
                            프론트엔드 개발에 조금 더 집중해 보고 싶어 제작하게 되었습니다.
                            <br /><br />
                            계속된 학습을 통해 추가적인 개발을 할 예정입니다.
                        </div>

                        <div className="content-detail">
                            <div className="flex-row icon-name-section">
                                <div className="svg-div"><img className="svg-size" src="images/github-logo.svg" alt="userImage"/></div>
                                <div className="sub-heading">GitHub </div>
                                <a href="https://github.com/ymkwon3/web" className="sub-content">github.com/ymkwon3/web</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;