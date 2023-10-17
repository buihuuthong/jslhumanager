import { Button, Checkbox, Table } from "antd";
import React, { useState } from "react";
import { DEPARTMENT, STATE } from "../constants/list";
const ArticleTable = ({ data, onDetail, onDelete }) => {
  const columns = [
    {
      title: "",
      dataIndex: "key",
      key: "key",
      render: (text, record, index) => (
        // Chọn ô
        <Checkbox onClick={() => onSelectChange(index)} />
      ),
    },
    {
      title: "Mã số",
      dataIndex: "MaSo",
      key: "MaSo",
    },
    {
      title: "Khối",
      dataIndex: "Khoi",
      key: "Khoi",
    },
    {
      title: "Tên tác giả",
      dataIndex: "TenTacGia",
      key: "TenTacGia",
    },
    {
      title: "Đơn vị",
      dataIndex: "DonVi",
      key: "DonVi",
      filters: DEPARTMENT,
      onFilter: (value, record) => record.DonVi?.startsWith(value),
      filterSearch: true,
    },
    {
      title: "Tên bài báo",
      dataIndex: "TenBaiBao",
      key: "TenBaiBao",
    },
    {
      title: "Trạng thái",
      dataIndex: "TrangThai",
      key: "TrangThai",
      filters: STATE,
      onFilter: (value, record) => record.TrangThai?.startsWith(value),
      filterSearch: true,
    },
    {
      title: "",
      key: "action",
      render: (text, record, index) => (
        <>
          <Button
            style={{
              backgroundColor: "#00CC00",
              color: "#fff",
            }}
            onClick={() =>
              onDetail(
                record.Khoi === "Khối Kỹ thuật"
                  ? "KHOIKYTHUAT"
                  : record.Khoi === "Khối Hóa dược"
                  ? "KHOIHOADUOC"
                  : record.Khoi === "Khối Kinh tế"
                  ? "KHOIKINHTE"
                  : record.Khoi === "Khối Xã hội"
                  ? "KHOIXAHOI"
                  : null,
                index
              )
            }
          >
            Chi tiết
          </Button>
          <Button
            style={{
              backgroundColor: "#ff3333",
              color: "#fff",
            }}
            onClick={() =>
              onDelete(
                record.Khoi === "Khối Kỹ thuật"
                  ? "KHOIKYTHUAT"
                  : record.Khoi === "Khối Hóa dược"
                  ? "KHOIHOADUOC"
                  : record.Khoi === "Khối Kinh tế"
                  ? "KHOIKINHTE"
                  : record.Khoi === "Khối Xã hội"
                  ? "KHOIXAHOI"
                  : null,
                index
              )
            }
          >
            Xóa bài
          </Button>
        </>
      ),
    },
  ];

  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Hàm xử lý ô được chọn
  const onSelectChange = (index) => {
    // setSelectedRowKeys(index);
  };

  return (
    <Table
      style={{ borderColor: "#000" }}
      bordered
      columns={columns}
      dataSource={data}
    />
  );
};
export default ArticleTable;
