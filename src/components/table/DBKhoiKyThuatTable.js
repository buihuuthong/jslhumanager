import React from "react";

const DBKhoiKyThuatTable = ({
  kythuatcongtrinh,
  congnghethongtin,
  cakhoi,
  codiendientu,
  saudaihoc,
}) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Tổng bài</th>
            <th>SL Bài trong trường</th>
            <th>SL Bài ngoài trường</th>
            <th>Tổng tác giả</th>
            <th>SL tác giả trong trường</th>
            <th>SL tác giả ngoài trường</th>
            <th>SL chấp nhận đăng</th>
            <th>SL không chấp nhận đăng</th>
            <th>SL chưa chấp nhận đăng</th>
            <th>SL chưa đăng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Các khối</td>
            <td>{cakhoi?.totalPosts}</td>
            <td>{cakhoi?.schoolPosts}</td>
            <td>{cakhoi?.outsideSchoolPosts}</td>
            <td>{cakhoi?.totalAuthors}</td>
            <td>{cakhoi?.totalAuthorsInSideSchool}</td>
            <td>{cakhoi?.totalAuthorsOutSideSchool}</td>
            <td>{cakhoi?.acceptedPosts}</td>
            <td>{cakhoi?.rejectedPosts}</td>
            <td>{cakhoi?.pendingAcceptance}</td>
            <td>{cakhoi?.unpublishedPosts}</td>
          </tr>
          <tr>
            <td>Khoa Cơ điện-Điện tử</td>
            <td>{codiendientu?.totalPosts}</td>
            <td>{codiendientu?.schoolPosts}</td>
            <td>{codiendientu?.outsideSchoolPosts}</td>
            <td>{codiendientu?.totalAuthors}</td>
            <td>{codiendientu?.totalAuthorsInSideSchool}</td>
            <td>{codiendientu?.totalAuthorsOutSideSchool}</td>
            <td>{codiendientu?.acceptedPosts}</td>
            <td>{codiendientu?.rejectedPosts}</td>
            <td>{codiendientu?.pendingAcceptance}</td>
            <td>{codiendientu?.unpublishedPosts}</td>
          </tr>
          <tr>
            <td>Khoa Công nghệ thông tin</td>
            <td>{congnghethongtin?.totalPosts}</td>
            <td>{congnghethongtin?.schoolPosts}</td>
            <td>{congnghethongtin?.outsideSchoolPosts}</td>
            <td>{congnghethongtin?.totalAuthors}</td>
            <td>{congnghethongtin?.totalAuthorsInSideSchool}</td>
            <td>{congnghethongtin?.totalAuthorsOutSideSchool}</td>
            <td>{congnghethongtin?.acceptedPosts}</td>
            <td>{congnghethongtin?.rejectedPosts}</td>
            <td>{congnghethongtin?.pendingAcceptance}</td>
            <td>{congnghethongtin?.unpublishedPosts}</td>
          </tr>
          <tr>
            <td>Khoa Kỹ thuật Công trình</td>
            <td>{kythuatcongtrinh?.totalPosts}</td>
            <td>{kythuatcongtrinh?.schoolPosts}</td>
            <td>{kythuatcongtrinh?.outsideSchoolPosts}</td>
            <td>{kythuatcongtrinh?.totalAuthors}</td>
            <td>{kythuatcongtrinh?.totalAuthorsInSideSchool}</td>
            <td>{kythuatcongtrinh?.totalAuthorsOutSideSchool}</td>
            <td>{kythuatcongtrinh?.acceptedPosts}</td>
            <td>{kythuatcongtrinh?.rejectedPosts}</td>
            <td>{kythuatcongtrinh?.pendingAcceptance}</td>
            <td>{kythuatcongtrinh?.unpublishedPosts}</td>
          </tr>
          <tr>
            <td>Khoa Sau Đại Học</td>
            <td>{saudaihoc?.totalPosts}</td>
            <td>{saudaihoc?.schoolPosts}</td>
            <td>{saudaihoc?.outsideSchoolPosts}</td>
            <td>{saudaihoc?.totalAuthors}</td>
            <td>{saudaihoc?.totalAuthorsInSideSchool}</td>
            <td>{saudaihoc?.totalAuthorsOutSideSchool}</td>
            <td>{saudaihoc?.acceptedPosts}</td>
            <td>{saudaihoc?.rejectedPosts}</td>
            <td>{saudaihoc?.pendingAcceptance}</td>
            <td>{saudaihoc?.unpublishedPosts}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DBKhoiKyThuatTable;
