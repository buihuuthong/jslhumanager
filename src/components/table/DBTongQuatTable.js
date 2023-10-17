import React from "react";

const DBTongQuatTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Tổng bài</th>
            <th>SL bài chưa chấp nhận</th>
            <th>SL bài chấp nhận đăng</th>
            <th>SL bài không chấp nhận đăng</th>
            <th>SL bài đã đăng</th>
            <th>SL bài chưa đăng</th>
            <th>SL bài trong trường</th>
            <th>SL bài ngoài trường</th>
            <th>Tác giả trong trường</th>
            <th>Tác giả ngoài trường</th>
            <th>Tổng báo kỹ thuật</th>
            <th>Tổng báo kinh tế</th>
            <th>Tổng báo hóa dược</th>
            <th>Tổng báo xã hội</th>
            <th>Tổng báo năm 2023</th>
            <th>Tổng báo năm 2024</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data?.TongBai}</td>
            <td>{data?.ChuaChapNhan}</td>
            <td>{data?.ChapNhanDang}</td>
            <td>{data?.KhongChapNhan}</td>
            <td>{data?.DaDang}</td>
            <td>{data?.ChuaDang}</td>
            <td>{data?.BaiTrongTruong}</td>
            <td>{data?.BaiNgoaiTruong}</td>
            <td>{data?.TacGiaTrongTruong}</td>
            <td>{data?.TacGiaNgoaiTruong}</td>
            <td>{data?.TongBaoKhoiKyThuat}</td>
            <td>{data?.TongBaoKhoiHoaDuoc}</td>
            <td>{data?.TongBaoKhoiKinhTe}</td>
            <td>{data?.TongBaoKhoiXaHoi}</td>
            <td>{data?.Nam2023}</td>
            <td>{data?.Nam2024}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DBTongQuatTable;
