export const paginator = (currentPage, itemByPage, maxShow) => {
  const maxPagination = 3;
  let paginationArray = [];
  const finalPage = Math.ceil(maxShow / itemByPage);
  let pagResutl = { array: [], showNext: false, showPrev: false };

  if (currentPage < maxPagination) {
    for (let i = 1; i <= maxPagination + 1; i += 1) {
      paginationArray.push(i);
    }
    paginationArray.push('...');
    paginationArray.push(finalPage);
    pagResutl = {
      array: paginationArray,
      showNext: true,
      showPrev: false
    };
  }

  if (
    currentPage >= maxPagination &&
    currentPage <= finalPage - maxPagination
  ) {
    const offset = Math.floor(maxPagination / 2);
    paginationArray = [1, '...'];

    for (let i = currentPage - offset; i <= currentPage + offset; i += 1) {
      paginationArray.push(i);
    }
    paginationArray.push('...');
    paginationArray.push(finalPage);

    pagResutl = {
      array: paginationArray,
      showNext: true,
      showPrev: true
    };
  }

  if (currentPage === finalPage || currentPage > finalPage - maxPagination) {
    paginationArray = [1, '...'];

    for (let i = finalPage - maxPagination; i <= finalPage; i += 1) {
      paginationArray.push(i);
    }

    pagResutl = {
      array: paginationArray,
      showNext: false,
      showPrev: true
    };
  }
  return pagResutl;
};
