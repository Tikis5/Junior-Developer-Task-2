import TableRow from "./TableRow";
import getPersonAge from "../utils/getPersonAge";
import sortTable from "../utils/sortTable";

export default function TableBody(props) {
  const rows = [];

  for (let i = 0; i < props.names.length; i++) {
    const currentName = props.names?.[i];
    const personAge = getPersonAge(props.ages?.[currentName]); 
    const personTechnology = props.technologies?.[i];
    rows.push([currentName, personTechnology, personAge]);
  }

  const rowData = sortTable(rows, props.sortBy).map((person, ind) => (
    <TableRow key={ind} person={person} />
  ));

  return <tbody>{rowData}</tbody>;
}
