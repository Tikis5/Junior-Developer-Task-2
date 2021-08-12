export default function TableHead() {
    const headerElement = ["Name", "Tech", "Age"];
  
    return (
      <thead>
        <tr>
          {headerElement.map((el, ind) => {
            return (
              <th key={ind}>
                { el }
              </th>
            )
          })}
        </tr>
      </thead>
    )
  }