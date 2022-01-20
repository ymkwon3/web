import { useRef } from 'react'

import '../css/App.css';
import '../css/Footer.css';

function App(props) {

    return (
        <>
            <div className="footer flex-column">
                <div className="footer-title">
                    계속해서 업데이트중입니다!
                </div>
                <div className="flex-row">
                    <div className="flex-row icon-name-section">
                        <div className="svg-div"><img className="svg-size" src="images/user.svg" alt="userImage" /></div>
                        <div className="sub-heading">이름 </div>
                        <div className="sub-content">권영민</div>
                    </div>
                    <div className="flex-row icon-name-section">
                        <div className="svg-div"><img className="svg-size" src="images/calendar.svg" alt="userImage" /></div>
                        <div className="sub-heading">생년월일 </div>
                        <div className="sub-content">96.03.11</div>
                    </div>
                    <div className="flex-row icon-name-section">
                        <div className="svg-div"><img className="svg-size" src="images/phone.svg" alt="userImage" /></div>
                        <div className="sub-heading">연락처 </div>
                        <div className="sub-content">010-8538-3563</div>
                    </div>

                    <div className="flex-row icon-name-section">
                        <div className="svg-div"><img className="svg-size" src="images/address.svg" alt="userImage" /></div>
                        <div className="sub-heading">주소지 </div>
                        <div className="sub-content">상경의 꿈</div>
                    </div>
                    <div className="flex-row icon-name-section">
                        <div className="svg-div"><img className="svg-size" src="images/email.svg" alt="userImage" /></div>
                        <div className="sub-heading">이메일 </div>
                        <div className="sub-content">ymkwon3@gmail.com</div>
                    </div>
                    <div className="flex-row icon-name-section">
                        <div className="svg-div"><img className="svg-size" src="images/education.svg" alt="userImage" /></div>
                        <div className="sub-heading">학력 </div>
                        <div className="sub-content">국립경상대학교 컴퓨터과학과</div>
                    </div>
                </div>
                <div className="footer-update">
                    updated on January 18, 2022
                </div>
            </div>
        </>
    );
}

export default App;