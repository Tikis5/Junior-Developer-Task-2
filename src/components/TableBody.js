import TableRow from "./TableRow";

export default function TableBody(props) {
  const rows = [];

  for (let i = 0; i < props.names.length; i++) {
    const currentName = props.names?.[i];
    const personAge = props.ages?.[currentName];
    const personTechnology = props.technologies?.[i];
    rows.push([currentName, personTechnology, personAge]);
  }

  const rowData = rows.map((person, ind) => (
    <TableRow key={ind} person={person} />
  ));

  return <tbody>{rowData}</tbody>;
}
