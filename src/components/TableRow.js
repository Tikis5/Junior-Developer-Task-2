import getPersonAge from "../utils/getPersonAge";

export default function TableRow(props) {
  return (
    <tr>
      {props.person.map((p, pInd) => {
        const value = p?.Birth ? getPersonAge(p) : p;
        return <td key={pInd}>{value}</td>;
      })}
    </tr>
  );
}
