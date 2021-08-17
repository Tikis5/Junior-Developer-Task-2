export default function TableRow(props) {
  
  return (
    <tr>
      {props.person.map((p, pInd) => {
        return <td key={pInd}>{p}</td>;
      })}
    </tr>
  );
  
}
