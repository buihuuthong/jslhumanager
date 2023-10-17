export const countTotalPosts = (data) => data?.length;

export const countSchoolPosts = (data) =>
  data?.filter((item) => item.DonVi !== "Ngoài trường")?.length;

export const countOutsideSchoolPosts = (data) =>
  data?.filter((item) => item.DonVi === "Ngoài trường")?.length;

export const countUniqueNames = (data, isSchool) => {
  const nameCount = {};
  let uniqueCount = 0;

  data?.forEach((item) => {
    const name = item.TenTacGia;
    const isInsideSchool = item.DonVi !== "Ngoài trường";

    if ((isSchool && isInsideSchool) || (!isSchool && !isInsideSchool)) {
      if (!nameCount[name]) {
        nameCount[name] = true;
        uniqueCount++;
      }
    }
  });

  return uniqueCount;
};

export const countTotalAuthors = (data) => {
  const nameCount = {};
  let uniqueCount = 0;

  data?.forEach((item) => {
    const name = item.TenTacGia;
    if (!nameCount[name]) {
      nameCount[name] = true;
      uniqueCount++;
    }
  });

  return uniqueCount;
};

export const countAcceptedPosts = (data) =>
  data?.filter((item) => item.ChapNhanXuatBan === "Chấp nhận")?.length;

export const countRejectedPosts = (data) =>
  data?.filter((item) => item.ChapNhanXuatBan === "Không chấp nhận")?.length;

export const countPendingAcceptance = (data) =>
  data?.filter((item) => item.ChapNhanXuatBan === "Chưa chấp nhận")?.length;

export const countUnpublishedPosts = (data) =>
  data?.filter((item) => item.ChapNhanDang === "Chưa đăng")?.length;
