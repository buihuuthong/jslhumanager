import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import CustomChart from "../../components/CustomChart";
import DBTongQuatTable from "../../components/table/DBTongQuatTable";
import MainLayout from "../../layouts/MainLayout";
import dashboardApi from "../../services/dasboardApi";
import "./dashboard.css";

const DashBoard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const khoaDataResult = await dashboardApi.getDuLieuTongQuat("TONGQUAT");
      setData(khoaDataResult[0]);
      setLoading(false);
    } catch (error) {
      console.log("Error tổng quát: " + error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainLayout>
      <div className="flex justify-center py-4">
        <CustomButton
          title="Tổng quát"
          backgroundColor="#009900"
          onClick={() => navigate("/tong-quat")}
        />
        <CustomButton
          title="Khối Kỹ thuật"
          backgroundColor="#3333FF"
          onClick={() => navigate("/khoi-ky-thuat")}
        />
        <CustomButton
          title="Khối Hóa dược"
          backgroundColor="#3333FF"
          onClick={() => navigate("/khoi-hoa-duoc")}
        />
        <CustomButton
          title="Khối Kinh tế"
          backgroundColor="#3333FF"
          onClick={() => navigate("/khoi-kinh-te")}
        />
        <CustomButton
          title="Khối Xã hội"
          backgroundColor="#3333FF"
          onClick={() => navigate("/khoi-xa-hoi")}
        />
      </div>
      <div className="flex justify-center py-4">
        <p
          className=""
          style={{
            fontSize: 24,
            color: "#3333FF",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Thống kê số liệu báo tổng quát
        </p>
      </div>
      <div className="flex justify-center">
        {loading === true ? (
          <>
            <Skeleton active />
          </>
        ) : (
          <DBTongQuatTable data={data} />
        )}
      </div>
      <div className="flex justify-center py-4">
        <p
          className=""
          style={{
            fontSize: 24,
            color: "#3333FF",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Biểu đồ thống kê số liệu
        </p>
      </div>
      <div className="flex flex-row justify-around w-[100%] py-5">
        <CustomChart
          data={data}
          label={[
            "Tổng bài",
            "Chưa chấp nhận",
            "Chấp nhận đăng",
            "Không chấp nhận",
            "Đã đăng",
            "Chưa đăng",
          ]}
          title="Tổng quát số lượng bài báo"
          horizontal
        />
        <CustomChart
          data={data}
          label={[
            "Bài báo trong trường",
            "Bài báo ngoài trường",
            "Tác giả trong trường",
            "Tác giả ngoài trường",
          ]}
          title="Tổng quát bài báo và tác giả"
          horizontal
        />
      </div>
      <div className="flex flex-row justify-around w-[100%] py-5">
        <CustomChart
          data={data}
          label={[
            "Khối kỹ thuật",
            "Khối hóa dược",
            "Khối kinh tế",
            "Khối xã hội",
          ]}
          title="Tổng quát báo các khối"
          stacked
          legend
          position="right"
          width={"700px"}
        />
        <CustomChart
          data={data}
          label={["2023", "2024"]}
          title="Tổng số báo 2023 - 2024"
          doughnut
          legend
        />
      </div>
    </MainLayout>
  );
};

export default DashBoard;
