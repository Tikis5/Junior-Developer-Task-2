import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table(props) {
  return (
    <table>
      <TableHead />
      <TableBody {...props} />
    </table>
  );
}
