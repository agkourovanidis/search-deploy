//// https://shahabyazdi.github.io/react-multi-date-picker/installation/
import React, { useState } from "react";
import DatePicker, { getAllDatesInRange } from "react-multi-date-picker";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";

import "react-multi-date-picker/styles/layouts/prime.css"

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function DateRangePickerShahabyazdiOLD(props) {
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
        style={{
          marginTop: "0px",
          // display: "block",
          width: "215px",
          // height: "20px",
          // padding: "6px, 12px",
          // fontSize: "15px",
          // lineHeight: 1.42857143,
          // color: "#39566b",
          // backgroundColor: "#fff",
          // backgroundImage: "none",
          // border: "1px solid #ccc",
          borderRadius: "0px",
        }}
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

        
        minDate={addDays(new Date(), 3)}
        numberOfMonths={2}
        weekStartDayIndex={1}
        // shadow={false}
        placeholder="Check in - Check out"
        plugins={[
          <Footer
            position="bottom"
            format="DD.MM.YYYY"
            // format="DD MMM"
            names={{
              selectedDates: "Stay Dates:",
              from: "Check In:",
              to: "Check Out:",
              selectDate: "select",
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

export default DateRangePickerShahabyazdiOLD;
