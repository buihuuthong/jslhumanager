import React, { useEffect, useState } from "react";
import CustomChart from "../../../components/CustomChart";
import MainLayout from "../../../layouts/MainLayout";
import dashboardApi from "../../../services/dasboardApi";
import {
  countAcceptedPosts,
  countOutsideSchoolPosts,
  countPendingAcceptance,
  countRejectedPosts,
  countSchoolPosts,
  countTotalAuthors,
  countTotalPosts,
  countUniqueNames,
  countUnpublishedPosts,
} from "../../../utils/method";

import { Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";
import DBKhoiHoaDuocTable from "../../../components/table/DBKhoiHoaDuocTable";
import "../dashboard.css";

const DBKhoiHoaDuoc = () => {
  const navigate = useNavigate();
  const [khoaData, setKhoaData] = useState({});
  const [loading, setLoading] = useState(true);
  const khoaNames = ["", "Khoa Dược", "Khoa Khoa học và CNTP"];

  const fetchData = async () => {
    try {
      const khoaData = {};
      for (const khoaName of khoaNames) {
        const khoaDataResult = await dashboardApi.getDuLieuKhoa(
          "KHOIHOADUOC",
          khoaName
        );
        khoaData[khoaName] = {
          totalPosts: countTotalPosts(khoaDataResult),
          schoolPosts: countSchoolPosts(khoaDataResult),
          outsideSchoolPosts: countOutsideSchoolPosts(khoaDataResult),
          totalAuthors: countTotalAuthors(khoaDataResult),
          totalAuthorsInSideSchool: countUniqueNames(khoaDataResult, true),
          totalAuthorsOutSideSchool: countUniqueNames(khoaDataResult, false),
          acceptedPosts: countAcceptedPosts(khoaDataResult),
          rejectedPosts: countRejectedPosts(khoaDataResult),
          pendingAcceptance: countPendingAcceptance(khoaDataResult),
          unpublishedPosts: countUnpublishedPosts(khoaDataResult),
        };
      }
      setKhoaData(khoaData);
      setLoading(false);
    } catch (error) {
      console.log("Error hóa dược: " + error);
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
          backgroundColor="#3333FF"
          onClick={() => navigate("/tong-quat")}
        />
        <CustomButton
          title="Khối Kỹ thuật"
          backgroundColor="#3333FF"
          onClick={() => navigate("/khoi-ky-thuat")}
        />
        <CustomButton
          title="Khối Hóa dược"
          backgroundColor="#009900"
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
          Thống kê số liệu báo theo khối hóa dược
        </p>
      </div>
      <div className="flex justify-center">
        {loading === true ? (
          <>
            <Skeleton active />
          </>
        ) : (
          <DBKhoiHoaDuocTable
            cakhoi={khoaData[""]}
            duoc={khoaData["Khoa Dược"]}
            khcntp={khoaData["Khoa Khoa học và CNTP"]}
          />
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
      <div className="flex flex-row justify-between w-[100%] py-5">
        <CustomChart
          data={khoaData[""]}
          label={["Tổng bài", "Bài trong trường", "Bài ngoài trường"]}
          title="Số lượng bài báo"
          horizontal
        />
        <CustomChart
          data={khoaData[""]}
          label={[
            "Tổng tác giả",
            "Tác giả trong trường",
            "Tác giả ngoài trường",
          ]}
          title="Số lượng tác giả"
        />
        <CustomChart
          data={khoaData[""]}
          label={[
            "Chấp nhận đăng",
            "Không chấp nhận",
            "Chưa chấp nhận",
            "Chưa đăng",
          ]}
          title="Tình trạng bài báo"
          pie
          legend
        />
      </div>
      <div className="flex flex-row justify-between w-[100%] py-5">
        <CustomChart
          data={[
            khoaData[""]?.totalPosts,
            khoaData["Khoa Dược"]?.totalPosts,
            khoaData["Khoa Khoa học và CNTP"]?.totalPosts,
          ]}
          label={["Tổng bài", "Khoa Dược", "Khoa Khoa học và CNTP"]}
          title="Tổng bài và số lượng bài các khoa"
        />
        <CustomChart
          data={khoaData["Khoa Dược"]}
          label={[
            "Chấp nhận đăng",
            "Không chấp nhận",
            "Chưa chấp nhận",
            "Chưa đăng",
          ]}
          title="Tình trạng bài báo Khoa Dược"
          doughnut
          legend
        />
        <CustomChart
          data={khoaData["Khoa Khoa học và CNTP"]}
          label={[
            "Chấp nhận đăng",
            "Không chấp nhận",
            "Chưa chấp nhận",
            "Chưa đăng",
          ]}
          title="Tình trạng bài báo Khoa Khoa học và CNTP"
        />
      </div>
    </MainLayout>
  );
};

export default DBKhoiHoaDuoc;
