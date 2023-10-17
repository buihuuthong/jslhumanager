import React from "react";

const DBKhoiKinhTeTable  = ({
  cakhoi,
  saudaihoc,
  qtktqt,
  tckt,
  nt,
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
          <tr>
            <td>Khoa QT - KTQT</td>
            <td>{qtktqt?.totalPosts}</td>
            <td>{qtktqt?.schoolPosts}</td>
            <td>{qtktqt?.outsideSchoolPosts}</td>
            <td>{qtktqt?.totalAuthors}</td>
            <td>{qtktqt?.totalAuthorsInSideSchool}</td>
            <td>{qtktqt?.totalAuthorsOutSideSchool}</td>
            <td>{qtktqt?.acceptedPosts}</td>
            <td>{qtktqt?.rejectedPosts}</td>
            <td>{qtktqt?.pendingAcceptance}</td>
            <td>{qtktqt?.unpublishedPosts}</td>
          </tr>
          <tr>
            <td>Khoa TC - KT</td>
            <td>{tckt?.totalPosts}</td>
            <td>{tckt?.schoolPosts}</td>
            <td>{tckt?.outsideSchoolPosts}</td>
            <td>{tckt?.totalAuthors}</td>
            <td>{tckt?.totalAuthorsInSideSchool}</td>
            <td>{tckt?.totalAuthorsOutSideSchool}</td>
            <td>{tckt?.acceptedPosts}</td>
            <td>{tckt?.rejectedPosts}</td>
            <td>{tckt?.pendingAcceptance}</td>
            <td>{tckt?.unpublishedPosts}</td>
          </tr>
          <tr>
            <td>Ngoài trường</td>
            <td>{nt?.totalPosts}</td>
            <td>{nt?.schoolPosts}</td>
            <td>{nt?.outsideSchoolPosts}</td>
            <td>{nt?.totalAuthors}</td>
            <td>{nt?.totalAuthorsInSideSchool}</td>
            <td>{nt?.totalAuthorsOutSideSchool}</td>
            <td>{nt?.acceptedPosts}</td>
            <td>{nt?.rejectedPosts}</td>
            <td>{nt?.pendingAcceptance}</td>
            <td>{nt?.unpublishedPosts}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DBKhoiKinhTeTable ;
