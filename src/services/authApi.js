import AxiosClient from "./AxiosClient";

const authApi = {
  login: (data) => {
    return AxiosClient.get(
      "tabs/TAIKHOAN/search?TaiKhoan=" +
        data?.TaiKhoan +
        "&MatKhau=" +
        data?.MatKhau +
        "*"
    );
  },
  register: (data) => {
    return AxiosClient.post("tabs/TAIKHOAN", {
      TaiKhoan: data.TaiKhoan,
      MatKhau: data.MatKhau,
      HoTen: data.HoTen,
      ChucVu: data.ChucVu,
      MaNhanVien: data.MaNhanVien,
    });
  },
  checked: (data) => {
    return AxiosClient.get(
      "tabs/TAIKHOAN/search?TaiKhoan=" + data?.TaiKhoan + "*"
    );
  },
};

export default authApi;
