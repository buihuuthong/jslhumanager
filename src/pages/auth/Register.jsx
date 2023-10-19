import {
  ApartmentOutlined,
  FieldNumberOutlined,
  FontSizeOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Form, notification } from "antd";
import React from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import "../../index.css";
import authApi from "../../services/authApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (value) => {
    try {
      const result = await authApi.checked(value);
      if (result[0] === undefined) {
        authApi.register(value);
        notification.success({
          message: "Đăng ký tài khoản thành công",
          description: "Vui lòng đăng nhập!",
        });
        navigate('/')
      } else {
        notification.error({
          message: "Đăng ký lỗi",
          description: "Tài khoản đã tồn tại trên hệ thống",
        });
      }
    } catch (e) {
      console.log(e);
      notification.error({
        message: "Đăng nhập thất bại",
        description: e.response?.data?.message,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="demo-logo-vertical flex justify-center items-center w-[100%]">
        <img
          src={require("../../assets/logo.png")}
          width={"20%"}
          alt="Đại học Lạc Hồng"
        />
      </div>
      <h1
        style={{
          fontSize: 24,
          fontWeight: 500,
          color: "#1677ff",
        }}
      >
        Website Quản lý tạp chí - Trung tâm Nghiên cứu Khoa học và Ứng dụng
      </h1>
      <h1 className="font-semibold text-xl my-4">Đăng ký</h1>
      <Form
        name="register"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        size="large"
        className="w-[30%]"
      >
        <Form.Item
          name="TaiKhoan"
          rules={[
            {
              required: true,
              message: "Nhập tài khoản",
            },
          ]}
        >
          <CustomInput placeholder="Tài khoản" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          name="MatKhau"
          rules={[
            {
              required: true,
              message: "Nhập mật khẩu",
            },
          ]}
        >
          <CustomInput placeholder="Mật khẩu" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item
          name="HoTen"
          rules={[
            {
              required: true,
              message: "Nhập họ và tên",
            },
          ]}
        >
          <CustomInput placeholder="Họ tên" prefix={<FontSizeOutlined />} />
        </Form.Item>
        <Form.Item
          name="ChucVu"
          rules={[
            {
              required: true,
              message: "Nhập tên chức vụ",
            },
          ]}
        >
          <CustomInput placeholder="Chức vụ" prefix={<ApartmentOutlined />} />
        </Form.Item>
        <Form.Item
          name="MaNhanVien"
          rules={[
            {
              required: true,
              message: "Nhập mã nhân viên",
            },
          ]}
        >
          <CustomInput
            placeholder="Mã nhân viên"
            prefix={<FieldNumberOutlined />}
          />
        </Form.Item>

        <Form.Item>
          <CustomButton
            htmlType="submit"
            title="Đăng ký"
            backgroundColor="#3333FF"
          />
        </Form.Item>
      </Form>
      <div className="max-w-lg px-10 py-3">
        <span>
          Đã có tài khoản?{" "}
          <a href="/" style={{ color: "#3333FF" }}>
            Đăng nhập ngay
          </a>
        </span>
      </div>
    </div>
  );
};

export default Register;
