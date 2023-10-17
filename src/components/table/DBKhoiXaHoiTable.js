import React from "react";

const DBKhoiXaHoiTable = ({
  cakhoi,
  dongphuong,
  nnanh,
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
            <td>Khoa Đông Phương</td>
            <td>{dongphuong?.totalPosts}</td>
            <td>{dongphuong?.schoolPosts}</td>
            <td>{dongphuong?.outsideSchoolPosts}</td>
            <td>{dongphuong?.totalAuthors}</td>
            <td>{dongphuong?.totalAuthorsInSideSchool}</td>
            <td>{dongphuong?.totalAuthorsOutSideSchool}</td>
            <td>{dongphuong?.acceptedPosts}</td>
            <td>{dongphuong?.rejectedPosts}</td>
            <td>{dongphuong?.pendingAcceptance}</td>
            <td>{dongphuong?.unpublishedPosts}</td>
          </tr>
          <tr>
            <td>Khoa Ngôn ngữ Anh</td>
            <td>{nnanh?.totalPosts}</td>
            <td>{nnanh?.schoolPosts}</td>
            <td>{nnanh?.outsideSchoolPosts}</td>
            <td>{nnanh?.totalAuthors}</td>
            <td>{nnanh?.totalAuthorsInSideSchool}</td>
            <td>{nnanh?.totalAuthorsOutSideSchool}</td>
            <td>{nnanh?.acceptedPosts}</td>
            <td>{nnanh?.rejectedPosts}</td>
            <td>{nnanh?.pendingAcceptance}</td>
            <td>{nnanh?.unpublishedPosts}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DBKhoiXaHoiTable;
