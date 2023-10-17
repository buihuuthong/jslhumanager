import React from "react";

const DBKhoiHoaDuocTable = ({
  cakhoi,
  duoc,
  khcntp,
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
            <td>Khoa Dược</td>
            <td>{duoc?.totalPosts}</td>
            <td>{duoc?.schoolPosts}</td>
            <td>{duoc?.outsideSchoolPosts}</td>
            <td>{duoc?.totalAuthors}</td>
            <td>{duoc?.totalAuthorsInSideSchool}</td>
            <td>{duoc?.totalAuthorsOutSideSchool}</td>
            <td>{duoc?.acceptedPosts}</td>
            <td>{duoc?.rejectedPosts}</td>
            <td>{duoc?.pendingAcceptance}</td>
            <td>{duoc?.unpublishedPosts}</td>
          </tr>
          <tr>
            <td>Khoa Khoa học và CNTP</td>
            <td>{khcntp?.totalPosts}</td>
            <td>{khcntp?.schoolPosts}</td>
            <td>{khcntp?.outsideSchoolPosts}</td>
            <td>{khcntp?.totalAuthors}</td>
            <td>{khcntp?.totalAuthorsInSideSchool}</td>
            <td>{khcntp?.totalAuthorsOutSideSchool}</td>
            <td>{khcntp?.acceptedPosts}</td>
            <td>{khcntp?.rejectedPosts}</td>
            <td>{khcntp?.pendingAcceptance}</td>
            <td>{khcntp?.unpublishedPosts}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DBKhoiHoaDuocTable;
