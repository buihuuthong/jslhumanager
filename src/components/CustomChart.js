import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CustomChart = ({
  title,
  label,
  data,
  vertical,
  horizontal,
  stacked,
  line,
  pie,
  doughnut,
  legend,
  position,
  width,
  height
}) => {
  const labels = label;

  const numOfColumns = labels.length; // Số lượng cột có thể biến đổi

  // Hàm để tạo màu sắc ngẫu nhiên
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Tạo mảng chứa các màu sắc cho từng cột (tùy theo số lượng cột)
  const customColors = Array.from({ length: numOfColumns }, () =>
    getRandomColor()
  );

  const chartData = {
    labels,
    datasets: stacked
      ? [
          {
            label: "Chấp nhận",
            backgroundColor: 'rgb(53, 162, 235)',
            borderColor: customColors.map((color) => color.replace("0.2", "1")),
            borderWidth: 1,
            data: [
              data?.TongBaoKyThuatChapNhan,
              data?.TongBaoKhoiHoaDuocChapNhan,
              data?.TongBaoKhoiKinhTeChapNhan,
              data?.TongBaoKhoiXaHoiChapNhan,
            ],
          },
          {
            label: "Không chấp nhận",
            backgroundColor: 'rgb(75, 192, 12)',
            borderColor: customColors.map((color) => color.replace("0.2", "1")),
            borderWidth: 1,
            data: [
              data?.TongBaoKyThuatKhongChapNhan,
              data?.TongBaoKhoiHoaDuocKhongChapNhan,
              data?.TongBaoKhoiKinhTeKhongChapNhan,
              data?.TongBaoKhoiXaHoiKhongChapNhan,
            ],
          },
          {
            label: "Chưa chấp nhận",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: customColors.map((color) => color.replace("0.2", "1")),
            borderWidth: 1,
            data: [
              data?.TongBaoKyThuatChuaChapNhan,
              data?.TongBaoKhoiHoaDuocChuaChapNhan,
              data?.TongBaoKhoiKinhTeChuaChapNhan,
              data?.TongBaoKhoiXaHoiChuaChapNhan,
            ],
          },
        ]
      : [
          {
            label: null,
            backgroundColor: customColors,
            borderColor: customColors.map((color) => color.replace("0.2", "1")),
            borderWidth: 1,
            data:
              title === "Số lượng bài báo"
                ? [
                    data?.totalPosts,
                    data?.schoolPosts,
                    data?.outsideSchoolPosts,
                  ]
                : title === "Số lượng tác giả"
                ? [
                    data?.totalAuthors,
                    data?.totalAuthorsInSideSchool,
                    data?.totalAuthorsOutSideSchool,
                  ]
                : title === "Tình trạng bài báo"
                ? [
                    data?.acceptedPosts,
                    data?.rejectedPosts,
                    data?.pendingAcceptance,
                    data?.unpublishedPosts,
                  ]
                : title === "Tổng bài và số lượng bài các khoa"
                ? data
                : title === "Tổng quát số lượng bài báo"
                ? [
                    data?.TongBai,
                    data?.ChuaChapNhan,
                    data?.ChapNhanDang,
                    data?.KhongChapNhan,
                    data?.DaDang,
                    data?.ChuaDang,
                  ]
                : title === "Tổng quát bài báo và tác giả"
                ? [
                    data?.BaiTrongTruong,
                    data?.BaiNgoaiTruong,
                    data?.TacGiaTrongTruong,
                    data?.TacGiaNgoaiTruong,
                  ]
                : // : title === "Tổng quát báo các khối"
                // ? [
                //     data?.TongBaoKhoiKyThuat,
                //     data?.TongBaoKhoiHoaDuoc,
                //     data?.TongBaoKhoiKinhTe,
                //     data?.TongBaoKhoiXaHoi,
                //   ]
                title === "Tổng số báo 2023 - 2024"
                ? [data?.Nam2023, data?.Nam2024]
                : [
                    data?.acceptedPosts,
                    data?.rejectedPosts,
                    data?.pendingAcceptance,
                    data?.unpublishedPosts,
                  ],
          },
        ],
  };

  const options = {
    indexAxis: horizontal ? "y" : null,
    interaction: stacked ?  {
      mode: 'index',
      intersect: false,
    } : null,
    responsive: false,
    anchor: "end",
    plugins: {
      legend: {
        display: legend ? true : false,
        position: position ? position : "left", // Điều chỉnh vị trí của legend theo ý muốn
      },
      title: {
        display: true,
        text: title,
        position: "top",
        font: {
          size: 16, // Điều chỉnh kích thước phông chữ theo ý muốn
          weight: "bold", // Điều chỉnh độ đậm của phông chữ (normal, bold, lighter, etc.)
        },
      },
    },
    scales:
      pie || doughnut
        ? null
        : stacked
        ? {
            x: {
              stacked: true,
              beginAtZero: true,
            },
            y: {
              stacked: true,
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return Number.isInteger(value) ? value : "";
                },
              },
            },
          }
        : {
            x: horizontal
              ? {
                  beginAtZero: true,
                  ticks: {
                    callback: function (value) {
                      return Number.isInteger(value) ? value : "";
                    },
                  },
                }
              : null,
            y: horizontal
              ? {
                  beginAtZero: true,
                  ticks: {
                    callback: function (value, index, values) {
                      return labels[index];
                    },
                  },
                }
              : {
                  beginAtZero: true,
                  ticks: {
                    callback: function (value) {
                      return Number.isInteger(value) ? value : "";
                    },
                  },
                },
          },
  };

  return pie ? (
    <Pie data={chartData} options={options} width={"450px"} height={"350px"} />
  ) : doughnut ? (
    <Doughnut
      data={chartData}
      options={options}
      width={"450px"}
      height={"350px"}
    />
  ) : line ? (
    <Line data={chartData} options={options} width={"450px"} height={"350px"} />
  ) : (
    <Bar data={chartData} options={options} width={ width ? width : "450px"} height={ height ? height : "350px"} />
  );
};

export default CustomChart;
