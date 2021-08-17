export default function sortTable(data, sortBy) {
  if (sortBy === "Name") {
    return data.sort((a, b) => {
      const nameA = a[0].toUpperCase();
      const nameB = b[0].toUpperCase();
      return sortData(nameA, nameB);
    });
  } else if (sortBy === "Tech") {
    return data.sort((a, b) => {
      const techA = a[1].toUpperCase();
      const techB = b[1].toUpperCase();
      return sortData(techA, techB);
    });
  } else if (sortBy === "Age") {
    return data.sort((a, b) => {
      const ageA = a[2];
      const ageB = b[2];
      return sortData(ageA, ageB);
    });
  } else {
    return data;
  }
}

function sortData(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}
