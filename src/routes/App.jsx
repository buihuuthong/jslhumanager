import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ArticleList from "../pages/article/ArticleList";
import DBKhoiHoaDuoc from "../pages/dashboard/khoihoaduoc/DBKhoiHoaDuoc";
import DBKhoiKinhTe from "../pages/dashboard/khoikinhte/DBKhoiKinhTe";
import DBKhoiKyThuat from "../pages/dashboard/khoikythuat/DBKhoiKyThuat";
import DBKhoiXaHoi from "../pages/dashboard/khoixahoi/DBKhoiXaHoi";
import DBTongQuat from "../pages/dashboard/tongquat/DBTongQuat";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/dasboard" element={<DashBoard />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="/tong-quat" element={<DBTongQuat />} />
        <Route path="/khoi-ky-thuat" element={<DBKhoiKyThuat />} />
        <Route path="/khoi-hoa-duoc" element={<DBKhoiHoaDuoc />} />
        <Route path="/khoi-kinh-te" element={<DBKhoiKinhTe />} />
        <Route path="/khoi-xa-hoi" element={<DBKhoiXaHoi />} />
        <Route path="/quan-ly-bao" element={<ArticleList />} />
        {/* <Route path="/" element={<ArticleList />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
