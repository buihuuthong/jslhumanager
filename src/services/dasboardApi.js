import AxiosClient from "./AxiosClient";

const dashboardApi = {
    getDuLieuKhoi: (Khoi) => {
      return AxiosClient.get("tabs/"+ Khoi);
    },
    getDuLieuKhoa: (Khoi, Khoa) => {
      return AxiosClient.get("tabs/" + Khoi + "/DonVi/*" + Khoa + "*");
    },
    getDuLieuTongQuat: (Khoi) => {
      return AxiosClient.get("tabs/" + Khoi);
    },
}

export default dashboardApi;