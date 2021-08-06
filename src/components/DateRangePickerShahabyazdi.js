//// https://shahabyazdi.github.io/react-multi-date-picker/installation/
import React, { useState } from "react";
import DatePicker, { getAllDatesInRange } from "react-multi-date-picker";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";
import "./DateRangePickerShahabyazdi.css";

import "react-multi-date-picker/styles/layouts/prime.css"

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function CustomInput({ openCalendar, value, dates }) {
  return (
    <div className="DateRangeInput">
    <input type='text'
      value={value + (dates.length ? ` (${dates.length-1} nights)` : "")}
      onFocus={openCalendar}
      placeholder="Check in - Check out"

      readOnly
    />
    </div>
  );
}

function DateRangePickerShahabyazdi(props) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleChange = (update) => {
    setDateRange(update);
  };

  return (
    <div>
      <DatePicker
        id="dateRangePickShakh"
        name="dateRangePickShakh"
        layout='prime'

        calendarPosition='bottom-start'
        fixRelativePosition='true'

        value={dateRange}
        onChange={handleChange}
        onClose={() =>
          props.funck(
            startDate === null ? null : startDate.toDate(),
            endDate === null ? null : endDate.toDate()
          )
        }
        range
        // format="DD/MM/YYYY"
        format="ddd. DD MMM."
        // format="ddd. DD.MM.YY"
        render={<CustomInput dates={getAllDatesInRange(dateRange)} />}
        
        minDate={addDays(new Date(), 3)}
        
        //// двойной календарь
        numberOfMonths={2}
        // numberOfMonths={1}
        
        weekStartDayIndex={1}

        //// для нижнего блока
        plugins={[
          <Footer
            position="bottom"
            // format="DD.MM.YYYY"
            format="DD MMM. YYYY"
            names={{
              // selectedDates: "Stay Dates:",
              // from: "Check In:",
              // to: "Check Out:",
              // selectDate: "select",
              // close: "Close",
              // separator: " ",
              selectedDates: "Stay Dates:",
              from: "In:",
              to: "Out:",
              selectDate: "",
              close: "Close",
              separator: " ",
            }}
          />,
        ]}
        weekDays={["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]}
        months={[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]}
        mapDays={({ date }) => {
          let props = {};
          let isWeekend = [0, 6].includes(date.weekDay.index);

          if (isWeekend) props.className = "highlight highlight-red";

          return props;
        }}
        // className="bg-dark"
        className="rmdp-prime"

        required

        mainPosition="bottom"
      >
        <button
          // style={{
          //   // margin: "8px",
          //   // padding: "6px",
          //   // backgroundColor: "#39566b",
          //   // color: "white",
          //   // borderRadius: 10,
          //   // cursor: 'pointer'

          //   color: '#fff',
          //   backgroundColor: '#39566b',
          //   borderColor: '#39566b',        
          //   // float: 'right',
          //   // width: '100%',
          //   height: '36px',
          //   // marginTop: '25px',
          //   borderRadius: '4px',
          //   cursor: 'pointer',
          //   padding: '10px',
          //   margin: '8px'
          // }}
          onClick={() => setDateRange([null, null])}
        >
          Clear Dates
        </button>
      </DatePicker>
    </div>
  );
}

export default DateRangePickerShahabyazdi;
