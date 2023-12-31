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
import DBKhoiKyThuatTable from "../../../components/table/DBKhoiKyThuatTable";
import "../dashboard.css";

const DBKhoiKyThuat = () => {
  const navigate = useNavigate();
  const [khoaData, setKhoaData] = useState({});
  const [loading, setLoading] = useState(true);
  const khoaNames = [
    "",
    "Khoa Kỹ thuật công trình",
    "Khoa Công nghệ Thông tin",
    "Khoa Cơ điện - Điện tử",
    "Khoa Sau Đại Học",
  ];

  const fetchData = async () => {
    try {
      const khoaData = {};
      for (const khoaName of khoaNames) {
        const khoaDataResult = await dashboardApi.getDuLieuKhoa(
          "KHOIKYTHUAT",
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
      console.log("Error khối kỹ thuật: " + error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainLayout title="Khối kỹ thuật" >
      <div className="flex justify-center py-4">
        <CustomButton
          title="Tổng quát"
          backgroundColor="#3333FF"
          onClick={() => navigate("/tong-quat")}
        />
        <CustomButton
          title="Khối Kỹ thuật"
          backgroundColor="#009900"
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
          Thống kê số liệu báo theo khối kỹ thuật
        </p>
      </div>
      <div className="flex justify-center">
        {loading === true ? (
          <>
            <Skeleton active />
          </>
        ) : (
          <DBKhoiKyThuatTable
            cakhoi={khoaData[""]}
            codiendientu={khoaData["Khoa Cơ điện - Điện tử"]}
            kythuatcongtrinh={khoaData["Khoa Kỹ thuật công trình"]}
            congnghethongtin={khoaData["Khoa Công nghệ Thông tin"]}
            saudaihoc={khoaData["Khoa Sau Đại Học"]}
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
            khoaData["Khoa Cơ điện - Điện tử"]?.totalPosts,
            khoaData["Khoa Kỹ thuật công trình"]?.totalPosts,
            khoaData["Khoa Công nghệ Thông tin"]?.totalPosts,
            khoaData["Khoa Sau Đại Học"]?.totalPosts,
          ]}
          label={[
            "Tổng bài",
            "Khoa Cơ điện - Điện tử",
            "Khoa Kỹ thuật công trình",
            "Khoa Công nghệ Thông tin",
            "Khoa Sau Đại Học",
          ]}
          title="Tổng bài và số lượng bài các khoa"
          doughnut
          legend
        />
        <CustomChart
          data={khoaData["Khoa Cơ điện - Điện tử"]}
          label={[
            "Chấp nhận đăng",
            "Không chấp nhận",
            "Chưa chấp nhận",
            "Chưa đăng",
          ]}
          title="Tình trạng bài báo Khoa Cơ điện - Điện tử"
          horizontal
        />
        <CustomChart
          data={khoaData["Khoa Kỹ thuật công trình"]}
          label={[
            "Chấp nhận đăng",
            "Không chấp nhận",
            "Chưa chấp nhận",
            "Chưa đăng",
          ]}
          title="Tình trạng bài báo Khoa Kỹ thuật công trình"
        />
      </div>
      <div className="flex flex-row justify-around w-[100%] py-5">
        <CustomChart
          data={khoaData["Khoa Công nghệ Thông tin"]}
          label={[
            "Chấp nhận đăng",
            "Không chấp nhận",
            "Chưa chấp nhận",
            "Chưa đăng",
          ]}
          title="Tình trạng bài báo Khoa Công nghệ Thông tin"
        />
        <CustomChart
          data={khoaData["Khoa Sau Đại Học"]}
          label={[
            "Chấp nhận đăng",
            "Không chấp nhận",
            "Chưa chấp nhận",
            "Chưa đăng",
          ]}
          title="Tình trạng bài báo Khoa Sau Đại Học"
          pie
          legend
        />
      </div>
    </MainLayout>
  );
};

export default DBKhoiKyThuat;
