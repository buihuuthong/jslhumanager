import AxiosClient from "./AxiosClient";
import moment from 'moment'

const serviceApi = {
  getDuLieu: (tabs) => {
    return AxiosClient.get("tabs/" + tabs);
  },
  getBaiBao: (tabs, index) => {
    return AxiosClient.get("tabs/" + tabs + "/" + index);
  },
  updateBaiBao: (tabs, MaSo, data, currentDate) => {
    return AxiosClient.put("tabs/" + tabs + "/MaSo/" + MaSo, {
      MaSo: data.MaSo,
      Khoi:
        tabs === "KHOIKYTHUAT"
          ? "Khối Kỹ thuật"
          : tabs === "KHOIHOADUOC"
          ? "Khối Hóa dược"
          : tabs === "KHOIKINHTE"
          ? "Khối Kinh tế"
          : tabs === "KHOIXAHOI"
          ? "Khối Xã hội"
          : null,
      TenTacGia: data.TenTacGia,
      DonVi: data.DonVi,
      TenBaiBao: data.TenBaiBao,
      PhanBien: data.PhanBien,
      TienDo: data.TienDo,
      KienTraTrungLapLan1: data.KienTraTrungLapLan1,
      KienTraTrungLapLan2: data.KienTraTrungLapLan2,
      KienTraTrungLapLan3: data.KienTraTrungLapLan3,
      ChapNhanChoGuiPhanBien: data.ChapNhanChoGuiPhanBien,
      HoanThanh2PhanBien: data.HoanThanh2PhanBien,
      ChapNhanXuatBan: data.ChapNhanXuatBan,
      ChapNhanDang: data.ChapNhanDang,
      DaLamGiayChungNhan: data.DaLamGiayChungNhan,
      SoChungNhan: data.SoChungNhan,
      NamChungNhan: data.NamChungNhan,
      SoXuatBan: data.SoXuatBan,
      NamXuatBan: data.NamXuatBan,
      TrangThai: data.TrangThai,
      MaDOI: data.MaDOI,
      GhiChu: data.GhiChu,
      NgayTao: currentDate,
    });
  },
  createBaiBao: (tabs, data) => {
    return AxiosClient.post("tabs/" + tabs, {
      MaSo: data.MaSo,
      Khoi:
        tabs === "KHOIKYTHUAT"
          ? "Khối Kỹ thuật"
          : tabs === "KHOIHOADUOC"
          ? "Khối Hóa dược"
          : tabs === "KHOIKINHTE"
          ? "Khối Kinh tế"
          : tabs === "KHOIXAHOI"
          ? "Khối Xã hội"
          : null,
      TenTacGia: data.TenTacGia,
      DonVi: data.DonVi,
      TenBaiBao: data.TenBaiBao,
      PhanBien: data.PhanBien,
      TienDo: data.TienDo,
      KienTraTrungLapLan1: data.KienTraTrungLapLan1,
      KienTraTrungLapLan2: data.KienTraTrungLapLan2,
      KienTraTrungLapLan3: data.KienTraTrungLapLan3,
      ChapNhanChoGuiPhanBien: data.ChapNhanChoGuiPhanBien,
      HoanThanh2PhanBien: data.HoanThanh2PhanBien,
      ChapNhanXuatBan: data.ChapNhanXuatBan,
      ChapNhanDang: data.ChapNhanDang,
      DaLamGiayChungNhan: data.DaLamGiayChungNhan,
      SoChungNhan: data.SoChungNhan,
      NamChungNhan: data.NamChungNhan,
      SoXuatBan: data.SoXuatBan,
      NamXuatBan: data.NamXuatBan,
      TrangThai: data.TrangThai,
      MaDOI: data.MaDOI,
      GhiChu: data.GhiChu,
      NgayTao: moment().format('DD/MM/YYYY'),
    });
  },
  deleteBaiBao: (tabs, index) => {
    return AxiosClient.delete("tabs/" + tabs + "/" + index);
  },
};

export default serviceApi;
