/**
 * 默认入口文件
 */

import './assets/index.css'

import React from 'react'
import ReactDom from 'react-dom'

import App from './App'

// render
ReactDom.render(
	<App />,
	document.getElementById('root')
)