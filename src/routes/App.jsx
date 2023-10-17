import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";
import ArticleList from "../pages/article/ArticleList";
import DBKhoiKyThuat from "../pages/dashboard/khoikythuat/DBKhoiKyThuat";
import DBKhoiHoaDuoc from "../pages/dashboard/khoihoaduoc/DBKhoiHoaDuoc";
import DBKhoiKinhTe from "../pages/dashboard/khoikinhte/DBKhoiKinhTe";
import DBKhoiXaHoi from "../pages/dashboard/khoixahoi/DBKhoiXaHoi";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/dasboard" element={<DashBoard />} /> */}
        <Route path="/tong-quat" element={<DashBoard />} />
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
