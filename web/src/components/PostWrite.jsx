import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import '../css/App.css';
import '../css/PostWrite.css';

import * as API from './Api.jsx';

function App(props) {

    return (
        <div className='box-shadow-inset input-page'>
            <table className="input-container flex-column">
                <tbody>
                    <tr>
                        <td className="thead">방명록 작성</td>
                    </tr>
                    <tr>
                        <td className='black-12pt'>
                            제목
                        </td>
                        <td>
                            <input type="text" placeholder='제목을 입력해주세요!' />
                        </td>
                    </tr>
                    <tr>
                        <td className='black-12pt'>
                            작성자
                        </td>
                        <td>
                            <input type="text" placeholder='작성자를 입력해주세요!' />
                        </td>
                    </tr>
                    <tr>
                        <td className='black-12pt'>
                            내용
                        </td>
                        <td>
                            <input type="text" placeholder='내용을 입력해주세요!' />
                        </td>
                    </tr>
                    <tr>
                        <td className='black-12pt'>
                            비밀번호
                        </td>
                        <td>
                            <input type="password" placeholder='비밀번호를 입력해주세요!' />
                        </td>
                    </tr>
                    <tr>
                        <td className='black-12pt'>
                            비밀번호 확인
                        </td>
                        <td>
                            <input type="password" placeholder='비밀번호를 확인해주세요!' />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;