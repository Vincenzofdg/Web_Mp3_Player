import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux/store";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Album from "./Pages/Album";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Provider store={ store }>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
