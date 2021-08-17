import { useState } from "react";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table(props) {
  const [sortBy, setSortBy] = useState(null);

  function handleClick(el) {
    setSortBy(el);
  }
  return (
    <table>
      <TableHead handleClick={handleClick} />
      <TableBody sortBy={sortBy} {...props} />
    </table>
  );
}
