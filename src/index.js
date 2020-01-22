import React from 'react';
import ReactDOM from 'react-dom'
import './styles/styles.sass'

import {App} from './app'

const root = document.getElementById('root')

ReactDOM.render(<App appElement={root}/>, root)

