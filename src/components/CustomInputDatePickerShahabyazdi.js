// just an example
import DatePicker, { getAllDatesInRange } from "react-multi-date-picker";
import { useState } from "react";

export default function CustomInputDatePickerShahabyazdi() {
  const [values, setValues] = useState();

  return (
    <div className="App">
      <DatePicker
        value={values}
        onChange={setValues}
        range
        format="ddd. DD MMM"
        render={<CustomInput dates={getAllDatesInRange(values)} />}
        containerStyle={{ width: "300px" }}
      />
    </div>
  );
}

function CustomInput({ openCalendar, value, dates }) {
  return (
    <input
      className="rmdp-input"
      style={{ width: "100%" }}
      value={value + (dates.length ? ` (${dates.length} days)` : "")}
      onFocus={openCalendar}
      readOnly
    />
  );
}

