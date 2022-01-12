import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import '../css/App.css';
import '../css/postWrite.css';

import * as API from './Api.jsx';

function App(props) {

    return (
        <div className='box-shadow-inset input-page flex-column'>
            <div className="input-container flex-column">
                <input type="text" />
            </div>
        </div>
    );
}

export default App;