type Props = {
  defaultDayNumber?: number;
  defaultDayOfWeek?: number;
  defaultMonth?: number;
};

export const DateSelector = ({ defaultDayNumber, defaultDayOfWeek, defaultMonth }: Props) => {
  return (
    <div>
      <span className="me-2">Effective</span>
      <select name="nth" className="gwiNth" defaultValue={defaultDayNumber}>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
      </select>
      <select name="dayOfWeek" className="gwiDayOfWeek" defaultValue={defaultDayOfWeek}>
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
        <option value="7">Sunday</option>
      </select>
      <span className="mx-1">of</span>
      <select name="month" className="gwiMonth" defaultValue={defaultMonth}>
        <option value="1">Jan</option>
        <option value="2">Feb</option>
        <option value="3">Mar</option>
        <option value="4">Apr</option>
        <option value="5">May</option>
        <option value="6">Jun</option>
        <option value="7">Jul</option>
        <option value="8">Aug</option>
        <option value="9">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
    </div>
  );
};
