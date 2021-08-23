export default function TableRow(props) {
  return (
    <tr>
      <td>{props.person.name}</td>
      <td>{props.person.tech}</td>
      <td>{props.person.age}</td>
    </tr>
  );
}
