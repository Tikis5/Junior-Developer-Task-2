export default function sortTable(data, sortBy, sortOrder) {
  if (sortBy !== null) {
    return data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return sortOrder ? -1 : 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return sortOrder ? 1 : -1;
      }
      return 0;
    });
  } else {
    return data;
  }
}
