import TableRow from "./TableRow";
import getPersonAge from "../utils/getPersonAge";
import sortTable from "../utils/sortTable";

export default function TableBody(props) {
  const rows = [];

  for (let i = 0; i < props.names.length; i++) {
    const name = props.names?.[i];
    const age = getPersonAge(props.ages?.[name]);
    const tech = props.technologies?.[i];
    rows.push({ name, tech, age });
  }

  const rowData = sortTable(rows, props.sortBy, props.sortOrder).map(
    (person, ind) => <TableRow key={ind} person={person} />
  );
  return <tbody>{rowData}</tbody>;
}
