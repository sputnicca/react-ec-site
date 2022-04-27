import React from "react"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import App from "components/App"
// import Login from "components/Login"
// import NotFound from "components/NotFound"

const Router = () => {
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // <BrowserRouter>
  //   <Routes>
  //     <Route exact path="/" element={<App />}>
  //       <Route path="/login" element={<Login />} />
  //       <Route element={<NotFound />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
}

export default Router