import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, notification } from "antd";
import React from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import "../../index.css";
import authApi from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChecked = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onFinish = async (value) => {
    try {
      const result = await authApi.login(value);
      console.log(result[0]);
      if (result[0] === undefined) {
        notification.error({
          message: "Đăng nhập thất bại",
          description: "Tài khoản và mật khẩu không đúng",
        });
      } else {
        dispatch(setUserInfo(result[0]));
        notification.success({
          message: "Đăng nhập thành công",
          description: "Đăng nhập tài khoản thành công!",
        });
        navigate("/tong-quat");
      }
    } catch (e) {
      console.log(e);
      notification.error({
        message: "Đăng nhập thất bại",
        description: "Tài khoản và mật khẩu không đúng",
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
      <h1 className="font-semibold text-xl my-4">Đăng nhập</h1>
      <Form
        name="login"
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
          <Input.Password placeholder="Mật khẩu" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={onChecked}>Nhớ mật khẩu</Checkbox>
        </Form.Item>
        <Form.Item>
          <CustomButton
            htmlType="submit"
            title="Đăng nhập"
            backgroundColor="#3333FF"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
