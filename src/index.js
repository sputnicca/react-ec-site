import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from 'components/App'
import 'css/style.scss'

// コンポーネントをrootにレンダリング
const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
root.render(<App />)
