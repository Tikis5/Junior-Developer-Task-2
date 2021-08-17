export default function TableHead(props) {
    const headerElement = ["Name", "Tech", "Age"];
    const {handleClick} = props;

    return (
      <thead>
        <tr>
          {headerElement.map((el, ind) => {
            return (
              <th key={ind} onClick={() => handleClick(el)}>
                { el }
              </th>
            )
          })}
        </tr>
      </thead>
    )
  }