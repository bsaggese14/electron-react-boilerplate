type GwiObject = {
  year: string;
  percent: number;
  bonus: number;
};

export type Props = {
  gwiObjects: GwiObject[];
};

export const GwiTable = ({ gwiObjects }: Props) => {
  return (
    <table className="table table-sm gwiTable">
      <thead>
        <tr>
          <th scope="row">Year</th>
          {gwiObjects.map((gwi, index) => {
            return (
              <th key={index} scope="col">
                {gwi.year}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr className="rowPercent">
          <th scope="row">Percent</th>
          {gwiObjects.map((gwi, index) => {
            return (
              <td key={index}>
                <input type="text" defaultValue={gwi.percent} />%
              </td>
            );
          })}
        </tr>
        <tr className="rowBonus">
          <th scope="row">Bonus</th>
          {gwiObjects.map((gwi, index) => {
            return (
              <td key={index}>
                <input type="text" defaultValue={gwi.bonus} />
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};
