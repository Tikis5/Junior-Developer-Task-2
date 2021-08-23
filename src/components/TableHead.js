import Arrow from "./Arrow";

import "../styles/tableHeading.css";

export default function TableHead(props) {
  const headerElement = ["Name", "Tech", "Age"];

  return (
    <thead>
      <tr>
        {headerElement.map((el, ind) => {
          return (
            <th key={ind} onClick={() => props.handleClick(el.toLowerCase())}>
              <div className="table-heading">
                {el}
                {props.sortBy === el.toLowerCase() && (
                  <Arrow arrow={props.sortOrder ? "up" : "down"} />
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
