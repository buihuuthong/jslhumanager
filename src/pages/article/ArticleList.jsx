import { ExclamationCircleFilled } from "@ant-design/icons";
import { Form, Modal, Skeleton, notification } from "antd";
import React, { useEffect, useState } from "react";
import ArticleTable from "../../components/ArticleTable";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomSelector from "../../components/CustomSelector";
import {
  BOOL,
  DEPARTMENT,
  OPPONENT,
  PROGRESS,
  PUBLIC,
  STATE,
  TODO,
} from "../../constants/list";
import MainLayout from "../../layouts/MainLayout";
import serviceApi from "../../services/serviceApi";

const ArticleList = () => {
  const { confirm } = Modal;
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [data, setData] = useState([]);
  const [valuesChange, setValuesChange] = useState(false);
  const [activekey, setActivekey] = useState(1);
  const [loading, setLoading] = useState(true);
  const [tabKey, setTabKey] = useState();
  const [currentDate, setCurrentDate] = useState();
  
  // Lấy danh sách bài báo
  const getDanhSach = async (tabs, key) => {
    try {
      onCreate();
      setLoading(true);
      setActivekey(key ? key : 1);
      const result = await serviceApi.getDuLieu(tabs ? tabs : "KHOIKYTHUAT");
      setData(result);
      setLoading(false);
      setTabKey(tabs);
    } catch (error) {
      console.log("Error quản lý báo các khối: " + error);
      setLoading(false);
    }
  };

  // Xử lý tự động lấy danh sách khi tải trang
  useEffect(() => {
    getDanhSach();
  }, []);

  // Lấy thông tin bài báo theo row index
  const getBaiBao = async (tabs, index) => {
    setValuesChange(true);
    try {
      const result = await serviceApi.getBaiBao(tabs, index);
      setTabKey(tabs);
      form.setFieldsValue(result[0]);
      setCurrentDate(result[0]?.NgayTao);
    } catch (error) {
      console.log(error);
    }
  };

  // Cập nhật hoặc thêm bài báo
  const onFinish = async (data) => {
    try {
      // Nếu ấn vào nút chi tiết
      if (valuesChange === true) {
        // Cập nhật bài báo
        await serviceApi.updateBaiBao(
          tabKey ? tabKey : "KHOIKYTHUAT",
          data.MaSo,
          data,
          currentDate
        );
        api.success({
          message: "Thành công",
          description: "Cập nhật thông tin bài báo thành công",
        });
        getDanhSachWithTab(tabKey ? tabKey : "KHOIKYTHUAT");
        onCreate();
      } else {
        // Thêm bài báo mới
        await serviceApi.createBaiBao(tabKey ? tabKey : "KHOIKYTHUAT", data);
        api.success({
          message: "Thành công",
          description: "Thêm bài báo thành công",
        });
        getDanhSachWithTab(tabKey ? tabKey : "KHOIKYTHUAT");
        onCreate();
      }
    } catch (error) {
      // Hiển thị lỗi
      api.success({
        message: "Thất bại",
        description: `Lỗi hệ thống:${error.message}`,
      });
      onCreate();
    }
  };

  // Hiển thị modal xác nhận xóa bài báo
  const showDeleteConfirm = (tabs, index) => {
    confirm({
      title: "Bạn muốn xóa bài báo này?",
      icon: <ExclamationCircleFilled />,
      content: "Ấn xác nhận bài báo sẽ được xóa vĩnh viễn",
      okText: "Xác nhận",
      okType: "danger",
      cancelText: "Hủy",
      centered: true,
      onOk() {
        deleteBaiBao(tabs, index);
      },
      onCancel() {},
    });
  };

  // Xóa bài báo
  const deleteBaiBao = async (tabs, index) => {
    try {
      await serviceApi.deleteBaiBao(tabs, index);
      api.success({
        message: "Thành công",
        description: "Xóa bài báo thành công",
      });
      getDanhSachWithTab(tabs);
    } catch (error) {
      // Hiển thị lỗi
      api.success({
        message: "Thất bại",
        description: `Lỗi hệ thống:${error.message}`,
      });
    }
  };

  // Xử lý lấy danh sách với tabs và key
  const getDanhSachWithTab = async (tabs) => {
    try {
      await getDanhSach(
        tabs,
        tabs === "KHOIKYTHUAT"
          ? 1
          : tabs === "KHOIHOADUOC"
          ? 2
          : tabs === "KHOIKINHTE"
          ? 3
          : tabs === "KHOIXAHOI"
          ? 4
          : null
      );
    } catch (error) {
      console.log("getDanhSachWithTab error: " + error);
    }
  };

  // Nếu nhấn nút thêm (phía trên/ bên trái)
  const onCreate = () => {
    form.resetFields();
    setValuesChange(false);
  };

  return (
    <MainLayout title="Quản lý báo các khối" selectedKeys={"2"}>
      <div className="flex justify-center pb-2">
        <CustomButton
          title="Khối Kỹ thuật"
          backgroundColor={activekey === 1 ? "#009900" : "#3333FF"}
          onClick={() => getDanhSach("KHOIKYTHUAT", 1)}
        />
        <CustomButton
          title="Khối Hóa dược"
          backgroundColor={activekey === 2 ? "#009900" : "#3333FF"}
          onClick={() => getDanhSach("KHOIHOADUOC", 2)}
        />
        <CustomButton
          title="Khối Kinh tế"
          backgroundColor={activekey === 3 ? "#009900" : "#3333FF"}
          onClick={() => getDanhSach("KHOIKINHTE", 3)}
        />
        <CustomButton
          title="Khối Xã hội"
          backgroundColor={activekey === 4 ? "#009900" : "#3333FF"}
          onClick={() => getDanhSach("KHOIXAHOI", 4)}
        />
      </div>
      <Form name="control-ref" form={form} onFinish={onFinish}>
        <div className="flex justify-between">
          <Form.Item
            name="MaSo"
            style={{ width: "5%" }}
            rules={[
              {
                required: true,
                message: "Nhập mã số",
              },
            ]}
          >
            <CustomInput placeholder="Mã số" />
          </Form.Item>
          <Form.Item
            name="TenTacGia"
            style={{ width: "15%" }}
            rules={[
              {
                required: true,
                message: "Nhập tên tác giả",
              },
            ]}
          >
            <CustomInput placeholder="Tên tác giả" />
          </Form.Item>
          <Form.Item
            name="DonVi"
            style={{ width: "20%" }}
            rules={[
              {
                required: true,
                message: "Chọn đơn vị",
              },
            ]}
          >
            <CustomSelector placeholder="Đơn vị" options={DEPARTMENT} />
          </Form.Item>
          <Form.Item
            name="TenBaiBao"
            style={{ width: "35%" }}
            rules={[
              {
                required: true,
                message: "Nhập tên bài báo",
              },
            ]}
          >
            <CustomInput placeholder="Tên bài báo" />
          </Form.Item>
          <Form.Item name="PhanBien" style={{ width: "10%" }}>
            <CustomSelector placeholder="Phản biện" options={OPPONENT} />
          </Form.Item>
          <Form.Item name="TienDo" style={{ width: "10%" }}>
            <CustomSelector placeholder="Tiến độ" options={PROGRESS} />
          </Form.Item>
        </div>
        <div className="flex justify-between">
          <Form.Item name="KienTraTrungLapLan1" style={{ width: "10%" }}>
            <CustomInput placeholder="KT trùng lắp lần 1" />
          </Form.Item>
          <Form.Item name="KienTraTrungLapLan2" style={{ width: "10%" }}>
            <CustomInput placeholder="KT trùng lắp lần 2" />
          </Form.Item>
          <Form.Item name="KienTraTrungLapLan3" style={{ width: "10%" }}>
            <CustomInput placeholder="KT trùng lắp lần 3" />
          </Form.Item>
          <Form.Item name="ChapNhanChoGuiPhanBien" style={{ width: "15%" }}>
            <CustomSelector
              placeholder="Chấp nhận gửi phản biện"
              options={BOOL}
            />
          </Form.Item>
          <Form.Item name="HoanThanh2PhanBien" style={{ width: "15%" }}>
            <CustomSelector
              placeholder="Hoàn 2 thành phản biện"
              options={BOOL}
            />
          </Form.Item>
          <Form.Item name="ChapNhanXuatBan" style={{ width: "15%" }}>
            <CustomSelector placeholder="Chấp nhận xuất bản" options={BOOL} />
          </Form.Item>
          <Form.Item name="ChapNhanDang" style={{ width: "15%" }}>
            <CustomSelector placeholder="Chấp nhận đăng" options={PUBLIC} />
          </Form.Item>
        </div>
        <div className="flex justify-between">
          <Form.Item name="DaLamGiayChungNhan" style={{ width: "10%" }}>
            <CustomSelector placeholder="Giấy chứng nhận" options={TODO} />
          </Form.Item>
          <Form.Item name="SoChungNhan" style={{ width: "10%" }}>
            <CustomInput placeholder="Số chứng nhận" />
          </Form.Item>
          <Form.Item name="NamChungNhan" style={{ width: "10%" }}>
            <CustomInput placeholder="Năm chứng nhận" />
          </Form.Item>
          <Form.Item name="SoXuatBan" style={{ width: "10%" }}>
            <CustomInput placeholder="Số xuất bản" />
          </Form.Item>
          <Form.Item name="NamXuatBan" style={{ width: "10%" }}>
            <CustomInput placeholder="Năm xuất bản" />
          </Form.Item>
          <Form.Item name="TrangThai" style={{ width: "10%" }}>
            <CustomSelector placeholder="Trạng thái" options={STATE} />
          </Form.Item>
          <Form.Item name="MaDOI" style={{ width: "10%" }}>
            <CustomInput placeholder="Mã DOI" />
          </Form.Item>
          <Form.Item name="GhiChu" style={{ width: "20%" }}>
            <CustomInput placeholder="Ghi chú" />
          </Form.Item>
        </div>
        <div className="flex justify-center">
          {valuesChange ? (
            <div className="w-[10%] h-[5%] mr-6">
              <CustomButton
                backgroundColor="#FF3333"
                onClick={onCreate}
                title="Hủy"
              />
            </div>
          ) : null}
          <Form.Item style={{ width: "10%" }}>
            {contextHolder}
            <CustomButton
              backgroundColor="#3333FF"
              htmlType="submit"
              title={valuesChange ? "Cập nhật" : "Thêm"}
            />
          </Form.Item>
        </div>
      </Form>

      {loading === true ? (
        <>
          <Skeleton active />
        </>
      ) : (
        <ArticleTable
          data={data}
          onDetail={(tabs, index) => getBaiBao(tabs, index)}
          onDelete={(tabs, index) => showDeleteConfirm(tabs, index)}
        />
      )}
    </MainLayout>
  );
};

export default ArticleList;
