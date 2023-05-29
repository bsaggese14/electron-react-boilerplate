type VacationObject = {
  rangeStart: number;
  rangeEnd: number;
  hours: number;
};

export type Props = {
  vacationObjects: VacationObject[];
};

export const VacationTable = ({ vacationObjects }: Props) => {
  return (
    <table className="table table-sm table-striped vacationTable">
      <thead>
        <tr>
          <th scope="col">Years of Service</th>
          <th scope="col">Hours</th>
        </tr>
      </thead>
      <tbody>
        {vacationObjects.map((vacation, index) => {
          return (
            <tr key={index}>
              <td>
                <input type="text" defaultValue={vacation.rangeStart} />-<input type="text" defaultValue={vacation.rangeEnd} />
              </td>
              <td>
                <input type="text" defaultValue={vacation.hours} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
