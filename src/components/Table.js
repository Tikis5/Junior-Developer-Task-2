import { useState } from "react";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table(props) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  function handleClick(sortByValue) {
    setSortBy(sortByValue);

    if (sortByValue === sortBy) {
      setSortOrder(!sortOrder);
    } else {
      setSortOrder(true);
    }
  }
  return (
    <table>
      <TableHead
        handleClick={handleClick}
        sortOrder={sortOrder}
        sortBy={sortBy}
      />
      <TableBody sortBy={sortBy} sortOrder={sortOrder} {...props} />
    </table>
  );
}
