import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
 const mydiv = document.getElementById('root');
ReactDOM.render(
	<BrowserRouter>
	<App />
	</BrowserRouter>, mydiv)
