import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'css/style.scss'
import App from 'components/App'
import Login from 'components/Login'
import NotFound from 'components/NotFound'
import { createRoot } from "react-dom/client"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)
