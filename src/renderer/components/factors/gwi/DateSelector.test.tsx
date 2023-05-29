import { render, screen } from "@testing-library/react";
import { DateSelector } from "./DateSelector";

describe("DateSelector", () => {
  it("renders places options", () => {
    const places = ["1st", "2nd", "3rd", "4th"];
    render(<DateSelector></DateSelector>);
    places.map((place) => screen.getByText(place));
  });

  it("renders days of the week options", () => {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    render(<DateSelector></DateSelector>);
    daysOfWeek.map((day) => screen.getByText(day));
  });

  it("renders month options", () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    render(<DateSelector></DateSelector>);
    months.map((month) => screen.getByText(month));
  });
});
